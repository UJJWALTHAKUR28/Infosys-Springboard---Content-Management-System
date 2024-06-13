// pages/menu.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useWebSocket } from '@/contexts/WebsocketsContext';

const Menu = (props) => {
  const [products, setProducts] = useState(props.product.data);
  const socket = useWebSocket();

  useEffect(() => {
    if (socket) {
      socket.emit('get_data'); 
      socket.on('initial_data', (data) => {
        setProducts(data.data);
      });
      socket.on('update', (data) => {
        setProducts(data.data);
      });
      return () => {
        socket.off('initial_data');
        socket.off('update');
      };
    }
  }, [socket]);

  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                MENU - Explore Dishes
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.map((item) => (
              <div key={item.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center m-auto mb-8"
                    src={
                      item.attributes.image.data &&
                      item.attributes.image.data.attributes.name
                    }
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {item.attributes.category}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {item.attributes.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {item.attributes.description}
                  </p>
                  <Link href={`/product/${item.attributes.slug}`}>
                    <button className="inline-flex items-center text-white bg-orange-500 border-0 py-2 px-4 focus:outline-none hover:bg-orange-600 rounded text-sm mt-4 md:mt-0">
                      ORDER NOW
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const response = await fetch('http://127.0.0.1:5000/api/menus');
    const products = await response.json();
    return {
      props: {
        product: products,
      },
    };
  } catch (error) {
    console.error('Failed to fetch data from Python backend:', error);
    return {
      props: {
        product: { data: [] },
      },
    };
  }
}

export default Menu;
