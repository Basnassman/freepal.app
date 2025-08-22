// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// استيراد الصفحات
import Home from "./Home";
import Buy from "./Buy";
import Whitepaper from "./Whitepaper";
import Airdrop from "./Airdrop";
import HowToBuy from "./HowToBuy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/howtobuy" element={<HowToBuy />} />
        {/* يمكن إضافة صفحة الفريق لاحقاً */}
      </Routes>
    </Router>
  );
}

export default App;
