// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// استيراد الصفحات
import Home from "./Home";
import buy from "./buy";
import whitepaper from "./whitepaper";
import airdrop from "./airdrop";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/whitepaper" element={<whitepaper />} />
        <Route path="/airdrop" element={<airdrop />} />
        {/* يمكن إضافة صفحة الفريق لاحقاً */}
      </Routes>
    </Router>
  );
}

export default App;
