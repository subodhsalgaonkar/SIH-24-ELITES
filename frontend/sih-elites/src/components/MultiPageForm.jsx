import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MultiPageForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    userType: '',
    name: '',
    email: '',
    mobile: '',
    birthday: '',
    address: '',
    crops: '',
    farmDetails: '',
    farmImage: null,
  });
  const navigate = useNavigate();

  const handleNext = () => {
    if (page === 0 && formData.userType === 'Farmer') {
      setPage(1);
    } else if (page === 0 && formData.userType === 'BusinessOwner') {
      // Navigate to Business signup page (not implemented yet)
      navigate('/business-signup');
    } else if (page < 3) {
      setPage(page + 1);
    } else if (page === 3) {
      // Handle form submission
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      farmImage: e.target.files[0]
    });
  };

  const handleSubmit = () => {
    // Replace with your API submission logic
    console.log('Form data submitted:', formData);
    navigate('/'); // Redirect after submission (change to desired route)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <div className="space-y-4">
          {page === 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Select Your Role</h2>
              <div className="flex flex-col space-y-4">
                <button
                  className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                  onClick={() => setFormData({ ...formData, userType: 'Farmer' })}
                >
                  Farmer
                </button>
                <button
                  className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                  onClick={() => setFormData({ ...formData, userType: 'BusinessOwner' })}
                >
                  Business Owner
                </button>
              </div>
            </div>
          )}

          {page === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Farmer Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="birthday"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.birthday}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {page === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Farm Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Farm Address"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.address}
                  onChange={handleChange}
                />
                <textarea
                  name="crops"
                  placeholder="Crops Grown"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.crops}
                  onChange={handleChange}
                />
                <textarea
                  name="farmDetails"
                  placeholder="Farm Details"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.farmDetails}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {page === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Upload Farm Image</h2>
              <input
                type="file"
                name="farmImage"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleFileChange}
              />
            </div>
          )}

          <div className="flex justify-between mt-4">
            {page > 0 && (
              <button
                className="p-2 bg-gray-500 text-white rounded-lg"
                onClick={handlePrev}
              >
                Previous
              </button>
            )}
            <button
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={handleNext}
            >
              {page === 3 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiPageForm;
