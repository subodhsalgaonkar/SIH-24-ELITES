// src/components/ContractDetail.jsx
import React from 'react';

const ContractDetail = ({ contract }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{contract.title}</h2>
      <p className="text-gray-700 mb-2">{contract.description}</p>
      <p className="text-gray-800">Status: {contract.status}</p>
      <p className="text-gray-800">Created On: {contract.createdOn}</p>
      <p className="text-gray-800">Ending On: {contract.endingOn}</p>
      <p className="text-gray-800">Price: {contract.price}</p>

      {/* Add a button here to get the physical image of the contract */}
      <button 
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        // onClick={handleGetContractImage} // Implementation needed
      >
        Get Physical Image of Contract
      </button>
    </div>
  );
};

export default ContractDetail;
