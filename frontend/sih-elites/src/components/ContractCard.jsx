// src/components/ContractCard.jsx
import React from 'react';

const ContractCard = ({ contract }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-semibold">{contract.title}</h3>
      <p className="text-gray-600">{contract.description}</p>
      <p className="text-gray-800">Status: {contract.status}</p>
      <a href={`/contract/${contract.id}`} className="text-blue-500 hover:underline">View Details</a>
    </div>
  );
};

export default ContractCard;
