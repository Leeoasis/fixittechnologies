import React from 'react';
import backgroundImage from '../../assets/images/heroback.jpeg';
import { FaShieldAlt, FaShippingFast, FaUndoAlt } from 'react-icons/fa';
import '../../styles/hero.css'; // Import the custom CSS for animations

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen relative flex flex-col overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay for better contrast */}
      <div className="bg-black bg-opacity-70 w-full h-full flex flex-col justify-center items-center text-center px-4 relative z-10 pt-16">
        {/* Tagline */}
        <p className="text-orange-400 text-sm sm:text-lg md:text-xl lg:text-2xl tracking-widest uppercase mb-4 animate-tagline max-w-md md:max-w-lg">
          Revolutionize Your Mobile Experience
        </p>
        {/* Primary Heading */}
        <h1
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide animate-heading max-w-md md:max-w-lg"
          aria-label="Discover the Latest iPhones"
        >
          Discover the Latest iPhones
        </h1>


        {/* Rich Description for SEO */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mt-6 max-w-md md:max-w-3xl bg-gray-900 bg-opacity-30 p-4 sm:p-6 rounded-lg shadow-lg">
          At <span className="font-semibold text-white">Fixittechnologies</span>, we offer the latest iPhone models at unbeatable prices.
          Whether you're looking for sleek designs, powerful performance, or top-tier camera technology, our iPhones
          deliver all that and more.
        </p>

        {/* Features Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center text-white text-sm sm:text-base max-w-md md:max-w-3xl">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <FaShieldAlt className="text-orange-500 text-xl md:text-2xl" />
            <span className="ml-2">1-Year Warranty</span>
          </div>
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <FaShippingFast className="text-orange-500 text-xl md:text-2xl" />
            <span className="ml-2">Free Shipping</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUndoAlt className="text-orange-500 text-xl md:text-2xl" />
            <span className="ml-2">Free Returns</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-md">
          <button
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300 animate-button w-full sm:w-auto"
            onClick={() => document.getElementById('featured-products').scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Now
          </button>
          <button
            className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 animate-button w-full sm:w-auto"
            onClick={() => document.getElementById('promotions').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Promotions
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
