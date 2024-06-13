import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '@/Components/Navbar';

const About1 = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/generate-image', { prompt });
      if (response.data.success) {
        setImageUrl(response.data.image_url);
      } else {
        console.error('Error:', response.data.error);
      }
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Generate Image</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-gray-700 text-xl font-bold mb-2">Prompt:</label>
          <input
            type="text"
            id="prompt"
            name="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded  focus:outline-none mx-auto focus:shadow-outline flex justify-center"
        >
          Generate
        </button>
      </form>
      {imageUrl && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Generated Image:</h2>
          <img src={imageUrl} alt="Generated" className="max-w-full h-auto flex justify-center" />
        </div>
      )}
    </div>
  );
};

export default About1;
