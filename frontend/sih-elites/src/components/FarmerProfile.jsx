import { useState, useEffect } from "react";
import axios from "axios";

const FarmerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [crops, setCrops] = useState([]);
  const [showCropForm, setShowCropForm] = useState(false);
  const [cropFormData, setCropFormData] = useState({
    name: "",
    quantity: "",
    phase: "",
    image: null, // for file input
  });

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    experience: "",
    address: "",
    personalInfo: "",
    farm: "",
    methods: "",
  });
  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState(null);

  const id = localStorage.getItem("farmer_id");

  useEffect(() => {
    const fetchFarmerData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/farmer/${id}`);
        const farmerData = response.data;

        setFormData({
          name: farmerData.name,
          contact: farmerData.contact,
          email: farmerData.email,
          experience: farmerData.experience,
          address: farmerData.address,
          personalInfo: farmerData.personalInfo,
          farm: farmerData.farm,
          methods: farmerData.methods,
        });

        setDocuments(farmerData.documents || []);
      } catch (error) {
        console.error("Error fetching farmer data:", error);
      }
    };

    fetchFarmerData();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleSaveChanges = async () => {
    setIsEditing(false);
    try {
      const updatedData = { ...formData, documents };
      const response = await axios.post(
        `http://localhost:3000/updateFarmer/${id}`,
        updatedData
      );

      if (response.status === 200) {
        console.log("Changes saved successfully", response.data);
      } else {
        console.error("Failed to save changes", response.data);
      }
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  const handleChange = (e, field) => {
    setFormData((prevData) => ({ ...prevData, [field]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setNewDocument(e.target.files[0]);
  };

  const handleAddDocument = () => {
    if (newDocument) {
      const formData = new FormData();
      formData.append("file", newDocument);

      axios
        .post("http://localhost:3000/upload", formData)
        .then((response) => {
          const newDoc = {
            title: newDocument.name,
            path: response.data.filePath, // Ensure this is correct
            status: "Pending",
          };
          setDocuments((prevDocs) => [...prevDocs, newDoc]);
          setNewDocument(null);
        })
        .catch((error) => {
          console.error("Error uploading document:", error);
        });
    }
  };

  const handleDocumentTitleChange = async (e, docId) => {
    const newTitle = e.target.value;
    const id = localStorage.getItem("farmer_id"); // Ensure this matches how you retrieve the farmer ID

    console.log(`Updating document ${docId} with title: ${newTitle}`);

    try {
      const response = await axios.post(
        `http://localhost:3000/updateDocument/${id}/${docId}`,
        { title: newTitle }
      );

      if (response.status === 200) {
        // Optionally, refetch documents to ensure data consistency
        const fetchResponse = await axios.get(
          `http://localhost:3000/farmer/${id}`
        );
        setDocuments(fetchResponse.data.documents || []);
      } else {
        console.error("Failed to update document title:", response.data);
      }
    } catch (error) {
      console.error(
        "Error updating document title:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleRemoveDocument = async (docId) => {
    try {
      const updatedDocs = documents.filter((doc) => doc._id !== docId);
      setDocuments(updatedDocs);
      // Optionally, send a request to the server to remove the document from the database
    } catch (error) {
      console.error("Error removing document:", error);
    }
  };

const fetchFarmerCrops = async () => {
  try {
    console.log("Fetching crops for farmer_id:", id); // Log the ID to ensure it’s correct
    const response = await axios.get(`http://localhost:3000/api/crops/${id}`);
    console.log("Fetched crops:", response.data); // Log response data
    setCrops(response.data);
  } catch (error) {
    console.error("Error fetching farmer crops:", error);
  }
};

useEffect(() => {
  if (id) {
    fetchFarmerCrops();
  }
}, [id]);


  const handleCropChange = (e) => {
    const { name, value } = e.target;
    setCropFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange2 = (e) => {
    setCropFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleAddCrop = async () => {
    const formData = new FormData();
    formData.append("name", cropFormData.name);
    formData.append("quantity", cropFormData.quantity);
    formData.append("phase", cropFormData.phase);
    formData.append("image", cropFormData.image);
    formData.append("farmer_id", id); // sending farmer_id to link with the crop

    try {
      const response = await axios.post(
        "http://localhost:3000/api/addCrop", // Ensure route matches the backend
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        setCrops((prevCrops) => [...prevCrops, response.data]); // Append new crop
        setShowCropForm(false); // Close form
      }
    } catch (error) {
      console.error("Error adding crop:", error);
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
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={(e) => handleChange(e, "contact")}
                  className="bg-gray-200 p-2 rounded block mx-auto"
                />
                <input
                  type="text"
                  value={formData.email}
                  placeholder="Email"
                  onChange={(e) => handleChange(e, "email")}
                  className="bg-gray-200 p-2 rounded block mx-auto"
                />
                <input
                  type="text"
                  value={formData.experience}
                  placeholder="Experience"
                  onChange={(e) => handleChange(e, "experience")}
                  className="bg-gray-200 p-2 rounded block mx-auto"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => handleChange(e, "address")}
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
                  Address: {formData.address}
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
                placeholder="Info about farm like farm name, soil type, size of farm"
                value={formData.farm}
                onChange={(e) => handleChange(e, "farm")}
                className="bg-gray-200 p-2 rounded block mb-2 w-full"
              />
              <input
                type="text"
                value={formData.methods}
                onChange={(e) => handleChange(e, "methods")}
                className="bg-gray-200 p-2 rounded block w-full"
              />
            </div>
          ) : (
            <div>
              <p className="text-gray-600">Info About Farm: {formData.farm}</p>
              <p className="text-gray-600">
                Methods used for Farming: {formData.methods}
              </p>
            </div>
          )}
        </div>
        {/* Crops Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Crops</h2>
          <button
            className="bg-green-500 text-white py-1 px-2 rounded"
            onClick={() => setShowCropForm(true)}
          >
            Add Crop
          </button>

          {/* Crop Cards */}
          {crops.length === 0 ? (
            <p>No crops available</p>
          ) : (
            <div className="flex flex-wrap gap-4 mt-4">
              {crops.map((crop) => (
                <div
                  key={crop._id}
                  className="border p-4 rounded bg-white shadow"
                >
                  <h3 className="text-lg font-bold">{crop.name}</h3>
                  <img
                    src={`http://localhost:3000/${crop.image}`}
                    alt={crop.name}
                    className="w-full h-32 object-cover"
                  />
                  <p>Quantity: {crop.quantity}</p>
                  <p>Phase: {crop.phase || "Not specified"}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Crop Form Modal */}
        {showCropForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Add New Crop</h2>
              <input
                type="text"
                name="name"
                placeholder="Crop Name"
                value={cropFormData.name}
                onChange={handleCropChange}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={cropFormData.quantity}
                onChange={handleCropChange}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                name="phase"
                placeholder="Phase"
                value={cropFormData.phase}
                onChange={handleCropChange}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="file"
                name="image"
                onChange={handleFileChange2}
                className="w-full mb-2 p-2 border rounded"
              />
              <button
                onClick={handleAddCrop}
                className="bg-green-500 text-white py-1 px-4 rounded"
              >
                Save Crop
              </button>
              <button
                onClick={() => setShowCropForm(false)}
                className="bg-red-500 text-white py-1 px-4 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {/* Documents Section */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Documents</h2>

          {isEditing && (
            <>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full mb-4 p-2 border rounded"
              />
              <button
                onClick={handleAddDocument}
                className="bg-blue-500 text-white py-1 px-4 rounded"
              >
                Add Document
              </button>
            </>
          )}

          {/* Display existing documents */}
          <div className="flex flex-wrap gap-4 mt-4">
            {documents.map((doc) => (
              <div
                key={doc._id}
                className={`border p-4 rounded bg-white shadow ${
                  doc.status === "Pending"
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <h3 className="text-lg font-bold">{doc.title}</h3>
                {/* <p>Path: {doc.path}</p> */}
                <p>Status: {doc.status}</p>
                {isEditing && (
                  <>
                    <input
                      type="text"
                      defaultValue={doc.title}
                      onBlur={(e) => handleDocumentTitleChange(e, doc._id)}
                      className="border p-2 rounded mt-2 w-full"
                    />
                    <button
                      onClick={() => handleRemoveDocument(doc._id)}
                      className="bg-red-500 text-white py-1 px-4 rounded mt-2"
                    >
                      Remove
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
