import React, { useState } from 'react';

const QuantityAddButton = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value >= 1 ? value : 1);
  };

  return (
    <div className="flex items-center">
      <button
        className="text-gray-500 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
        onClick={incrementQuantity}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <input
        type="number"
        className="border border-gray-300 rounded-md px-3 py-1 mx-2 w-16 text-center"
        value={quantity}
        onChange={handleChange}
      />
    </div>
  );
};

export default QuantityAddButton;
