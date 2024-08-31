import React from "react";
import wheatImg from "../Images/wheatImg.jpeg";
import tomatoImg from "../Images/Tomato.jpg";
import cornImg from "./Supplies_Images/corn.webp";

const FarmerProfilePage = () => {
  const farmer = {
    name: "Rajesh Kumar",
    contact: "+1234567890",
    email: "rajesh@email.com",
    experience: "10 years",
    location: "Pune",
    farmName: "Green Valley Farm",
    cropsGrown: "Wheat, Corn, Tomatoes",
    farmingMethods: "Organic, Hydroponic",
    rating: "4.5/5",
    reviews: [
      "Excellent produce quality! - Aditya",
      "Very professional and timely delivery. - Jash",
    ],
    documents: [
      { title: "Certification Document 1", status: "Verified" },
      { title: "Certification Document 2", status: "Pending" },
      { title: "Certification Document 3", status: "Verified" },
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
            <p className="text-lg text-green-200">Email: {farmer.email}</p>
            <p className="text-lg text-green-200">
              Experience: {farmer.experience}
            </p>
            <p className="text-lg text-green-200">
              Location: {farmer.location}
            </p>
            <p className="text-lg text-blue-200">
              Verified Status:{" "}
              <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full">
                Verified
              </span>
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
            <img
              src={cornImg}
              alt="Corn"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <img
              src={tomatoImg}
              alt="Tomatoes"
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
          <div className="flex flex-wrap gap-4">
            {farmer.documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow-md w-full max-w-xs"
              >
                <p className="text-gray-800 font-bold">{doc.title}</p>
                <p
                  className={`${
                    doc.status === "Verified"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  Status: {doc.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfilePage;
