import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Mission Statement */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
          <p className="text-lg text-gray-600">
            At Fixittechnologies, our mission is to provide the latest iPhone models at unbeatable prices while offering exceptional customer service and support.
          </p>
        </section>

        {/* Core Values */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Core Values</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span className="text-lg text-gray-700">Integrity</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span className="text-lg text-gray-700">Customer Focus</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span className="text-lg text-gray-700">Innovation</span>
            </div>
          </div>
        </section>

        {/* Unique Selling Points */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
              <h3 className="text-xl font-semibold mb-4">Unbeatable Prices</h3>
              <p className="text-gray-600">
                We offer competitive pricing on the latest iPhone models, ensuring you get the best value for your money.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
              <h3 className="text-xl font-semibold mb-4">Exceptional Support</h3>
              <p className="text-gray-600">
                Our dedicated customer support team is always ready to assist you with any questions or concerns.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
              <h3 className="text-xl font-semibold mb-4">High-Quality Products</h3>
              <p className="text-gray-600">
                All our iPhones are certified pre-owned, ensuring top quality and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? Feel free to reach out to us:
          </p>
          <div className="mt-4">
            <p className="text-gray-700">Email: support@fixittechnologies.com</p>
            <p className="text-gray-700">Phone: +27 123 456 789</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
              <p className="text-gray-600 italic">
                "Fixittechnologies provided me with an amazing iPhone at a great price. Highly recommended!"
              </p>
              <p className="mt-4 font-semibold">- John Doe</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
              <p className="text-gray-600 italic">
                "Fast shipping and excellent customer service. I love my new iPhone!"
              </p>
              <p className="mt-4 font-semibold">- Jane Smith</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
