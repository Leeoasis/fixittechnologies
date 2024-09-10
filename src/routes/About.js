import React from 'react';
import heroImage from '../assets/images/heroback.jpeg';
import { FaHandsHelping, FaUserShield, FaLightbulb } from 'react-icons/fa'; // Example icons
import WhyChooseUs from '../components/homeComponents/WhyChooseUs';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center py-16" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Fixittechnologies</h1>
          <p className="text-lg md:text-xl text-white">
            Discover our commitment to providing the latest iPhones and exceptional service.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            At Fixittechnologies, our mission is to provide the latest iPhone models at unbeatable prices while offering exceptional customer service and support.
          </p>
          <blockquote className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 italic">
              "Our commitment is to ensure that every customer finds the perfect iPhone that meets their needs while experiencing unmatched support and value."
            </p>
            <footer className="mt-4 text-gray-800 font-semibold">- Fixittechnologies Team</footer>
          </blockquote>
        </div>
      </section>

      {/* Core Values with Icons */}
      <section className="bg-gray-50 py-16 px-4">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10">Our Core Values</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <FaUserShield className="text-orange-600 text-4xl mb-4" />
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Integrity</h3>
        <p className="text-gray-600">
          We uphold the highest standards of integrity in all our actions.
        </p>
      </div>
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <FaHandsHelping className="text-orange-600 text-4xl mb-4" />
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
        <p className="text-gray-600">
          Our customers are at the heart of everything we do.
        </p>
      </div>
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <FaLightbulb className="text-orange-600 text-4xl mb-4" />
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Innovation</h3>
        <p className="text-gray-600">
          We continually innovate to meet our customers' needs.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Commented Unique Selling Points Section */}
      {/* <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto">
              <img src={uniqueSellingPointImage} alt="Unbeatable Prices" className="w-full h-32 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-4">Unbeatable Prices</h3>
              <p className="text-gray-600">
                We offer competitive pricing on the latest iPhone models, ensuring you get the best value for your money.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto">
              <img src={uniqueSellingPointImage} alt="Exceptional Support" className="w-full h-32 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-4">Exceptional Support</h3>
              <p className="text-gray-600">
                Our dedicated customer support team is always ready to assist you with any questions or concerns.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto">
              <img src={uniqueSellingPointImage} alt="High-Quality Products" className="w-full h-32 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-4">High-Quality Products</h3>
              <p className="text-gray-600">
                All our iPhones are certified pre-owned, ensuring top quality and reliability.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
