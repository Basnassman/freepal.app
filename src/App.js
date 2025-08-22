// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// استيراد الصفحات
import Home from "./Home";
import buy from "./buy";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<buy />} />
        {/* يمكن إضافة صفحة الفريق لاحقاً */}
      </Routes>
    </Router>
  );
}

export default App;
