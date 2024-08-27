import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";

import "./App.css";
import BuyerProfile from "./components/BuyerProfile";
import LandingPage from "./components/LandingPage";
import ItemInfo from "./components/ItemInfo";
import FarmersProfilePage from "./components/FarmersProfilePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/buyerprofile" element={<BuyerProfile />} />
        <Route path="/ItemInfo" element={<ItemInfo />} />
        <Route path="/FarmersPP" element={<FarmersProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
