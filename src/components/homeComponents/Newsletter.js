// components/NewsletterSignup.js

import React from 'react';

const NewsletterSignup = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-4">Stay Updated!</h2>
        <p className="text-white text-lg mb-6">Subscribe to our newsletter for the latest offers and updates.</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg focus:outline-none"
          />
          <button className="px-6 py-2 bg-white text-orange-500 font-semibold rounded-r-lg hover:bg-gray-200">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
