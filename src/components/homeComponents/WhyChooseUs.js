import React from 'react';
import { FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa';
import 'animate.css'; // Import Animate.css for animations

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 animate__animated animate__fadeIn animate__delay-1s">
          Why Fixittechnologies Stands Out
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
            <div className="text-4xl text-blue-500 mb-4 animate__animated animate__pulse animate__infinite">
              <FaShieldAlt />
            </div>
            <h3 className="text-2xl font-semibold mb-2 animate__animated animate__fadeIn animate__delay-3s">Certified Pre-Owned Devices</h3>
            <p className="text-gray-700 animate__animated animate__fadeIn animate__delay-4s">
              Our pre-owned iPhones are thoroughly inspected and certified to ensure they meet high quality standards. Each device comes with a warranty, providing you with peace of mind and reliability.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
            <div className="text-4xl text-green-500 mb-4 animate__animated animate__pulse animate__infinite">
              <FaTruck />
            </div>
            <h3 className="text-2xl font-semibold mb-2 animate__animated animate__fadeIn animate__delay-4s">Complimentary Shipping on Orders</h3>
            <p className="text-gray-700 animate__animated animate__fadeIn animate__delay-5s">
              Enjoy free shipping on all orders over $500. We ensure your iPhone arrives quickly and safely at your doorstep without any additional cost.
            </p>
          </div>
          <div className="bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-4s">
            <div className="text-4xl text-orange-500 mb-4 animate__animated animate__pulse animate__infinite">
              <FaHeadset />
            </div>
            <h3 className="text-2xl font-semibold mb-2 animate__animated animate__fadeIn animate__delay-5s">Exceptional Customer Support</h3>
            <p className="text-gray-700 animate__animated animate__fadeIn animate__delay-6s">
              Our dedicated support team is available to assist you with any inquiries or concerns. We are committed to providing excellent service and resolving any issues promptly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
