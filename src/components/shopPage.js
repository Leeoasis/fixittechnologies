import React from 'react';
import ProductCard from './shopComponents/ProductCard';
import CategorySidebar from './shopComponents/CategorySidebar';
import SearchBar from './shopComponents/Searchbar';
import Pagination from './shopComponents/Pagination';
import useWindowWidth from '../hooks/useWindowWidth';

const ShopPage = () => {
  const { width } = useWindowWidth(); // Use the custom hook to get window width

  // Conditionally render based on screen width
  const isMobile = width < 768; // Adjust this breakpoint as needed

  return (
    <div className="container mx-auto py-8 flex flex-col lg:flex-row">
      {/* Conditionally render CategorySidebar on larger screens */}
      {!isMobile && <CategorySidebar />}

      <div className="flex-1 p-4">
        {/* Search Bar */}
        <SearchBar />

        {/* Conditionally render sorting controls */}
        {!isMobile && (
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Our Products</h1>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-gray-200 rounded">Sort by Price</button>
              <button className="px-4 py-2 bg-gray-200 rounded">Sort by Popularity</button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example product cards */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {/* Add more ProductCard components as needed */}
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default ShopPage;
