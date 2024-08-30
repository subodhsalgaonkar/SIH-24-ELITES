import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative p-8 bg-gray-100 min-h-screen">
      <button
        onClick={() => navigate("/buyerprofile")}
        className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Buyer Profile
      </button>

      <div className="text-center mt-12">
        Hi, this is the Landing Page! Welcome to our website Farmer's Market!
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/create-contract")}
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-200"
        >
          Create Contract
        </button>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/marketplace")}
          className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-700 transition duration-200"
        >
          Go to Marketplace
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
