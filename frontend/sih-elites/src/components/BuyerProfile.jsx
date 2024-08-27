import React from "react";
import { useNavigate } from "react-router-dom";

const BuyerProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen p-4">
      {" "}
      {/* Added h-screen to ensure full height */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-0 right-0 m-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Home
      </button>
      <div className="mt-12">
        Hi, This is Buyer's Profile! My Contact: Email: Address: ...
      </div>
    </div>
  );
};

export default BuyerProfile;
