// src/components/CropDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CropDetailPage = () => {
  const { id } = useParams();

  // Fetch the crop details based on the ID from a backend or dummy data
  // This is a placeholder example
  const crop = {
    id: id,
    name: 'Tomatoes',
    farmer: 'John Doe',
    quantity: '500 kg',
    location: 'California',
    rating: 4.5,
    description: 'Fresh and organic tomatoes.',
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{crop.name}</h1>
      <p className="text-gray-600">Farmer: {crop.farmer}</p>
      <p className="text-gray-600">Quantity: {crop.quantity}</p>
      <p className="text-gray-600">Location: {crop.location}</p>
      <p className="text-yellow-500">Rating: {crop.rating} ⭐</p>
      <p className="mt-4">{crop.description}</p>
    </div>
  );
};

export default CropDetailPage;
