// ProductCard.js
import React from 'react';

const ProductCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img src="https://example.com/product-image.jpg" alt="Product" className="h-48 w-full object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold">Product Name</h3>
      <p className="text-gray-600 mt-2">$99.99</p>
      <button className="px-4 py-2 bg-orange-500 text-white rounded mt-4">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
