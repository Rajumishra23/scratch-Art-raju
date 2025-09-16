import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Common Nav Links
  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/order-portrait", label: "Order Portrait" },
    { to: "/contacts", label: "Order Form" },
    { to: "/about-us", label: "About Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/shop", label: "Shop" },
  ];

  return (
    <header className="bg-white border-b-[3px] border-red-500 shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Text (Left) */}
        <div className="flex items-center space-x-3">
          <div className="relative h-12 w-12 overflow-visible">
            <img
              src="Logo.webp"
              alt="Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         h-[120px] w-[120px] object-contain scale-125"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold text-black font-serif tracking-wide">
              Scratch Art
            </span>
            <span className="text-sm text-gray-600">
              Order 100% Handmade Portraits
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `transition hover:text-red-500 ${
                  isActive ? "text-red-500 font-semibold" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <nav className="flex flex-col px-4 py-3 space-y-3 text-sm font-medium text-gray-700">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.to}
                end={link.end}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition hover:text-red-500 ${
                    isActive ? "text-red-500 font-semibold" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
