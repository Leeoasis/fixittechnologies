// CategorySidebar.js
import React from 'react';

const CategorySidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        <li><a href="#" className="block py-2">Category 1</a></li>
        <li><a href="#" className="block py-2">Category 2</a></li>
        <li><a href="#" className="block py-2">Category 3</a></li>
        {/* Add more categories as needed */}
      </ul>
    </div>
  );
};

export default CategorySidebar;
