import React, { useState } from "react";
import wheatImg from "../Images/wheatImg.jpeg";
import bg from "../Images/BuyerProfile.jpg";

const FarmersPPFarmerPOV = () => {
  const [isEditing, setIsEditing] = useState({
    personalInfo: false,
    cropInfo: false,
  });

  const [formData, setFormData] = useState({
    name: "John Doe",
    contact: "+1234567890",
    email: "john.doe@example.com",
    experience: "10 years",
    personalInfo:
      "John Doe is an experienced farmer with over 10 years of experience in organic farming.",
    farm: "Green Valley Farm",
    crops: "Wheat, Corn, Tomatoes",
    methods: "Organic, Hydroponic",
  });

  const handleEditClick = (section) => {
    setIsEditing((prevState) => ({ ...prevState, [section]: true }));
  };

  const handleUpdateClick = (section) => {
    setIsEditing((prevState) => ({ ...prevState, [section]: false }));
    // Implement your update logic here
  };

  const handleChange = (e, field) => {
    setFormData((prevData) => ({ ...prevData, [field]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-lime-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-green-500 p-8">
          <div className="absolute left-14 top-1/2 transform -translate-y-1/2">
            <img
              src={wheatImg}
              alt="Farmer"
              className="w-48 h-48 rounded-full border-4 border-white"
            />
          </div>

          <div className="text-center mt-24">
            <h1 className="text-3xl font-extrabold text-white">
              {isEditing.personalInfo ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange(e, "name")}
                  className="bg-gray-200 p-2 rounded"
                />
              ) : (
                <>
                  {formData.name}{" "}
                  <button
                    onClick={() => handleEditClick("personalInfo")}
                    className="text-white ml-2"
                  >
                    <i
                      className={`fa ${
                        isEditing.personalInfo ? "fa-check" : "fa-pencil-alt"
                      }`}
                    ></i>
                  </button>
                </>
              )}
            </h1>
            {isEditing.personalInfo ? (
              <>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => handleChange(e, "contact")}
                  className="bg-gray-200 p-2 rounded mt-2"
                />
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => handleChange(e, "email")}
                  className="bg-gray-200 p-2 rounded mt-2"
                />
                <input
                  type="text"
                  value={formData.experience}
                  onChange={(e) => handleChange(e, "experience")}
                  className="bg-gray-200 p-2 rounded mt-2"
                />
                <button
                  onClick={() => handleUpdateClick("personalInfo")}
                  className="mt-2 bg-green-500 text-white p-2 rounded"
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <p className="text-lg text-green-200">
                  Contact: {formData.contact}
                </p>
                <p className="text-lg text-green-200">
                  Email: {formData.email}
                </p>
                <p className="text-lg text-green-200">
                  Experience: {formData.experience}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Personal Info{" "}
            <button
              onClick={() => handleEditClick("personalInfo")}
              className="text-gray-600 ml-2"
            >
              <i
                className={`fa ${
                  isEditing.personalInfo ? "fa-check" : "fa-pencil-alt"
                }`}
              ></i>
            </button>
          </h2>
          {isEditing.personalInfo ? (
            <textarea
              value={formData.personalInfo}
              onChange={(e) => handleChange(e, "personalInfo")}
              className="w-full bg-gray-200 p-2 rounded"
            />
          ) : (
            <p className="text-gray-600">{formData.personalInfo}</p>
          )}
        </div>

        {/* Crop Info Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Crop Info{" "}
            <button
              onClick={() => handleEditClick("cropInfo")}
              className="text-gray-600 ml-2"
            >
              <i
                className={`fa ${
                  isEditing.cropInfo ? "fa-check" : "fa-pencil-alt"
                }`}
              ></i>
            </button>
          </h2>
          {isEditing.cropInfo ? (
            <div>
              <input
                type="text"
                value={formData.farm}
                onChange={(e) => handleChange(e, "farm")}
                className="bg-gray-200 p-2 rounded mb-2"
              />
              <input
                type="text"
                value={formData.crops}
                onChange={(e) => handleChange(e, "crops")}
                className="bg-gray-200 p-2 rounded mb-2"
              />
              <input
                type="text"
                value={formData.methods}
                onChange={(e) => handleChange(e, "methods")}
                className="bg-gray-200 p-2 rounded mb-2"
              />
              <button
                onClick={() => handleUpdateClick("cropInfo")}
                className="mt-2 bg-green-500 text-white p-2 rounded"
              >
                Update
              </button>
            </div>
          ) : (
            <div>
              <p className="text-gray-600">
                <strong>Farm:</strong> {formData.farm}
              </p>
              <p className="text-gray-600">
                <strong>Crops Grown:</strong> {formData.crops}
              </p>
              <p className="text-gray-600">
                <strong>Farming Methods:</strong> {formData.methods}
              </p>
            </div>
          )}
          <div className="flex gap-4 mt-4">
            <img
              src={wheatImg}
              alt="Wheat"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Rating/Reviews Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Rating/Reviews
          </h2>
          <p className="text-gray-600">
            <strong>Rating:</strong> 4.5/5
          </p>
          <p className="text-gray-600">
            <strong>Reviews:</strong>
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Excellent produce quality! - Alice</li>
            <li>Very professional and timely delivery. - Bob</li>
          </ul>
        </div>

        {/* Documents Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Documents</h2>
          <p className="text-gray-600">
            Verifiable document for organic farming certification available upon
            request.
          </p>
          <div className="flex gap-4 mt-4">
            {/* Sample Documents */}
            <div className="bg-white border rounded-lg p-4 shadow-lg flex-1">
              <h3 className="text-lg font-semibold">
                Certification Document 1
              </h3>
              <p className="text-gray-600">Verified</p>
              <button className="text-blue-500 hover:underline">
                Download
              </button>
            </div>
            <div className="bg-white border rounded-lg p-4 shadow-lg flex-1">
              <h3 className="text-lg font-semibold">
                Certification Document 2
              </h3>
              <p className="text-gray-600">Pending</p>
              <button className="text-blue-500 hover:underline">
                Download
              </button>
            </div>
            <div className="bg-white border rounded-lg p-4 shadow-lg flex-1">
              <h3 className="text-lg font-semibold">
                Certification Document 3
              </h3>
              <p className="text-gray-600">Verified</p>
              <button className="text-blue-500 hover:underline">
                Download
              </button>
            </div>
          </div>
          <button className="mt-4 bg-blue-500 text-white p-2 rounded">
            Add Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmersPPFarmerPOV;
