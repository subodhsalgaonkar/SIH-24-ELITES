import React from "react";
import { useParams } from "react-router-dom";
import wheatImg from "../Images/wheatImg.jpeg";

const FarmerProfilePage = () => {
  const { farmerName } = useParams();

  // Sample farmer data - replace with actual data fetching
  const farmer = {
    name: decodeURIComponent(farmerName),
    contact: "+1234567890",
    email: "john.doe@example.com",
    experience: "10 years",
    farmName: "Green Valley Farm",
    cropsGrown: "Wheat, Corn, Tomatoes",
    farmingMethods: "Organic, Hydroponic",
    rating: "4.5/5",
    reviews: [
      "Excellent produce quality! - Alice",
      "Very professional and timely delivery. - Bob",
    ],
  };

  return (
    <div className="min-h-screen bg-lime-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen w-full bg-white shadow-lg rounded-lg overflow-hidden">
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
            <h1 className="text-3xl font-extrabold text-white">
              {farmer.name}
            </h1>
            <p className="text-lg text-green-200">Contact: {farmer.contact}</p>
            {/* <p className="text-lg text-green-200">Email: {farmer.email}</p> */}
            <p className="text-lg text-green-200">
              Experience: {farmer.experience}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Personal Info
          </h2>
          <p className="text-gray-600">
            {farmer.name} is an experienced farmer with over {farmer.experience}{" "}
            in organic farming.
          </p>
        </div>

        {/* Crop Info Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Crop Info</h2>
          <p className="text-gray-600">
            <strong>Farm:</strong> {farmer.farmName}
          </p>
          <p className="text-gray-600">
            <strong>Crops Grown:</strong> {farmer.cropsGrown}
          </p>
          <p className="text-gray-600">
            <strong>Farming Methods:</strong> {farmer.farmingMethods}
          </p>
          <div className="flex gap-4 mt-4">
            <img
              src={wheatImg}
              alt="Wheat"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Rating/Reviews Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Rating/Reviews
          </h2>
          <p className="text-gray-600">
            <strong>Rating:</strong> {farmer.rating}
          </p>
          <p className="text-gray-600">
            <strong>Reviews:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            {farmer.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>

        {/* Documents Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Documents</h2>
          <p className="text-gray-600">
            Verifiable document for organic farming certification available upon
            request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfilePage;
