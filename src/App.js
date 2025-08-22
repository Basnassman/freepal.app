// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// استيراد الصفحات
import Home from "./Home";
import buy from "./buy";
import whitepaper from "./whitepaper";
import airdrop from "./airdrop";
import howToBuy from "./howToBuy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/whitepaper" element={<whitepaper />} />
        <Route path="/airdrop" element={<airdropirdrop />} />
        <Route path="/howtobuy" element={<howToBuy />} />
        {/* يمكن إضافة صفحة الفريق لاحقاً */}
      </Routes>
    </Router>
  );
}

export default App;
