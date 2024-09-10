import React from 'react';
import { FaTag, FaClock, FaGift } from 'react-icons/fa';
import 'animate.css'; // Import Animate.css for ongoing animations

const Promotions = () => {
  return (
    <div className="bg-gradient-to-r from-green-800 to-green-600 py-12">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6 animate__animated animate__pulse animate__infinite">
          Exclusive Promotions
        </h2>
        <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Take advantage of our limited-time offers and save on the latest iPhones.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-30 p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-3s">
            <FaTag className="text-4xl text-orange-500 mx-auto mb-4 animate__animated animate__bounce animate__infinite" />
            <h3 className="text-2xl font-semibold mb-2">Up to 30% Off</h3>
            <p className="text-gray-200">Save up to 30% on select iPhone models. Hurry, while supplies last!</p>
          </div>
          <div className="bg-white bg-opacity-30 p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-4s">
            <FaClock className="text-4xl text-orange-500 mx-auto mb-4 animate__animated animate__tada animate__infinite" />
            <h3 className="text-2xl font-semibold mb-2">Limited Time Only</h3>
            <p className="text-gray-200">Don’t miss out on these exclusive deals available for a limited time only.</p>
          </div>
          <div className="bg-white bg-opacity-30 p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-5s">
            <FaGift className="text-4xl text-orange-500 mx-auto mb-4 animate__animated animate__swing animate__infinite" />
            <h3 className="text-2xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-200">Enjoy free shipping on all orders over $500. Shop now and save!</p>
          </div>
        </div>
        
        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300 animate__animated animate__fadeIn animate__delay-6s">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Promotions;
