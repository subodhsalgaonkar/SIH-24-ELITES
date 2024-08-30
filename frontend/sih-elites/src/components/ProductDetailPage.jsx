import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample crop data
 
  const crops = [
    {
      id: 1,
      image: 'https://propagationplace.co.uk/pp/wp-content/uploads/Tomato-Alicante-1-1000x1000.jpg',
      name: 'Tomatoes',
      farmer: 'Rajesh Kumar',
      quantity: '120 kg',
      location: 'Mumbai',
      rating: 4.5
    },
    {
      id: 2,
      image: 'https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg',
      name: 'Corn',
      farmer: 'Anil Verma',
      quantity: '90 kg',
      location: 'Delhi',
      rating: 4.8
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6v6-5oWwpOH3jeOliF9RJObbpb9OAYn8IZw&s',
      name: 'Potato',
      farmer: 'Vikram Singh',
      quantity: '140 kg',
      location: 'Bangalore',
      rating: 4.5
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoBketPWvPJhC7u2Vsk2EPd4XzBJiEYSSzw&s',
      name: 'Sweet Potato',
      farmer: 'Suresh Patil',
      quantity: '75 kg',
      location: 'Chennai',
      rating: 4.5
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKj0lXIdADuOjFH69vu1ETxVVDc6iEZUcvg&s',
      name: 'Capsicum',
      farmer: 'Manoj Gupta',
      quantity: '65 kg',
      location: 'Kolkata',
      rating: 4.5
    },
    {
      id: 6,
      image: 'https://kyssafarms.com/cdn/shop/products/lady-finger.jpg?v=1600955405',
      name: 'Lady Fingers',
      farmer: 'Arun Sharma',
      quantity: '30 kg',
      location: 'Mumbai',
      rating: 4.5
    },
    {
      id: 7,
      image: 'https://149880802.v2.pressablecdn.com/wp-content/uploads/53155733592_ce292a7118_c1.jpg',
      name: 'Spinach',
      farmer: 'Ravi Mehta',
      quantity: '50 kg',
      location: 'Delhi',
      rating: 4.5
    },
    {
      id: 8,
      image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg',
      name: 'Broccoli',
      farmer: 'Nitin Yadav',
      quantity: '40 kg',
      location: 'Bangalore',
      rating: 4.5
    },
    {
      id: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltKav52elm05u-AJbm4fw4jyJNtCBaWrxuA&s',
      name: 'Cabbage',
      farmer: 'Ajay Reddy',
      quantity: '115 kg',
      location: 'Chennai',
      rating: 4.5
    }
  ];
  

  const crop = crops.find(crop => crop.id === parseInt(id, 10));

  if (!crop) {
    return <p>Crop not found!</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Product Image */}
      <div className="w-1/2 p-4">
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="w-1/2 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{crop.name}</h2>
        <p className="text-lg font-semibold">Farmer: <a href={`/farmer/${crop.farmer}`} className="text-blue-500 hover:underline">{crop.farmer}</a></p>
        <p className="text-lg">Quantity Available: {crop.quantity}</p>
        <p className="text-lg">Location: {crop.location}</p>
        <p className="text-lg text-yellow-500">Rating: {crop.rating} ⭐</p>

        <button
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={() => navigate(`/start-conversation/${crop.id}`)}
        >
          Start a Conversation
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
