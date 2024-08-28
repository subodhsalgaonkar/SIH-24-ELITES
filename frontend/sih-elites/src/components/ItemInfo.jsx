// import React from 'react';
// import { Link } from 'react-router-dom';

// function ItemInfo() {
//   return (
//     <div className="p-4 bg-green-100 shadow-md w-screen h-screen">
//       {/* Item Section */}
//       <div className="flex items-center mb-4">
//         {/* Item Picture */}
//         <div className="w-16 h-16 bg-green-300 rounded-full flex-shrink-0">
//           {/* Image placeholder */}
//           <img src="path_to_item_image" alt="Item" className="rounded-full w-full h-full object-cover" />
//         </div>
//         <div className="ml-4">
//           <h2 className="text-xl font-bold">Item Name</h2>
//           <p className="text-sm text-gray-600">
//             Item Description lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//         </div>
//         <button className="ml-auto bg-orange-500 text-white px-4 py-2 rounded-md">
//           Contact Farmer
//         </button>
//       </div>

//       <hr className="my-4" />

//       {/* Producer Section */}
//       <div className="mb-4">
//         <h3 className="text-lg font-bold">
//           Producer: <Link to="/" className="text-blue-600">Producer Name</Link>
//         </h3>
//         <p className="text-sm text-gray-600">
//           Location: Location Name
//         </p>
//         <p className="text-sm text-gray-600">
//           Max Qty: n units
//         </p>
//         <p className="text-sm text-gray-600">
//           Farmer Rating: n stars
//         </p>
//       </div>

//       <hr className="my-4" />

//       {/* Explore Other Products Section */}
//       <div>
//         <h4 className="text-lg font-bold mb-2">Explore Other Products:</h4>
//         <div className="flex items-center space-x-4">
//           {/* Single Item Pic */}
//           <div className="w-12 h-12 bg-green-300 rounded-full flex-shrink-0">
//             {/* Image placeholder */}
//             <img src="path_to_item_image" alt="Item" className="rounded-full w-full h-full object-cover" />
//           </div>
//           {/* Additional item pics will be rendered using map */}
//           <button className="ml-auto bg-orange-500 text-white px-4 py-2 rounded-md">
//             View All Products
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ItemInfo;

import React from 'react';
import { Link } from 'react-router-dom';

const ItemInfo = () => {
  return (
    <div className="bg-[#e6f0d6] min-h-screen py-6">
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
          <button className="ml-auto bg-[#f28d29] text-white font-semibold px-4 py-2 rounded-md">
            Contact Farmer
          </button>
        </div>

        <hr className="border-t-2 border-black" />

        {/* Producer Section */}
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-bold mb-2">
            Producer: <Link to="/" className="text-black underline">Producer name</Link>
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
            <button className="ml-auto bg-[#f28d29] text-white font-semibold px-4 py-2 rounded-md">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemInfo;

