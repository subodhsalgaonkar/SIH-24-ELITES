import React, { useState } from "react";
import wheatImg from "../Images/wheatImg.jpeg";
import bg from "../Images/BuyerProfile.jpg";

const FarmersPPFarmerPOV = () => {
  const [isEditing, setIsEditing] = useState(false);
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

  const [newCrop, setNewCrop] = useState("");
  const [documents, setDocuments] = useState([
    { title: "Certification Document 1", status: "Verified" },
    { title: "Certification Document 2", status: "Pending" },
    { title: "Certification Document 3", status: "Verified" },
  ]);
  const [newDocument, setNewDocument] = useState(null);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    // Implement your update logic here
  };

  const handleChange = (e, field) => {
    setFormData((prevData) => ({ ...prevData, [field]: e.target.value }));
  };

  const handleAddCrop = () => {
    if (newCrop) {
      setFormData((prevData) => ({
        ...prevData,
        crops: `${prevData.crops}, ${newCrop}`,
      }));
      setNewCrop("");
    }
  };

  const handleFileChange = (e) => {
    setNewDocument(e.target.files[0]);
  };

  const handleAddDocument = () => {
    if (newDocument) {
      // In a real application, you'd handle the file upload here.
      const newDoc = {
        title: newDocument.name,
        status: "Pending", // Default status for new documents
      };
      setDocuments((prevDocs) => [...prevDocs, newDoc]);
      setNewDocument(null);
    }
  };

  return (
    <div className="min-h-screen bg-lime-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-green-500 p-8">
          <button
            onClick={handleEditClick}
            className="absolute top-4 right-4 bg-blue-500 text-white py-1 px-2 rounded"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>

          <div className="absolute left-14 top-1/2 transform -translate-y-1/2">
            <img
              src={wheatImg}
              alt="Farmer"
              className="w-48 h-48 rounded-full border-4 border-white"
            />
          </div>

          <div className="text-center mt-24">
            {isEditing ? (
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange(e, "name")}
                className="bg-gray-200 p-2 rounded"
              />
            ) : (
              <h1 className="text-3xl font-extrabold text-white">
                {formData.name}
              </h1>
            )}
            {isEditing ? (
              <div>
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
              </div>
            ) : (
              <div>
                <p className="text-lg text-green-200">
                  Contact: {formData.contact}
                </p>
                <p className="text-lg text-green-200">
                  Email: {formData.email}
                </p>
                <p className="text-lg text-green-200">
                  Experience: {formData.experience}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Personal Info
          </h2>
          {isEditing ? (
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Crop Info</h2>
          {isEditing ? (
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
              <input
                type="text"
                value={newCrop}
                onChange={(e) => setNewCrop(e.target.value)}
                className="bg-gray-200 p-2 rounded mb-2"
                placeholder="Add new crop"
              />
              <button
                onClick={handleAddCrop}
                className="bg-green-500 text-white p-2 rounded"
              >
                Add Crop
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
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-4 shadow-lg flex-1"
              >
                <h3 className="text-lg font-semibold">{doc.title}</h3>
                <p
                  className={`text-sm ${
                    doc.status === "Verified"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {doc.status}
                </p>
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="mt-4">
              <input
                type="file"
                onChange={handleFileChange}
                className="bg-gray-200 p-2 rounded"
              />
              <button
                onClick={handleAddDocument}
                className="bg-green-500 text-white p-2 rounded mt-2"
              >
                Add Document
              </button>
            </div>
          )}
        </div>

        {/* Save Changes Button */}
        {isEditing && (
          <div className="p-6 flex justify-end">
            <button
              onClick={handleSaveChanges}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmersPPFarmerPOV;
