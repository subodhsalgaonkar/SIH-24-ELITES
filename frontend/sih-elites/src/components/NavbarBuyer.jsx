// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 text-white max-w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">Farmer Connect</div>
        <div className="flex items-center">
          <Link
            className="px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded mr-4"
            to="/buyer"
          >
            Dashboard
          </Link>

          <Link
            className="px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded mr-4"
            to="/marketplace"
          >
            MarketPlace
          </Link>
          <Link
            className="px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded mr-4"
            to="/buyerprofilebuyerpov"
          >
            Profile
          </Link>
          <Link
            className="px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded"
            to="/notifications"
          >
            Notifications
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
