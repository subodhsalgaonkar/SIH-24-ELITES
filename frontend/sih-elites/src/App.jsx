import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";
// import "./App.css";
import BuyerProfile from "./components/BuyerProfile";
import BuyerProfileBuyerPov from "./components/BuyerProfileBuyerPOV";
import LandingPage from "./components/LandingPage";
import ItemInfo from "./components/ItemInfo";
import NavbarFarmer from "./components/NavbarFarmer";
import NavbarBuyer from "./components/NavbarBuyer";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import ContractDetailsPage from "./pages/ContractDetailsPage";
import FarmersProfilePage from "./components/FarmersProfilePage";
import ContractForm from "./components/ContractForm";
import Marketplace from "./components/Marketplace";
import ProductDetailPage from "./components/ProductDetailPage";
import RoleSelection from "./components/RoleSelection";
import FarmerSignup from "./components/FarmerSignup";
import BusinessSignup from "./components/BusinessSignup";

import FarmersPPFarmerPOV from "./components/FarmersPPFarmerPOV";

function App() {
  const [count, setCount] = useState(0);
  const userRole = "buyer";

  return (
    <Router>
      <NavbarBuyer />
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/farmer-signup/*" element={<FarmerSignup />} />
        <Route path="/business-signup/*" element={<BusinessSignup />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        {/* <Route path="/Marketplace" element={<Marketplace />} /> */}{" "}
        {/* Ihte pan 2 marketplaces*/}
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/contract/:id" element={<ContractDetailsPage />} />
        {/* <Route path="/" element={<LandingPage />} />                      PAGAL:   path taktana bagha tari eakdi 2 home aahe  */}
        <Route path="/create-contract" element={<ContractForm />} />
        <Route path="/buyerprofile" element={<BuyerProfile />} />
        <Route
          path="/buyerprofilebuyerpov"
          element={<BuyerProfileBuyerPov />}
        />
        {/* <Route path="/ItemInfo" element={<ItemInfo />} /> */}
        {/* <Route path="/FarmersPP" element={<FarmersProfilePage />} /> */}
        <Route path="/FarmersPPFarmerPOV" element={<FarmersPPFarmerPOV />} />
        {/*Shintre problem aahe yaat kahi tari mala edit option not visible */}
        <Route path="/crop/:id" element={<ProductDetailPage />} />
        <Route
          path="/farmer/:farmerName"
          element={<FarmersProfilePage />}
        />{" "}
        {/* Route for farmer profile */}
        {/* <Route path="/conversation/:farmerName" element={<ConversationPage />} />
        <Route path="/farmer/:farmerName" element={<FarmerProfile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
