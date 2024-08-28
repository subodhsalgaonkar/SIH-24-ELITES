import React from 'react';
import { Link } from 'react-router-dom';

const ItemInfo = () => {
  return (
    <div className="bg-lime-100 min-h-screen py-6">
      <div className="max-w-screen mx-auto p-4 space-y-6">
        
        {/* Item Section */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
          {/* Item Picture */}
          <div className="w-20 h-20 bg-[#8fbf5f] rounded-full flex-shrink-0 flex items-center justify-center">
            {/* Placeholder text for the image */}
            <span className="text-white">item pic</span>
          </div>
          <div className="ml-6 flex-1">
            <h2 className="text-2xl font-bold mb-1">Item name</h2>
            <p className="text-sm text-gray-700">
              Item Description nans asnnsas annsnas ifhwhehb hsgdnm egryeb gsba SD SDBS ANBASB BXSBX LOREM IPSUM
            </p>
          </div>
          <button className="ml-auto bg-orange-500 text-white font-semibold px-4 py-2 rounded-md">
            Contact Farmer
          </button>
        </div>

        <hr className="border-t-2 border-black" />

        {/* Producer Section */}
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-bold mb-2">
            Producer: <Link to="/" className="text-black underline">Producer name</Link>{/*use usenavigate instead of Link here make changes afterwards*/}
          </h3>
          <p className="text-sm text-gray-700">
            Location: Location
          </p>
          <p className="text-sm text-gray-700">
            Max Qty: n units
          </p>
          <p className="text-sm text-gray-700">
            Farmer rating: n stars
          </p>
        </div>

        <hr className="border-t-2 border-black" />

        {/* Explore Other Products Section */}
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h4 className="text-lg font-bold mb-4">Explore Other Products:</h4>
          <div className="flex items-center">
            {/* Single Item Pic */}
            <div className="w-12 h-12 bg-[#8fbf5f] rounded-full flex-shrink-0 flex items-center justify-center">
              {/* Placeholder text for the image */}
              <span className="text-white">item pic</span>
            </div>
            {/* Additional item pics will be rendered using map */}
            <button className="ml-auto bg-orange-500 text-white font-semibold px-4 py-2 rounded-md">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemInfo;

