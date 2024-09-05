import React from 'react';
import 'animate.css'; // Import Animate.css for ongoing animations

const FeaturedProducts = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured iPhones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
          {/* iPhone 12 */}
          <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl relative">
            <img
              src="https://example.com/iphone12.jpg"
              alt="iPhone 12"
              className="h-48 mx-auto rounded-lg object-cover transition-transform duration-500 transform hover:scale-110"
            />
            <h3 className="text-2xl font-bold mt-4 mb-2">iPhone 12</h3>
            <p className="text-gray-700 mb-4">$699</p>
            <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300 animate__animated animate__pulse animate__infinite animate__slow">
              Buy Now
            </button>
            <span className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate__animated animate__flash animate__infinite animate__slow">
              Hot Deal
            </span>
          </div>
          
          {/* iPhone 13 */}
          <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl relative">
            <img
              src="https://example.com/iphone13.jpg"
              alt="iPhone 13"
              className="h-48 mx-auto rounded-lg object-cover transition-transform duration-500 transform hover:scale-110"
            />
            <h3 className="text-2xl font-bold mt-4 mb-2">iPhone 13</h3>
            <p className="text-gray-700 mb-4">$799</p>
            <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300 animate__animated animate__pulse animate__infinite animate__slow">
              Buy Now
            </button>
            <span className="absolute top-2 right-2 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold animate__animated animate__bounce animate__infinite animate__slow">
              Limited Time Offer
            </span>
          </div>

          {/* iPhone 14 */}
          <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl relative">
            <img
              src="https://example.com/iphone14.jpg"
              alt="iPhone 14"
              className="h-48 mx-auto rounded-lg object-cover transition-transform duration-500 transform hover:scale-110"
            />
            <h3 className="text-2xl font-bold mt-4 mb-2">iPhone 14</h3>
            <p className="text-gray-700 mb-4">$899</p>
            <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300 animate__animated animate__pulse animate__infinite animate__slow">
              Buy Now
            </button>
            <span className="absolute top-2 right-2 bg-emerald-800 text-white px-3 py-1 rounded-full text-xs font-bold animate__animated animate__swing animate__infinite animate__slow">
              Best Seller
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
