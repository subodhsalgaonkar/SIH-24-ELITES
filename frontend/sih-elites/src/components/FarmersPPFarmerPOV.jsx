import React, { useState } from "react";
import wheatImg from "../Images/wheatImg.jpeg";
import Corn from "./Supplies_Images/corn.webp";
import tomatoImg from "../Images/Tomato.jpg";

const allCrops = [
  { name: "Wheat", img: wheatImg },
  { name: "Corn", img: Corn },
  { name: "Tomatoes", img: tomatoImg },
  {
    name: "Rice",
    img: "https://i.brecorder.com/primary/2024/08/66d0cbbea0ad4.jpg",
  },
  {
    name: "Barley",
    img: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/1200x628_FACEBOOK_Is_Barley_Gluten-Free-1200x628.jpg",
  },
  {
    name: "Potatoes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6v6-5oWwpOH3jeOliF9RJObbpb9OAYn8IZw&s",
  },
];

const FarmersPPFarmerPOV = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Rajesh Kumar",
    contact: "+1234567890",
    email: "rajesh@gmail.com",
    experience: "10 years",
    location: "Pune",
    personalInfo:
      "Rajesh Kumar is an experienced farmer with over 10 years of experience in organic farming.",
    farm: "Green Valley Farm",
    crops: "Wheat, Corn, Tomatoes",
    methods: "Organic, Hydroponic",
  });

  const [selectedCrop, setSelectedCrop] = useState("");
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
  };

  const handleChange = (e, field) => {
    setFormData((prevData) => ({ ...prevData, [field]: e.target.value }));
  };

  const handleAddCrop = () => {
    if (selectedCrop) {
      const cropNames = formData.crops.split(", ");
      if (cropNames.includes(selectedCrop)) {
        alert("This crop is already added!");
      } else {
        setFormData((prevData) => ({
          ...prevData,
          crops: `${prevData.crops}, ${selectedCrop}`,
        }));
      }
      setSelectedCrop(""); // Reset dropdown
    }
  };

  const handleFileChange = (e) => {
    setNewDocument(e.target.files[0]);
  };

  const handleAddDocument = () => {
    if (newDocument) {
      const newDoc = {
        title: newDocument.name,
        status: "Pending",
      };
      setDocuments((prevDocs) => [...prevDocs, newDoc]);
      setNewDocument(null);
    }
  };

  const renderCropImages = () => {
    return formData.crops.split(", ").map((crop, index) => {
      const cropData = allCrops.find((c) => c.name === crop);
      return (
        <img
          key={index}
          src={cropData ? cropData.img : wheatImg} // default image if not found
          alt={crop}
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
      );
    });
  };

  const availableCrops = allCrops.filter(
    (crop) => !formData.crops.split(", ").includes(crop.name)
  );

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
                className="bg-gray-200 p-2 rounded block mx-auto mb-2"
              />
            ) : (
              <h1 className="text-3xl font-extrabold text-white">
                {formData.name}
              </h1>
            )}
            {isEditing ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => handleChange(e, "contact")}
                  className="bg-gray-200 p-2 rounded block mx-auto"
                />
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => handleChange(e, "email")}
                  className="bg-gray-200 p-2 rounded block mx-auto"
                />
                <input
                  type="text"
                  value={formData.experience}
                  onChange={(e) => handleChange(e, "experience")}
                  className="bg-gray-200 p-2 rounded block mx-auto"
                />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleChange(e, "location")}
                  className="bg-gray-200 p-2 rounded block mx-auto"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-lg text-green-200">
                  Contact: {formData.contact}
                </p>
                <p className="text-lg text-green-200">
                  Email: {formData.email}
                </p>
                <p className="text-lg text-green-200">
                  Experience: {formData.experience}
                </p>
                <p className="text-lg text-green-200">
                  Location: {formData.location}
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
                className="bg-gray-200 p-2 rounded mb-2 block"
              />
              <input
                type="text"
                value={formData.crops}
                onChange={(e) => handleChange(e, "crops")}
                className="bg-gray-200 p-2 rounded mb-2 block"
              />
              <input
                type="text"
                value={formData.methods}
                onChange={(e) => handleChange(e, "methods")}
                className="bg-gray-200 p-2 rounded mb-2 block"
              />
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="bg-gray-200 p-2 rounded mb-2 block"
              >
                <option value="">Select a crop to add</option>
                {availableCrops.map((crop, index) => (
                  <option key={index} value={crop.name}>
                    {crop.name}
                  </option>
                ))}
              </select>
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
                <strong>Methods Used:</strong> {formData.methods}
              </p>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-4">{renderCropImages()}</div>
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
            <li>Excellent produce quality! - Aditya</li>
            <li>Very professional and timely delivery. - Jash</li>
          </ul>
        </div>
        {/* Documents Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Documents</h2>
          <div className="flex flex-wrap gap-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow-md w-full max-w-xs"
              >
                <p className="text-gray-800 font-bold">{doc.title}</p>
                <p
                  className={`${
                    doc.status === "Verified"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  Status: {doc.status}
                </p>
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="mt-4">
              <input type="file" onChange={handleFileChange} />
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
          <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end">
            <button
              onClick={handleSaveChanges}
              className="bg-green-500 text-white py-2 px-4 rounded"
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
