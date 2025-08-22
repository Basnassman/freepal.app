import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";  // استدعاء النافبار

// الصفحات
import Home from "./Home";
import Buy from "./Buy";
import Whitepaper from "./Whitepaper";
import Airdrop from "./Airdrop";

function App() {
  return (
      <Router>
            <div className="App">
                    <Navbar />   {/* النافبار يطلع دائمًا فوق */}

                            <Routes>
                                      <Route path="/" element={<Home />} />
                                                <Route path="/buy" element={<Buy />} />
                                                          <Route path="/whitepaper" element={<Whitepaper />} />
                                                                    <Route path="/airdrop" element={<Airdrop />} />
                                                                            </Routes>
                                                                                  </div>
                                                                                      </Router>
                                                                                        );
                                                                                        }

                                                                                        export default App;