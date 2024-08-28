// src/pages/BuyerDashboard.jsx
import React from 'react';
import Dashboard from '../components/Dashboard';

const BuyerDashboard = () => {
  const buyerContracts = [
    { id: 1, title: 'Wheat Purchase', description: 'Buying 100 tons of wheat.', status: 'active' },
    { id: 2, title: 'Corn Purchase', description: 'Buying 200 tons of corn.', status: 'past' },
  ];

  return <Dashboard contracts={buyerContracts} />;
};

export default BuyerDashboard;
