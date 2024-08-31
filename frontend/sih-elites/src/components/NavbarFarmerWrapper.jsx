import React from "react";
import NavbarFarmer from "./NavbarFarmer";
import { Outlet } from "react-router-dom";

const NavbarFarmerWrapper = () => {
  return (
    <div>
      <NavbarFarmer />
      <Outlet />
    </div>
  );
};

export default NavbarFarmerWrapper;
