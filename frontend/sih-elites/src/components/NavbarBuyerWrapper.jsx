import React from "react";
import NavbarBuyer from "./NavbarBuyer";
import { Outlet } from "react-router-dom";

const NavbarBuyerWrapper = () => {
  return (
    <div>
      <NavbarBuyer />
      <Outlet />
    </div>
  );
};

export default NavbarBuyerWrapper;
