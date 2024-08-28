// src/pages/SellerDashboard.jsx
import React from 'react';
import Dashboard from '../components/Dashboard';

const SellerDashboard = () => {
  const sellerContracts = [
    { id: 1, title: 'Wheat Sale', description: 'Selling 100 tons of wheat.', status: 'active' },
    { id: 2, title: 'Rice Sale', description: 'Selling 50 tons of rice.', status: 'past' },
  ];

  return <Dashboard contracts={sellerContracts} />;
};

export default SellerDashboard;
