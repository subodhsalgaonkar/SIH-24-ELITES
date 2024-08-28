// src/pages/ContractDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ContractDetail from '../components/ContractDetail';

const dummyContracts = [
  { 
    id: 1, 
    title: 'Wheat Purchase', 
    description: 'Buying 100 tons of wheat.', 
    status: 'active', 
    createdOn: '2024-08-01', 
    endingOn: '2024-09-01',
    price: 'Rs 6000 per ton' 
  },
  { 
    id: 2, 
    title: 'Corn Purchase', 
    description: 'Buying 200 tons of corn.', 
    status: 'past', 
    createdOn: '2024-07-01', 
    endingOn: '2024-07-31' ,
    price: 'Rs 6000 per ton'
  },
  { 
    id: 3, 
    title: 'Wheat Sale', 
    description: 'Selling 100 tons of wheat.', 
    status: 'active', 
    createdOn: '2024-08-10', 
    endingOn: '2024-09-10' ,
    price: 'Rs 6000 per ton'
  },
  { 
    id: 4, 
    title: 'Rice Sale', 
    description: 'Selling 50 tons of rice.', 
    status: 'past', 
    createdOn: '2024-06-01', 
    endingOn: '2024-06-30' ,
    price: 'Rs 6000 per ton'
  },
];

const ContractDetailsPage = () => {
  const { id } = useParams();
  const contract = dummyContracts.find(c => c.id === parseInt(id));

  return <ContractDetail contract={contract} />;
};

export default ContractDetailsPage;
