// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ role }) => {
  return (
    <nav className="bg-blue-600 p-4 text-white max-w-screen">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold text-xl">Farmer Connect</div>
        <div>
          {role === 'buyer' && (
            <Link className="px-3 py-2 hover:bg-blue-500 rounded" to="/buyer">
              Buyer Dashboard
            </Link>
          )}
          {role === 'seller' && (
            <Link className="px-3 py-2 hover:bg-blue-500 rounded" to="/seller">
              Seller Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
