// Pagination.js
import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center mt-8">
      <button className="px-4 py-2 bg-gray-200 rounded-l-lg">Previous</button>
      <button className="px-4 py-2 bg-gray-200">1</button>
      <button className="px-4 py-2 bg-gray-200">2</button>
      <button className="px-4 py-2 bg-gray-200 rounded-r-lg">Next</button>
    </div>
  );
};

export default Pagination;
