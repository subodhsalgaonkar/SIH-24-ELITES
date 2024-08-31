import React, { useState } from "react";
import tomato from "../Images/Tomato.jpg";
import cucumber from "../Images/Cucumber.jpg";
import leafygreens from "../Images/leafygreens.jpg";
import wheatImg from "../Images/wheatImg.jpeg";
import bg from "../Images/BuyerProfile.jpg";

const allCrops = [
  { name: "Tomatoes", img: tomato },
  { name: "Cucumbers", img: cucumber },
  { name: "Leafy Greens", img: leafygreens },
  { name: "Wheat", img: wheatImg },
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

const BuyerProfileBuyerPOV = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Soham Potharkar",
    contact: "+9876543210",
    email: "sohampotharkar@gmail.com",
    company: "Potharkar Lodge",
    location: "Pune",
    description:
      "Potharkar Lodge is a trusted company that buys quality produce from local suppliers.",
    paymentTerms:
      "Payment terms are net 30 days from the date of invoice. We accept payments via bank transfer and major credit cards.",
    crops: ["Tomatoes", "Cucumbers", "Leafy Greens"],
  });

  const [selectedCrop, setSelectedCrop] = useState("");
  const [documents, setDocuments] = useState([
    { title: "Business License", status: "Verified" },
    { title: "Insurance Certificate", status: "Pending" },
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

  const handleAddCrop = () => {
    if (selectedCrop) {
      if (formData.crops.includes(selectedCrop)) {
        alert("This crop is already added!");
      } else {
        setFormData((prevData) => ({
          ...prevData,
          crops: [...prevData.crops, selectedCrop],
        }));
      }
      setSelectedCrop(""); // Reset dropdown
    }
  };

  const availableCrops = allCrops.filter(
    (crop) => !formData.crops.includes(crop.name)
  );

  const renderCropImages = () => {
    return formData.crops.map((crop, index) => {
      const cropData = allCrops.find((c) => c.name === crop);
      return (
        <img
          key={index}
          src={cropData ? cropData.img : ""}
          alt={crop}
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-lime-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-green-500 p-8">
          <div className="absolute left-14 top-1/2 transform -translate-y-1/2">
            <img
              src={bg}
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-white"
            />
          </div>
          <button
            onClick={handleEditClick}
            className="absolute top-4 right-4 bg-white text-green-500 py-1 px-2 rounded"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>

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
                  value={formData.company}
                  onChange={(e) => handleChange(e, "company")}
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
                <p className="text-lg text-blue-200">
                  Contact: {formData.contact}
                </p>
                <p className="text-lg text-blue-200">Email: {formData.email}</p>
                <p className="text-lg text-blue-200">
                  Company: {formData.company}
                </p>
                <p className="text-lg text-blue-200">
                  Location: {formData.location}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Description Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
          {isEditing ? (
            <textarea
              value={formData.description}
              onChange={(e) => handleChange(e, "description")}
              className="bg-gray-200 p-2 rounded w-full h-24"
            />
          ) : (
            <p className="text-gray-600 leading-relaxed">
              {formData.description}
            </p>
          )}
        </div>

        {/* Preferred Products Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Preferred Products
          </h2>
          <div className="grid grid-cols-3 gap-8 text-center">
            {allCrops
              .filter((crop) => formData.crops.includes(crop.name))
              .map((crop, index) => (
                <div key={index}>
                  <p className="text-gray-600 mb-2">{crop.name}</p>
                  <img
                    src={crop.img}
                    alt={crop.name}
                    className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
                  />
                </div>
              ))}
          </div>
          {isEditing && (
            <div className="mt-4">
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="bg-gray-200 p-2 rounded mb-2 block"
              >
                <option value="">Select a crop to add</option>
                {allCrops
                  .filter((crop) => !formData.crops.includes(crop.name))
                  .map((crop, index) => (
                    <option key={index} value={crop.name}>
                      {crop.name}
                    </option>
                  ))}
              </select>
              <button
                onClick={handleAddCrop}
                className="bg-green-500 text-white py-1 px-3 rounded"
              >
                Add Crop
              </button>
            </div>
          )}
        </div>

        {/* Payment Terms Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Payment Terms
          </h2>
          {isEditing ? (
            <textarea
              value={formData.paymentTerms}
              onChange={(e) => handleChange(e, "paymentTerms")}
              className="bg-gray-200 p-2 rounded w-full h-24"
            />
          ) : (
            <p className="text-gray-600 leading-relaxed">
              {formData.paymentTerms}
            </p>
          )}
        </div>

        {/* Contract History Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contract History
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Summary of previous contracts or transactions is available upon
            request.
          </p>
        </div>

        {/* Ratings and Reviews Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ratings and Reviews
          </h2>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={star <= 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M11.049 2.927C11.326 2.36 11.936 2 12.5 2s1.174.36 1.451.927l2.1 4.23a1 1 0 00.757.541l4.67.68c.974.141 1.36 1.322.655 2.007l-3.38 3.287a1 1 0 00-.287.887l.797 4.65c.165.964-.847 1.721-1.699 1.567l-4.17-1.9a1 1 0 00-.933 0l-4.17 1.9c-.852.154-1.865-.603-1.699-1.567l.797-4.65a1 1 0 00-.287-.887L2.29 10.673c-.705-.685-.319-1.866.655-2.007l4.67-.68a1 1 0 00.757-.541l2.1-4.23z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">
              (4.0/5 based on 120 reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfileBuyerPOV;
