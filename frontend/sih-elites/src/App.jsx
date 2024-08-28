import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";
import "./App.css";
import BuyerProfile from "./components/BuyerProfile";
import LandingPage from "./components/LandingPage";
import ItemInfo from "./components/ItemInfo";
import Navbar from './components/Navbar';
import BuyerDashboard from './pages/BuyerDashboard';
import SellerDashboard from './pages/SellerDashboard';
import ContractDetailsPage from './pages/ContractDetailsPage';

function App() {
  const [count, setCount] = useState(0);
  const userRole = 'buyer';

  return (
    <Router>
      <Navbar role={userRole} />
      <Routes>
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/contract/:id" element={<ContractDetailsPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/buyerprofile" element={<BuyerProfile />} />
        <Route path="/ItemInfo" element={<ItemInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
