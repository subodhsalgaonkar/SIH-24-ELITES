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
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profileInfo.name}
                onChange={handleInputChange}
                className="text-3xl font-extrabold text-white bg-transparent border-none outline-none"
              />
            ) : (
              <h1 className="text-3xl font-extrabold text-white">
                {profileInfo.name}
              </h1>
            )}
            <button onClick={toggleEdit} className="ml-2 text-white">
              ✏️
            </button>
            <p className="text-lg text-blue-200">
              Business Type:{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="businessType"
                  value={profileInfo.businessType}
                  onChange={handleInputChange}
                  className="bg-transparent border-none outline-none"
                />
              ) : (
                profileInfo.businessType
              )}
            </p>
            <p className="text-lg text-blue-200">
              Company:{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="company"
                  value={profileInfo.company}
                  onChange={handleInputChange}
                  className="bg-transparent border-none outline-none"
                />
              ) : (
                profileInfo.company
              )}
            </p>
            <p className="text-lg text-blue-200">
              Location:{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={profileInfo.location}
                  onChange={handleInputChange}
                  className="bg-transparent border-none outline-none"
                />
              ) : (
                profileInfo.location
              )}
            </p>
            <p className="text-lg text-blue-200">
              Contact Number:{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="contactNumber"
                  value={profileInfo.contactNumber}
                  onChange={handleInputChange}
                  className="bg-transparent border-none outline-none"
                />
              ) : (
                profileInfo.contactNumber
              )}
            </p>
            <p className="text-lg text-blue-200">
              Email:{" "}
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profileInfo.email}
                  onChange={handleInputChange}
                  className="bg-transparent border-none outline-none"
                />
              ) : (
                profileInfo.email
              )}
            </p>
            <p className="text-lg text-blue-200">
              Website:{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="website"
                  value={profileInfo.website}
                  onChange={handleInputChange}
                  className="bg-transparent border-none outline-none"
                />
              ) : (
                <a
                  href={profileInfo.website}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profileInfo.website}
                </a>
              )}
            </p>
            <p className="text-lg text-blue-200">
              Business Registration Number:{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="businessRegNumber"
                  value={profileInfo.businessRegNumber}
                  onChange={handleInputChange}
                  className="bg-transparent border-none outline-none"
                />
              ) : (
                profileInfo.businessRegNumber
              )}
            </p>
            <p className="text-lg text-blue-200">
              Verified Status:{" "}
              {isEditing ? (
                <select
                  name="verifiedStatus"
                  value={profileInfo.verifiedStatus}
                  onChange={handleInputChange}
                  className="bg-transparent border-none outline-none"
                >
                  <option value="Verified">Verified</option>
                  <option value="Pending">Pending</option>
                </select>
              ) : (
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full">
                  {profileInfo.verifiedStatus}
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
          {isEditing ? (
            <textarea
              name="description"
              value={profileInfo.description}
              onChange={handleInputChange}
              className="w-full text-gray-600 leading-relaxed bg-transparent border-none outline-none"
            />
          ) : (
            <p className="text-gray-600 leading-relaxed">
              {profileInfo.description}
            </p>
          )}
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Preferred Products
          </h2>
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

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Payment Terms
          </h2>
          {isEditing ? (
            <textarea
              name="paymentTerms"
              value={profileInfo.paymentTerms}
              onChange={handleInputChange}
              className="w-full text-gray-600 leading-relaxed bg-transparent border-none outline-none"
            />
          ) : (
            <p className="text-gray-600 leading-relaxed">
              {profileInfo.paymentTerms}
            </p>
          )}
        </div>

        {/* Contract Details Section - No Edit Option */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contract History
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Summary of previous contracts or transactions is available upon
            request.
          </p>
        </div>

        {/* Ratings and Reviews Section - No Edit Option */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ratings and Reviews
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Feedback from suppliers and clients is consistently positive,
            highlighting the company's reliability and quality standards.
          </p>
        </div>

        {isEditing && (
          <div className="p-6 bg-green-100 border-t border-green-200 text-right">
            <button
              onClick={updateProfile}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyerProfileBuyerPov;
