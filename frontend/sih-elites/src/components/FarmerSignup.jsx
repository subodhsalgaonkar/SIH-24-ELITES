import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FarmerSignup = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const [farmerDetails, setFarmerDetails] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    farmDescription: '',
    birthday: '',
    farmAddress: '',
    cropsGrown: '',
    farmImage: null,
  });

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFarmerDetails((prevDetails) => ({
      ...prevDetails,
      farmImage: e.target.files[0],
    }));
  };

  const handleSubmit = () => {
    // Handle the form submission here (e.g., send data to the backend)
    console.log('Farmer Details Submitted:', farmerDetails);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-lg">
        {page === 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Farmer Details</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={farmerDetails.name}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={farmerDetails.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={farmerDetails.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <textarea
              name="farmDescription"
              placeholder="Farm Description"
              value={farmerDetails.farmDescription}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
          </div>
        )}
        {page === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Farm Details</h2>
            <input
              type="date"
              name="birthday"
              value={farmerDetails.birthday}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="text"
              name="farmAddress"
              placeholder="Farm Address"
              value={farmerDetails.farmAddress}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="text"
              name="cropsGrown"
              placeholder="Crops Grown"
              value={farmerDetails.cropsGrown}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
          </div>
        )}
        {page === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Upload Farm Image</h2>
            <input
              type="file"
              name="farmImage"
              onChange={handleImageChange}
              className="w-full p-2 mb-4 border rounded"
            />
          </div>
        )}
        <div className="flex justify-between mt-4">
          {page > 0 && (
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Previous
            </button>
          )}
          {page < 2 && (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          )}
          {page === 2 && (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmerSignup;
