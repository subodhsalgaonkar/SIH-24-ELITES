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
    </div>
  );
};

export default LandingPage;
