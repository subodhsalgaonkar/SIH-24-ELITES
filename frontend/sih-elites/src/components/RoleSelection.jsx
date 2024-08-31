import React, { useState } from 'react';
import FarmerSignup from './FarmerSignup';
import BusinessSignup from './BusinessSignup';
import backgroundImage from '../Images/backgroundImage.jpg'; // Adjust the path as needed

const RoleSelection = () => {
  const [role, setRole] = useState('');

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {!role && (
        <div className="p-8 bg-white shadow-lg rounded-lg bg-opacity-80">
          <h2 className="text-2xl font-bold mb-6">Select Your Role</h2>
          <button
            onClick={() => handleRoleSelect('farmer')}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-600"
          >
            I am a Farmer
          </button>
          <button
            onClick={() => handleRoleSelect('business')}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            I am a Business Owner
          </button>
        </div>
      )}
      {role === 'farmer' && <FarmerSignup />}
      {role === 'business' && <BusinessSignup />}
    </div>
  );
};

export default RoleSelection;
