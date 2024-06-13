from flask import Flask, jsonify, request, abort, send_file
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import requests
import psycopg2
from threading import Thread, Event
import io
import json
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")

DB_DETAILS = {
    "dbname": "",
    "user": "postgres",
    "password": "",
    "host": "localhost",
    "port": "5432"
}

STRAPI_TOKEN = "Bearer YOUR API TOKEN"

stop_event = Event()

def sanitize_filename(filename):
    return "".join(c for c in filename if c.isalnum() or c in (' ', '_')).rstrip()

@app.route('/generate-image', methods=['POST'])
def generate_and_save_image():
    data = request.json
    prompt = data.get('prompt', '')
    
    url = 'https://api.vyro.ai/v1/imagine/api/generations'
    headers = {
        'Authorization': 'Bearer YOUR API_KEY'
    }
    payload = {
        'prompt': (None, prompt),
        'style_id': (None, '29')
    }
    
    response = requests.post(url, headers=headers, files=payload)
    if response.status_code == 200:
        try:
           
            image_content = io.BytesIO(response.content)
            
           
            sanitized_prompt = sanitize_filename(prompt)
            filename = f"{sanitized_prompt}.jpg"
        
            files = {
                'files': (filename, image_content, 'image/jpeg')
            }
            strapi_media_url = "http://localhost:1337/api/upload"
            strapi_headers = {
                'Authorization': "Bearer STRAPI_API_TOKEN",
            }
            strapi_media_response = requests.post(strapi_media_url, files=files, headers=strapi_headers)
            
            if strapi_media_response.status_code == 200:
                image_url = strapi_media_response.json()[0].get('url', '')
                if not image_url.startswith("http"):
                    image_url = "http://localhost:1337" + image_url 
                return jsonify({'success': True, 'image_url': image_url}), 200
            else:
                return jsonify({'error': 'Failed to upload image to Strapi media library'}), 500
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'Failed to generate image'}), 500
def fetch_from_strapi(endpoint, params=None):
    try:
        response = requests.get(endpoint, headers={'Authorization': STRAPI_TOKEN}, params=params)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        return {"error": str(e)}

def fetch_from_db(query):
    try:
        conn = psycopg2.connect(**DB_DETAILS)
        cur = conn.cursor()
        cur.execute(query)
        result = cur.fetchall()
        cur.close()
        conn.close()
        return result
    except psycopg2.Error as e:
        return {"error": str(e)}

def emit_update_event(data):
    socketio.emit('update', data)

def get_menus_data():
    strapi_url = "http://localhost:1337/api/menus?populate=*"
    strapi_data = fetch_from_strapi(strapi_url)
    if "error" not in strapi_data:
        emit_update_event(strapi_data)
        return strapi_data
    else:
        db_query = "SELECT * FROM menus"
        db_result = fetch_from_db(db_query)
        if "error" not in db_result:
            data = {"data": [{"id": row[0], "attributes": {"name": row[1], "description": row[2], "image": {"data": {"attributes": {"name": row[3]}}}}} for row in db_result]}
            emit_update_event(data)
            return data
        return db_result

def get_product_data(slug=""):
    strapi_url = "http://localhost:1337/api/menus"
    params = {"filters[slug]": slug}
    strapi_data = fetch_from_strapi(strapi_url, params)
    if "error" not in strapi_data:
        emit_update_event(strapi_data)
        return strapi_data
    else:
        db_query = f"SELECT * FROM products WHERE slug = '{slug}'"
        db_result = fetch_from_db(db_query)
        if "error" not in db_result:
            data = {"data": [{"id": row[0], "attributes": {"name": row[1], "description": row[2], "image": {"data": {"attributes": {"name": row[3]}}}}} for row in db_result]}
            emit_update_event(data)
            return data
        return db_result

@app.route('/api/menus', methods=['GET'])
def get_menus():
    menu_data = get_menus_data()
    return jsonify(menu_data)

@app.route('/api/product', methods=['GET'])
def get_product():
    slug = request.args.get('slug', "")
    product_data = get_product_data(slug)
    return jsonify(product_data)

@socketio.on('get_data')
def send_initial_data():
    menu_data = get_menus_data()
    emit('initial_data', menu_data)

def poll_for_changes():
    last_data = None
    while not stop_event.is_set():
        current_data = get_menus_data()
        if current_data != last_data:
            emit_update_event(current_data)
            last_data = current_data
        stop_event.wait(1)

if __name__ == '__main__':
    poll_thread = Thread(target=poll_for_changes)
    poll_thread.start()
    try:
        socketio.run(app, debug=True)
    finally:
        stop_event.set()
        poll_thread.join()

try:
    conn = psycopg2.connect(**DB_DETAILS)
    print("Connection to PostgreSQL database successful")
    conn.close()
except psycopg2.Error as e:
    print("Unable to connect to the database:", e)
