// SearchBar.js
import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Search Query: ", query);
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded-l-lg"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-orange-500 text-white rounded-r-lg">Search</button>
    </div>
  );
};

export default SearchBar;
