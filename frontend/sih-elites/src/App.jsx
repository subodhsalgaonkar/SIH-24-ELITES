import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import BuyerProfile from "./components/BuyerProfile";
import BuyerProfileBuyerPov from "./components/BuyerProfileBuyerPOV";
import Marketplace from "./components/Marketplace";
import ProductDetailPage from "./components/ProductDetailPage";
import FarmersProfilePage from "./components/FarmersProfilePage";
import NavbarFarmerWrapper from "./components/NavbarFarmerWrapper";
import NavbarBuyerWrapper from "./components/NavbarBuyerWrapper";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import ContractDetailsPage from "./pages/ContractDetailsPage";
import ContractForm from "./components/ContractForm";
import RoleSelection from "./components/RoleSelection";
import FarmerSignup from "./components/FarmerSignup";
import BusinessSignup from "./components/BusinessSignup";
import FarmersPPFarmerPOV from "./components/FarmersPPFarmerPOV";
import Notifications from "./components/Notifications";
import NotificationsF from "./components/NotificationsF";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes that use NavbarBuyer */}
        <Route element={<NavbarBuyerWrapper />}>
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/buyer" element={<BuyerDashboard />} />
          <Route
            path="/buyerprofilebuyerpov"
            element={<BuyerProfileBuyerPov />}
          />
          <Route path="/crop/:id" element={<ProductDetailPage />} />
          <Route path="/farmersprofile" element={<FarmersProfilePage />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>

        {/* Routes that use NavbarFarmer */}
        <Route path="/" element={<RoleSelection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<NavbarFarmerWrapper />}>
          <Route path="/farmer-signup/*" element={<FarmerSignup />} />
          <Route path="/business-signup/*" element={<BusinessSignup />} />
          <Route path="/buyerprofile" element={<BuyerProfile />} />
          <Route path="/create-contract" element={<ContractForm />} />
          <Route path="/seller" element={<SellerDashboard />} />
          <Route path="/contract/:id" element={<ContractDetailsPage />} />
          <Route path="/farmersppfarmerpov" element={<FarmersPPFarmerPOV />} />
          <Route path="/notificationsf" element={<NotificationsF />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
