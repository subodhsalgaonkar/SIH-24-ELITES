import React, { useState } from 'react';

const ContractForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    farmerName: '',
    farmerAddress: '',
    buyerName: '',
    buyerAddress: '',
    product: '',
    qualityStandards: '',
    price: '',
    deliveryLocation: '',
    deliveryDates: '',
    paymentSchedule: '',
    paymentDays: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming we send formData to the backend here
    console.log(formData);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Create Contract</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Farmer's Name</label>
          <input
            type="text"
            name="farmerName"
            value={formData.farmerName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Farmer's Address</label>
          <input
            type="text"
            name="farmerAddress"
            value={formData.farmerAddress}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Buyer's Name</label>
          <input
            type="text"
            name="buyerName"
            value={formData.buyerName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Buyer's Address</label>
          <input
            type="text"
            name="buyerAddress"
            value={formData.buyerAddress}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Product</label>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Quality Standards</label>
          <input
            type="text"
            name="qualityStandards"
            value={formData.qualityStandards}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Price per Unit</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Delivery Location</label>
          <input
            type="text"
            name="deliveryLocation"
            value={formData.deliveryLocation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Delivery Dates</label>
          <input
            type="date"
            name="deliveryDates"
            value={formData.deliveryDates}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Payment Schedule</label>
          <input
            type="text"
            name="paymentSchedule"
            value={formData.paymentSchedule}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Payment Days</label>
          <input
            type="number"
            name="paymentDays"
            value={formData.paymentDays}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContractForm;
