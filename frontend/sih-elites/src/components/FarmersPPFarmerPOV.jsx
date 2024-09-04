import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to install axios using npm or yarn

const FarmersPPFarmerPOV = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    experience: "",
    location: "",
    personalInfo: "",
    farm: "",
    methods: "",
  });

  const id = localStorage.getItem("farmer_id");

  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState(null);

  useEffect(() => {
    const fetchFarmerData = async () => {
      try {
        console.log("Fetching data for id:", id);// TODO: remove this later

        const response = await axios.get(`http://localhost:3000/farmer/${id}`, {id});

        const farmerData = response.data;

        console.log(farmerData);

        setFormData({
          name: farmerData.name,
          contact: farmerData.contact,
          email: farmerData.email,
          experience: farmerData.experience,
          location: farmerData.address,
          personalInfo: farmerData.personal_info,
          farm: farmerData.farm_name,
          methods: farmerData.methods_used,
        });

        // Set documents if available
        setDocuments(farmerData.documents || []); // Adjust if documents are part of the response
      } catch (error) {
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          console.error("Error response headers:", error.response.headers);
        } else if (error.request) {
          console.error("Error request data:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      }
    };

    fetchFarmerData();
  }, []);

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

        {/* Farm and Methods Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Farm & Methods
          </h2>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={formData.farm}
                onChange={(e) => handleChange(e, "farm")}
                className="bg-gray-200 p-2 rounded block mb-2"
              />
              <input
                type="text"
                value={formData.methods}
                onChange={(e) => handleChange(e, "methods")}
                className="bg-gray-200 p-2 rounded block"
              />
            </div>
          ) : (
            <div>
              <p className="text-gray-600">Farm: {formData.farm}</p>
              <p className="text-gray-600">Methods: {formData.methods}</p>
            </div>
          )}
        </div>

        {/* Documents Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Documents</h2>
          {isEditing && (
            <div className="mb-4">
              <input type="file" onChange={handleFileChange} className="mb-2" />
              <button
                onClick={handleAddDocument}
                className="bg-blue-500 text-white py-1 px-2 rounded"
              >
                Add Document
              </button>
            </div>
          )}
          <div className="flex flex-wrap gap-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className={`border p-4 rounded ${
                  doc.status === "Verified"
                    ? "border-green-500"
                    : "border-red-500"
                }`}
              >
                <h3 className="text-lg font-bold">{doc.title}</h3>
                <p className="text-sm text-gray-600">{doc.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Save Changes Button */}
        {isEditing && (
          <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
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