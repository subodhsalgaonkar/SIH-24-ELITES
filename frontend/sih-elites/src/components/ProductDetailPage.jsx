import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample crop data
 
  //we need to add farmer_id in this data i.e in the info that we fectch form the db we should get farmer_id with id
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
      name: 'Sweet potato',
      farmer: 'Rajesh Kumar',
      quantity: '75 kg',
      location: 'Chennai',
      rating: 4.5
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKj0lXIdADuOjFH69vu1ETxVVDc6iEZUcvg&s',
      name: 'Capsicum',
      farmer: 'Rajesh Kumar',
      quantity: '65 kg',
      location: 'Kolkata',
      rating: 4.5
    },
    {
      id: 6,
      image: 'https://kyssafarms.com/cdn/shop/products/lady-finger.jpg?v=1600955405',
      name: 'Lady Fingers',
      farmer: 'Rajesh Kumar',
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
      farmer: 'Rajesh Kumar',
      quantity: '40 kg',
      location: 'Bangalore',
      rating: 4.5
    },
    {
      id: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltKav52elm05u-AJbm4fw4jyJNtCBaWrxuA&s',
      name: 'Cabbage',
      farmer: 'Rajesh Kumar',
      quantity: '115 kg',
      location: 'Chennai',
      rating: 4.5
    }
  ];
  

  const crop = crops.find(crop => crop.id === parseInt(id, 10));


  // Fetch other products from the same farmer
  const otherProducts = crops.filter(c => c.farmer === crop.farmer && c.id !== crop.id);


  const handleFarmerClick = () => {
    // TODO: Replace with farmer's ID in future to navigate to farmer profile
    navigate('/');
  }

  if (!crop) {
    return <p>Crop not found!</p>;
  }

  return (
     <div className="flex flex-col min-h-screen bg-[#e6e7dc] p-6">
  {/* Product Container */}
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row justify-between items-start">
    
    {/* Product Image */}
    <div className="mx-10 p-2 flex justify-center items-center">
      <img
        src={crop.image}
        alt={crop.name}
        className="w-60 h-60 object-cover rounded-full border"
      />
    </div>

    {/* Product Details */}
    <div className="flex-grow mb-4">
      <h2 className="text-3xl font-bold mb-2">{crop.name}</h2> {/* Increased to text-3xl for larger font */}
      <p className="text-lg font-bold mb-2">Item Description</p> {/* Increased to text-lg for larger font */}
      <p className="text-base mb-4">nans asnna ansnnas ifhwheb hsgdnm egryeb gsba SD SDBS ANBASB BXSBX LOREM IPSUM</p>
      <p className="text-base font-semibold mb-1">Producer: 
        <span className='cursor-pointer underline'
        onClick={handleFarmerClick}>
          {crop.farmer}
        </span>
      </p>
      <p className="text-base mb-1">Location: {crop.location}</p>
      <p className="text-base mb-1">Max Qty: {crop.quantity}</p>
      <p className="text-base mb-1">Farmer Rating: {crop.rating} ⭐</p>
    </div>

    {/* Start Negotiation Button */}
    <button
      className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg self-start sm:self-center shadow-md hover:bg-orange-600 transition duration-300"
      onClick={() => navigate(`/start-conversation/${crop.id}`)}
    >
      Start Negotiation
    </button>
  </div>

  {/* Explore Other Products Section */}
  <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-lg font-bold mb-4">Explore Other Products from Producer:</h3>
    <div className="flex space-x-4">
      {otherProducts.map(product => (
        <div key={product.id} className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border cursor-pointer" onClick={() => navigate(`/crop/${product.id}`)}>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          {/* <p>{product.name}</p> */} {/*I sep here so do this*/}
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default ProductDetailPage;
