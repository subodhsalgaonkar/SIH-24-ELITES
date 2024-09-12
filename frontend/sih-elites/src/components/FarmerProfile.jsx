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

  const [editingCrop, setEditingCrop] = useState(null); // State for currently editing crop
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

  const fetchFarmerCrops = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/crops/${id}`);
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
            path: response.data.filePath,
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

    try {
      const response = await axios.post(
        `http://localhost:3000/updateDocument/${id}/${docId}`,
        { title: newTitle }
      );

      if (response.status === 200) {
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
    } catch (error) {
      console.error("Error removing document:", error);
    }
  };

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
    formData.append("farmer_id", id);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/addCrop",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        setCrops((prevCrops) => [...prevCrops, response.data]);
        setShowCropForm(false);
      }
    } catch (error) {
      console.error("Error adding crop:", error);
    }
  };

  const handleEditCrop = (crop) => {
    setEditingCrop(crop);
    setCropFormData({
      name: crop.name,
      quantity: crop.quantity,
      phase: crop.phase,
      image: null, // Handle image updates separately
    });
  };

  const handleUpdateCrop = async () => {
    const formData = new FormData();
    formData.append("name", cropFormData.name);
    formData.append("quantity", cropFormData.quantity);
    formData.append("phase", cropFormData.phase);
    formData.append("image", cropFormData.image || editingCrop.image); // Use existing image if no new image

    try {
      const response = await axios.put(
        `http://localhost:3000/api/updateCrop/${editingCrop._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        setCrops((prevCrops) =>
          prevCrops.map((crop) =>
            crop._id === editingCrop._id ? response.data : crop
          )
        );
        setEditingCrop(null);
        setCropFormData({
          name: "",
          quantity: "",
          phase: "",
          image: null,
        });
      }
    } catch (error) {
      console.error("Error updating crop:", error);
    }
  };
  const handleRemoveCrop = async (cropId) => {
    try {
      await axios.delete(`http://localhost:3000/api/crops/${cropId}`);
      // Update the local state to remove the deleted crop
      setCrops(crops.filter((crop) => crop._id !== cropId));
    } catch (error) {
      console.error("Error removing crop:", error);
      // Handle error (e.g., show a message to the user)
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
        {/* Crop Section */}
        <div className="p-8">
          <h2 className="text-xl font-bold mb-4">Crops</h2>
          <button
            onClick={() => setShowCropForm(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
          >
            Add Crop
          </button>

          {/* Modal for Adding Crop */}
          {showCropForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                  onClick={() => setShowCropForm(false)}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                  &times;
                </button>
                <h2 className="text-lg font-semibold mb-4">Add Crop</h2>
                <input
                  type="text"
                  name="name"
                  value={cropFormData.name}
                  onChange={handleCropChange}
                  placeholder="Crop Name"
                  className="bg-gray-200 p-2 rounded mb-2 block w-full"
                />
                <input
                  type="number"
                  name="quantity"
                  value={cropFormData.quantity}
                  onChange={handleCropChange}
                  placeholder="Quantity"
                  className="bg-gray-200 p-2 rounded mb-2 block w-full"
                />
                <input
                  type="text"
                  name="phase"
                  value={cropFormData.phase}
                  onChange={handleCropChange}
                  placeholder="Phase"
                  className="bg-gray-200 p-2 rounded mb-2 block w-full"
                />
                <input
                  type="file"
                  onChange={handleFileChange2}
                  className="mb-2"
                />
                <button
                  onClick={handleAddCrop}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Add Crop
                </button>
              </div>
            </div>
          )}
          <div className={`flex flex-wrap gap-2 ${isEditing ? "mb-8" : ""}`}>
            {crops.map((crop) => (
              <div
                key={crop._id}
                className="relative border border-gray-300 p-2 rounded-lg shadow-md flex-shrink-0 w-36 h-40"
              >
                {editingCrop && editingCrop._id === crop._id ? (
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={cropFormData.name}
                      onChange={handleCropChange}
                      placeholder="Crop Name"
                      className="bg-gray-100 p-2 rounded mb-4 block w-full"
                    />
                    <input
                      type="number"
                      name="quantity"
                      value={cropFormData.quantity}
                      onChange={handleCropChange}
                      placeholder="Quantity"
                      className="bg-gray-100 p-2 rounded mb-4 block w-full"
                    />
                    <input
                      type="text"
                      name="phase"
                      value={cropFormData.phase}
                      onChange={handleCropChange}
                      placeholder="Phase"
                      className="bg-gray-100 p-2 rounded mb-4 block w-full"
                    />
                    <input
                      type="file"
                      onChange={handleFileChange2}
                      className="mb-4"
                    />
                    <button
                      onClick={handleUpdateCrop}
                      className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                    >
                      Save Changes
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold mb-2">
                        {crop.name}
                      </h3>
                      {isEditing && (
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => handleEditCrop(crop)}
                            className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 text-xs"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleRemoveCrop(crop._id)}
                            className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 text-xs"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">
                      Quantity: {crop.quantity}
                    </p>
                    <p className="text-gray-700 mb-4">Phase: {crop.phase}</p>
                    {crop.image && (
                      <img
                        src={`http://localhost:3000${crop.image}`}
                        alt="Crop Image"
                        className="w-20 h-18 object-cover rounded-full mb-4 border border-gray-300"
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

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
          <button
            onClick={handleSaveChanges}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            style={{ display: isEditing ? "block" : "none" }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
