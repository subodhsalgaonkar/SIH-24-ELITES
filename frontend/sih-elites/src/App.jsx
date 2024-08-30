import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";
// import "./App.css";
import BuyerProfile from "./components/BuyerProfile";
import LandingPage from "./components/LandingPage";
import ItemInfo from "./components/ItemInfo";
import Navbar from "./components/Navbar";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import ContractDetailsPage from "./pages/ContractDetailsPage";
import FarmersProfilePage from "./components/FarmersProfilePage";
import ContractForm from "./components/ContractForm";
import Marketplace from "./components/Marketplace";
import ProductDetailPage from "./components/ProductDetailPage";
import RoleSelection from './components/RoleSelection';
import FarmerSignup from './components/FarmerSignup';
import BusinessSignup from './components/BusinessSignup';

import FarmersPPFarmerPOV from "./components/FarmersPPFarmerPOV";

function App() {
  const [count, setCount] = useState(0);
  const userRole = "buyer";

  return (
    <Router>
      <Navbar role={userRole} />
      <Routes>
       <Route path="/" element={<RoleSelection />} />
        <Route path="/farmer-signup/*" element={<FarmerSignup />} />
        <Route path="/business-signup/*" element={<BusinessSignup />} />
        <Route path="/Marketplace" element={<Marketplace/>}/>
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/contract/:id" element={<ContractDetailsPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-contract" element={<ContractForm />} />
        <Route path="/buyerprofile" element={<BuyerProfile />} />
        <Route path="/ItemInfo" element={<ItemInfo />} />
        <Route path="/FarmersPP" element={<FarmersProfilePage />} />
        <Route path="/FarmersPPFarmerPOV" element={<FarmersPPFarmerPOV />} />
        <Route path="/crop/:id" element={<ProductDetailPage />} />
        {/* <Route path="/conversation/:farmerName" element={<ConversationPage />} />
        <Route path="/farmer/:farmerName" element={<FarmerProfile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
