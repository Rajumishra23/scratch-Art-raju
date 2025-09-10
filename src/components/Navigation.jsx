import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Nav (Center-Right) */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/order-portrait" className="hover:text-red-500 transition">Order Portrait</Link>
          <Link to="/contacts" className="hover:text-red-500 transition">Order Form</Link>
          <Link to="/about-us" className="hover:text-red-500 transition">About Us</Link>
          <Link to="/gallery" className="hover:text-red-500 transition">Gallery</Link>
          <Link to="/shop" className="hover:text-red-500 transition">Shop</Link>
        </nav>

        {/* Mobile Hamburger Button (Right) */}
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
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition">Home</Link>
            <Link to="/order-portrait" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition">Order Portrait</Link>
            <Link to="/contacts" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition">Order Form</Link>
            <Link to="/about-us" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition">About Us</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition">Gallery</Link>
            <Link to="/shop" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition">Shop</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
