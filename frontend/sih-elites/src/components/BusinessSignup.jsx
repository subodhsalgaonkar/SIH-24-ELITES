import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BusinessSignup = () => {
  const [page, setPage] = useState(0);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [businessDetails, setBusinessDetails] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phoneNumber: "",
    businessAddress: "",
    businessType: "",
    description: "",
  });

  const validatePage = () => {
    const newErrors = {};
    if (page === 0) {
      if (!businessDetails.businessName) newErrors.businessName = "Business Name is required";
      if (!businessDetails.ownerName) newErrors.ownerName = "Owner Name is required";
      if (!businessDetails.email) newErrors.email = "Email is required";
      if (!businessDetails.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    } else if (page === 1) {
      if (!businessDetails.businessAddress) newErrors.businessAddress = "Business Address is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validatePage()) {
      setPage((prevPage) => prevPage + 1);
    }
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
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error for the field being edited
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePage()) {
      navigate("/buyerprofilebuyerpov");
    }
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
              className="w-full p-2 mb-2 border rounded"
            />
            {errors.businessName && <p className="text-red-500 text-sm mb-2">{errors.businessName}</p>}
            <input
              type="text"
              name="ownerName"
              placeholder="Owner Name"
              value={businessDetails.ownerName}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            {errors.ownerName && <p className="text-red-500 text-sm mb-2">{errors.ownerName}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={businessDetails.email}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={businessDetails.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mb-2">{errors.phoneNumber}</p>}
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
              className="w-full p-2 mb-2 border rounded"
            />
            {errors.businessAddress && <p className="text-red-500 text-sm mb-2">{errors.businessAddress}</p>}
            <input
              type="text"
              name="businessType"
              placeholder="Business Type"
              value={businessDetails.businessType}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
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
            <p>
              <strong>Business Name:</strong> {businessDetails.businessName}
            </p>
            <p>
              <strong>Owner Name:</strong> {businessDetails.ownerName}
            </p>
            <p>
              <strong>Email:</strong> {businessDetails.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {businessDetails.phoneNumber}
            </p>
            <p>
              <strong>Business Address:</strong> {businessDetails.businessAddress}
            </p>
            <p>
              <strong>Business Type:</strong> {businessDetails.businessType}
            </p>
            <p>
              <strong>Description:</strong> {businessDetails.description}
            </p>
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
