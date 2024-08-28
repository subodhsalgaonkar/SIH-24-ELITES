// import React from 'react';
// import wheatImg from '../Images/wheatImg.jpeg';
// // import cornImg from './corn.jpg';
// // import tomatoesImg from './tomatoes.jpg';

// const FarmersProfilePage = () => {
//     React.useEffect(() => {
//         const handleScroll = (e) => {
//             e.preventDefault();
//             const target = document.querySelector(e.currentTarget.getAttribute('href'));
//             if (target) {
//                 target.scrollIntoView({ behavior: 'smooth' });
//             }
//         };

//         const anchors = document.querySelectorAll('.navbar a');
//         anchors.forEach(anchor => anchor.addEventListener('click', handleScroll));

//         return () => anchors.forEach(anchor => anchor.removeEventListener('click', handleScroll));
//     }, []);

//     return (
//         <div className="flex">
//             {/* Navbar */}
//             <div className="w-[200px] bg-gray-800 h-screen fixed">
//                 <ul className="list-none p-0 m-0">
//                     <li className="m-0">
//                         <a href="#personal-info" className="block text-white p-4 no-underline hover:bg-gray-600">Personal Info</a>
//                     </li>
//                     <li className="m-0">
//                         <a href="#crop-info" className="block text-white p-4 no-underline hover:bg-gray-600">Crop Info</a>
//                     </li>
//                     <li className="m-0">
//                         <a href="#rating-reviews" className="block text-white p-4 no-underline hover:bg-gray-600">Rating/Reviews</a>
//                     </li>
//                     <li className="m-0">
//                         <a href="#documents" className="block text-white p-4 no-underline hover:bg-gray-600">Documents</a>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="ml-[200px] p-5 w-[calc(100%-200px)]">
//                 {/* Personal Info Section */}
//                 <section id="personal-info" className="mb-5">
//                     <h2 className="text-2xl font-bold">Personal Info</h2>
//                     <p><strong>Name:</strong> John Doe</p>
//                     <p><strong>Contact:</strong> +1234567890</p>
//                     <p><strong>Email:</strong> john.doe@example.com</p>
//                     <p><strong>Experience:</strong> 10 years</p>
//                 </section>

//                 {/* Crop Info Section */}
//                 <section id="crop-info" className="mb-5">
//                     <h2 className="text-2xl font-bold">Crop Info</h2>
//                     <p><strong>Farm:</strong> Green Valley Farm</p>
//                     <p><strong>Crops Grown:</strong> Wheat, Corn, Tomatoes</p>
//                     <p><strong>Farming Methods:</strong> Organic, Hydroponic</p>
//                     <div className="flex gap-2 mt-2">
//                         <h3 className="text-lg font-semibold">Photos of Crops</h3>
//                         <img src={wheatImg} alt="Wheat" className="w-[100px] h-auto" />
//                         {/* <img src={cornImg} alt="Corn" className="w-[100px] h-auto" /> */}
//                         {/* <img src={tomatoesImg} alt="Tomatoes" className="w-[100px] h-auto" /> */}
//                     </div>
//                 </section>

//                 {/* Rating/Reviews Section */}
//                 <section id="rating-reviews" className="mb-5">
//                     <h2 className="text-2xl font-bold">Rating/Reviews</h2>
//                     <p><strong>Rating:</strong> 4.5/5</p>
//                     <p><strong>Reviews:</strong></p>
//                     <ul className="list-disc pl-5">
//                         <li>Excellent produce quality! - Alice</li>
//                         <li>Very professional and timely delivery. - Bob</li>
//                     </ul>
//                 </section>

//                 {/* Documents Section */}
//                 <section id="documents" className="mb-5">
//                     <h2 className="text-2xl font-bold">Documents</h2>
//                     <p>Verifiable document for organic farming certification:</p>
//                     {/* <a href={certification} download className="text-blue-500 hover:underline">Download Certification Document</a> */}
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default FarmersProfilePage;

import React from "react";
import wheatImg from "../Images/wheatImg.jpeg";
// import cornImg from "../Images/corn.jpg";
// import tomatoesImg from "../Images/tomatoes.jpg";

const FarmersProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-green-500 p-8">
          <div className="absolute left-14 top-1/2 transform -translate-y-1/2">
            <img
              src={wheatImg}
              alt="Farmer"
              className="w-48 h-48 rounded-full border-4 border-white"
            />
          </div>

          <div className="text-center mt-24">
            <h1 className="text-3xl font-extrabold text-white">John Doe</h1>
            <p className="text-lg text-green-200">Contact: +1234567890</p>
            <p className="text-lg text-green-200">Email: john.doe@example.com</p>
            <p className="text-lg text-green-200">Experience: 10 years</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Personal Info
          </h2>
          <p className="text-gray-600">
            John Doe is an experienced farmer with over 10 years of experience
            in organic farming.
          </p>
        </div>

        {/* Crop Info Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Crop Info</h2>
          <p className="text-gray-600">
            <strong>Farm:</strong> Green Valley Farm
          </p>
          <p className="text-gray-600">
            <strong>Crops Grown:</strong> Wheat, Corn, Tomatoes
          </p>
          <p className="text-gray-600">
            <strong>Farming Methods:</strong> Organic, Hydroponic
          </p>
          <div className="flex gap-4 mt-4">
            <img
              src={wheatImg}
              alt="Wheat"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            {/* Uncomment and replace with the correct image paths when available */}
            {/* <img src={cornImg} alt="Corn" className="w-24 h-24 rounded-full border-2 border-gray-300" /> */}
            {/* <img src={tomatoesImg} alt="Tomatoes" className="w-24 h-24 rounded-full border-2 border-gray-300" /> */}
          </div>
        </div>

        {/* Rating/Reviews Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Rating/Reviews
          </h2>
          <p className="text-gray-600">
            <strong>Rating:</strong> 4.5/5
          </p>
          <p className="text-gray-600">
            <strong>Reviews:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Excellent produce quality! - Alice</li>
            <li>Very professional and timely delivery. - Bob</li>
          </ul>
        </div>

        {/* Documents Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Documents</h2>
          <p className="text-gray-600">
            Verifiable document for organic farming certification available
            upon request.
          </p>
          {/* Uncomment and replace with the correct link when available */}
          {/* <a href={certification} download className="text-blue-500 hover:underline">Download Certification Document</a> */}
        </div>
      </div>
    </div>
  );
};

export default FarmersProfilePage;
