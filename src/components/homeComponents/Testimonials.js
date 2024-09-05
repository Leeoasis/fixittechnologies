import React from 'react';
import 'animate.css'; // Import Animate.css for animations

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 animate__animated animate__fadeIn animate__delay-1s">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
            <div className="flex items-center mb-6">
              <img
                src="https://via.placeholder.com/80"
                alt="John Doe"
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
              />
              <div className="ml-4">
                <p className="text-gray-600 italic text-lg mb-2">
                  "Fixittechnologies provided me with an amazing iPhone at a great price. Highly recommended!"
                </p>
                <p className="font-semibold text-gray-800">- John Doe</p>
              </div>
            </div>
          </div>
          {/* Testimonial Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
            <div className="flex items-center mb-6">
              <img
                src="https://via.placeholder.com/80"
                alt="Jane Smith"
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
              />
              <div className="ml-4">
                <p className="text-gray-600 italic text-lg mb-2">
                  "Fast shipping and excellent customer service. I love my new iPhone!"
                </p>
                <p className="font-semibold text-gray-800">- Jane Smith</p>
              </div>
            </div>
          </div>
          {/* Testimonial Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-4s">
            <div className="flex items-center mb-6">
              <img
                src="https://via.placeholder.com/80"
                alt="Michael Brown"
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
              />
              <div className="ml-4">
                <p className="text-gray-600 italic text-lg mb-2">
                  "The purchasing process was smooth, and my iPhone arrived quickly. Great experience!"
                </p>
                <p className="font-semibold text-gray-800">- Michael Brown</p>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-12 px-6 py-3 bg-orange-500 text-white font-bold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300 animate__animated animate__fadeIn animate__delay-5s">
          See More
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
