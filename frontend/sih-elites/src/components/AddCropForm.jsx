import { useState } from "react";
import axios from "axios";

const AddCropForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [phase, setPhase] = useState("");
  const [farmerId, setFarmerId] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("quantity", quantity);
    formData.append("phase", phase);
    formData.append("farmer_id", farmerId);
    if (image) formData.append("image", image);

    try {
      const response = await axios.post("/addCrop", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Crop added:", response.data);
    } catch (error) {
      console.error("Error adding crop:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Crop Name"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        required
      />
      <input
        type="text"
        value={phase}
        onChange={(e) => setPhase(e.target.value)}
        placeholder="Phase"
        required
      />
      <input
        type="text"
        value={farmerId}
        onChange={(e) => setFarmerId(e.target.value)}
        placeholder="Farmer ID"
        required
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Add Crop</button>
    </form>
  );
};

export default AddCropForm;
