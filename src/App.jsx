// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

// صفحاتك
import Home from "./Home";
import buy from "./buy";             // انتبه للحروف! طابق اسم الملف تمامًا
import Whitepaper from "./whitepaper";
import Airdrop from "./airdrop";

function App() {
  return (
      <Router>
            <Navbar />
                  <Routes>
                          <Route path="/" element={<Home />} />
                                  <Route path="/buy" element={<buy />} />
                                          <Route path="/whitepaper" element={<whitepaper />} />
                                                  <Route path="/airdrop" element={<airdrop />} />
                                                        </Routes>
                                                            </Router>
                                                              );
                                                              }

                                                              export default App;