import React, { useState } from "react";
import bg from "../Images/BuyerProfile.jpg";
import tomato from "../Images/Tomato.jpg";
import cucumber from "../Images/Cucumber.jpg";
import leafygreens from "../Images/leafygreens.jpg";

const BuyerProfileBuyerPov = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    name: "John Doe",
    businessType: "Wholesaler",
    company: "Green Grow Ltd.",
    location: "Springfield, IL",
    contactNumber: "+123 456 7890",
    email: "john.doe@greengrow.com",
    website: "www.greengrow.com",
    businessRegNumber: "BRN123456",
    verifiedStatus: "Verified",
    description:
      "Green Grow Ltd. is a leading wholesaler specializing in organic vegetables. We are committed to providing high-quality produce to our clients and maintaining sustainable practices.",
    preferredProducts: ["Tomatoes", "Cucumbers", "Leafy Greens"],
    paymentTerms:
      "Payment terms are net 30 days from the date of invoice. We accept payments via bank transfer and major credit cards.",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const updateProfile = () => {
    // Handle update logic here
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-lime-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative bg-green-500 p-8">
          <div className="absolute left-14 top-1/2 transform -translate-y-1/2">
            <img
              src={bg}
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-white"
            />
          </div>

          <div className="text-center mt-24">
            <h1 className="text-3xl font-extrabold text-white">
              {profileInfo.name}
            </h1>
            <button
              onClick={toggleEdit}
              className="bg-white text-green-500 font-bold py-2 px-4 rounded mt-4"
            >
              Edit
            </button>
            <p className="text-lg text-blue-200">Business Type: {profileInfo.businessType}</p>
            <p className="text-lg text-blue-200">Company: {profileInfo.company}</p>
            <p className="text-lg text-blue-200">Location: {profileInfo.location}</p>
            <p className="text-lg text-blue-200">Contact Number: {profileInfo.contactNumber}</p>
            <p className="text-lg text-blue-200">Email: {profileInfo.email}</p>
            <p className="text-lg text-blue-200">
              Website:{" "}
              <a
                href={profileInfo.website}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profileInfo.website}
              </a>
            </p>
            <p className="text-lg text-blue-200">Business Registration Number: {profileInfo.businessRegNumber}</p>
            <p className="text-lg text-blue-200">Verified Status: {profileInfo.verifiedStatus}</p>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
          <p className="text-gray-600 leading-relaxed">{profileInfo.description}</p>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Preferred Products</h2>
          <div className="grid grid-cols-3 gap-8 text-center">
            {profileInfo.preferredProducts.map((product, index) => (
              <div key={index}>
                <p className="text-gray-600 mb-2">{product}</p>
                <img
                  src={
                    product === "Tomatoes"
                      ? tomato
                      : product === "Cucumbers"
                      ? cucumber
                      : leafygreens
                  }
                  alt={product}
                  className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Edit Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-1/2">
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={profileInfo.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="businessType"
                  value={profileInfo.businessType}
                  onChange={handleInputChange}
                  placeholder="Business Type"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="company"
                  value={profileInfo.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="location"
                  value={profileInfo.location}
                  onChange={handleInputChange}
                  placeholder="Location"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="contactNumber"
                  value={profileInfo.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Contact Number"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  name="email"
                  value={profileInfo.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="website"
                  value={profileInfo.website}
                  onChange={handleInputChange}
                  placeholder="Website"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="businessRegNumber"
                  value={profileInfo.businessRegNumber}
                  onChange={handleInputChange}
                  placeholder="Business Registration Number"
                  className="w-full p-2 border rounded"
                />
                <select
                  name="verifiedStatus"
                  value={profileInfo.verifiedStatus}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="Verified">Verified</option>
                  <option value="Pending">Pending</option>
                </select>
                <textarea
                  name="description"
                  value={profileInfo.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="text-right mt-4">
                <button
                  onClick={toggleEdit}
                  className="bg-red-500 text-white py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={updateProfile}
                  className="bg-green-500 text-white py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyerProfileBuyerPov;
