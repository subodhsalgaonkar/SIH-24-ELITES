import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Marketplace = () => {
  const navigate = useNavigate();

  const [searchRating, setSearchRating] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchQuantity, setSearchQuantity] = useState('');
  const [searchCrop, setSearchCrop] = useState('');

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
  
  const filteredCrops = crops.filter(crop => {
    const meetsRating = searchRating ? crop.rating >= parseFloat(searchRating) : true;
    const meetsLocation = searchLocation ? crop.location.includes(searchLocation) : true;
    const meetsQuantity = searchQuantity ? parseInt(crop.quantity, 10) >= parseInt(searchQuantity, 10) : true;
    const meetsCrop = searchCrop ? crop.name.includes(searchCrop) : true;
    return meetsRating && meetsLocation && meetsQuantity && meetsCrop;
  });

  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];
  const cropsList = ['Tomato', 'Potato', 'Onion', 'Carrot', 'Spinach'];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-slate-700 p-4 text-white">
        <h2 className="text-xl font-bold mb-4">Filter by</h2>

        <div className="mb-4">
          <label className="block mb-1">Rating</label>
          <select
            className="w-full p-2 text-black"
            value={searchRating}
            onChange={(e) => setSearchRating(e.target.value)}
          >
            <option value="">All Ratings</option>
            <option value="4.5">4.5+</option>
            <option value="4">4+</option>
            <option value="3">3+</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Location</label>
          <input
            type="text"
            className="w-full p-2 text-black"
            list="locations"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            placeholder="Search by location"
          />
          <datalist id="locations">
            {locations.map((location, idx) => (
              <option key={idx} value={location} />
            ))}
          </datalist>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Quantity</label>
          <input
            type="number"
            className="w-full p-2 text-black"
            value={searchQuantity}
            onChange={(e) => setSearchQuantity(e.target.value)}
            placeholder="Min quantity"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Crop</label>
          <input
            type="text"
            className="w-full p-2 text-black"
            list="cropsList"
            value={searchCrop}
            onChange={(e) => setSearchCrop(e.target.value)}
            placeholder="Search by crop"
          />
          <datalist id="cropsList">
            {cropsList.map((crop, idx) => (
              <option key={idx} value={crop} />
            ))}
          </datalist>
        </div>
      </div>
            
      {/* Crop Cards */}
      <div className="w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCrops.map(crop => (
          <div
            key={crop.id}
            className="bg-white shadow-md rounded overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 max-h-40"
            onClick={() => navigate(`/crop/${crop.id}`)}
          >
            <div className="p-4 flex items-center">
              <img
                src={crop.image}
                alt={crop.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{crop.name}</h3>
                <p className="text-gray-600">Farmer: {crop.farmer}</p>
                <p className="text-gray-600">Quantity: {crop.quantity}</p>
                <p className="text-gray-600">Location: {crop.location}</p>
                <p className="text-yellow-500">Rating: {crop.rating} ⭐</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
