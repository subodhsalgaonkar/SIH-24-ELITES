import React, { useState } from "react";
import backgroundImage from "../Images/backgroundImage.jpg"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
const RoleSelection = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!role && (
        <div className="p-8 bg-white shadow-lg rounded-lg bg-opacity-80">
          <h2 className="text-2xl font-bold mb-6">Authentication</h2>
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-600"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default RoleSelection;
