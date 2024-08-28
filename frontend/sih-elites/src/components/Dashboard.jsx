// src/components/Dashboard.jsx
import React, { useState } from 'react';
import ContractCard from './ContractCard';

const Dashboard = ({ contracts }) => {
  const [filter, setFilter] = useState('all');

  const filteredContracts = contracts.filter(contract => {
    if (filter === 'all') return true;
    return contract.status === filter;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Your Contracts</h2>
        <div>
          <select 
            className="border p-2 rounded"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Contracts</option>
            <option value="active">Active Contracts</option>
            <option value="past">Past Contracts</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContracts.map(contract => (
          <ContractCard key={contract.id} contract={contract} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
