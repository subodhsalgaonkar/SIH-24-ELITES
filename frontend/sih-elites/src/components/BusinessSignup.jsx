import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessSignup = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const [businessDetails, setBusinessDetails] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phoneNumber: '',
    businessAddress: '',
    businessType: '',
    description: '',
  });

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusinessDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle the form submission here (e.g., send data to the backend)
    console.log('Business Details Submitted:', businessDetails);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-lg">
        {page === 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Business Details</h2>
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={businessDetails.businessName}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="text"
              name="ownerName"
              placeholder="Owner Name"
              value={businessDetails.ownerName}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={businessDetails.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={businessDetails.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
          </div>
        )}
        {page === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Business Address</h2>
            <input
              type="text"
              name="businessAddress"
              placeholder="Business Address"
              value={businessDetails.businessAddress}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="text"
              name="businessType"
              placeholder="Business Type"
              value={businessDetails.businessType}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <textarea
              name="description"
              placeholder="Business Description"
              value={businessDetails.description}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />
          </div>
        )}
        {page === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Review & Submit</h2>
            <p><strong>Business Name:</strong> {businessDetails.businessName}</p>
            <p><strong>Owner Name:</strong> {businessDetails.ownerName}</p>
            <p><strong>Email:</strong> {businessDetails.email}</p>
            <p><strong>Phone Number:</strong> {businessDetails.phoneNumber}</p>
            <p><strong>Business Address:</strong> {businessDetails.businessAddress}</p>
            <p><strong>Business Type:</strong> {businessDetails.businessType}</p>
            <p><strong>Description:</strong> {businessDetails.description}</p>
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

export default BusinessSignup;
