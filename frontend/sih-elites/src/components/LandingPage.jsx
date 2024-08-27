import React from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      Hi this is the Landing Page! Welcome to our website Farmer's Market!
      <button
        onClick={() => {
          navigate("/buyerprofile");
        }}
      >
        Buyer Profile
      </button>
    </div>
  );
};

export default LandingPage;
