// src/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Wallet, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

    const NavItem = ({ to, label }) => (
        <NavLink
              to={to}
                    className={({ isActive }) =>
                            `px-3 py-2 rounded-md text-sm font-medium ${
                                      isActive ? "text-yellow-400" : "text-gray-300 hover:text-white"
                                              }`
                                                    }
                                                          onClick={() => setOpen(false)}
                                                              >
                                                                    {label}
                                                                        </NavLink>
                                                                          );

                                                                            return (
                                                                                <header className="bg-gray-900 text-white sticky top-0 z-50">
                                                                                      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
                                                                                              {/* Logo / Brand */}
                                                                                                      <Link to="/" className="flex items-center gap-2">
                                                                                                                <Wallet className="w-5 h-5" />
                                                                                                                          <span className="font-bold">FreePal</span>
                                                                                                                                  </Link>

                                                                                                                                          {/* Desktop menu */}
                                                                                                                                                  <nav className="hidden md:flex items-center gap-2">
                                                                                                                                                            <NavItem to="/" label="Home" />
                                                                                                                                                                      <NavItem to="/buy" label="Buy" />
                                                                                                                                                                                <NavItem to="/whitepaper" label="Whitepaper" />
                                                                                                                                                                                          <NavItem to="/airdrop" label="Airdrop" />
                                                                                                                                                                                                  </nav>

                                                                                                                                                                                                          {/* Mobile toggle */}
                                                                                                                                                                                                                  <button
                                                                                                                                                                                                                            className="md:hidden p-2"
                                                                                                                                                                                                                                      onClick={() => setOpen((v) => !v)}
                                                                                                                                                                                                                                                aria-label="Toggle menu"
                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                  {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                                                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                      {/* Mobile menu */}
                                                                                                                                                                                                                                                                                            {open && (
                                                                                                                                                                                                                                                                                                    <div className="md:hidden border-t border-gray-800 bg-gray-900">
                                                                                                                                                                                                                                                                                                              <div className="px-4 py-2 flex flex-col">
                                                                                                                                                                                                                                                                                                                          <NavItem to="/" label="Home" />
                                                                                                                                                                                                                                                                                                                                      <NavItem to="/buy" label="Buy" />
                                                                                                                                                                                                                                                                                                                                                  <NavItem to="/whitepaper" label="Whitepaper" />
                                                                                                                                                                                                                                                                                                                                                              <NavItem to="/airdrop" label="Airdrop" />
                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                      )}
                                                                                                                                                                                                                                                                                                                                                                                          </header>
                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                            }