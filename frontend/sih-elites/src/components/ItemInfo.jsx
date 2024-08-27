import React from 'react';
import { Link } from 'react-router-dom';

function ItemInfo() {
  return (
    <div className="p-4 bg-green-100 shadow-md w-screen h-screen">
      {/* Item Section */}
      <div className="flex items-center mb-4">
        {/* Item Picture */}
        <div className="w-16 h-16 bg-green-300 rounded-full flex-shrink-0">
          {/* Image placeholder */}
          <img src="path_to_item_image" alt="Item" className="rounded-full w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">Item Name</h2>
          <p className="text-sm text-gray-600">
            Item Description lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <button className="ml-auto bg-orange-500 text-white px-4 py-2 rounded-md">
          Contact Farmer
        </button>
      </div>

      <hr className="my-4" />

      {/* Producer Section */}
      <div className="mb-4">
        <h3 className="text-lg font-bold">
          Producer: <Link to="/" className="text-blue-600">Producer Name</Link>
        </h3>
        <p className="text-sm text-gray-600">
          Location: Location Name
        </p>
        <p className="text-sm text-gray-600">
          Max Qty: n units
        </p>
        <p className="text-sm text-gray-600">
          Farmer Rating: n stars
        </p>
      </div>

      <hr className="my-4" />

      {/* Explore Other Products Section */}
      <div>
        <h4 className="text-lg font-bold mb-2">Explore Other Products:</h4>
        <div className="flex items-center space-x-4">
          {/* Single Item Pic */}
          <div className="w-12 h-12 bg-green-300 rounded-full flex-shrink-0">
            {/* Image placeholder */}
            <img src="path_to_item_image" alt="Item" className="rounded-full w-full h-full object-cover" />
          </div>
          {/* Additional item pics will be rendered using map */}
          <button className="ml-auto bg-orange-500 text-white px-4 py-2 rounded-md">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemInfo;
