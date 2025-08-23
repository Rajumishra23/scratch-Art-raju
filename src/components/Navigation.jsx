import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white border-b-[3px] border-red-500 shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          {/* Logo container with fixed height */}
          <div className="relative h-12 w-12 overflow-visible">
            <img
              src="LC.png"
              alt="Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-25 w-25 object-contain"
            />
          </div>

          {/* Brand Text */}
          <div className="flex flex-col">
            <span className="text-xl font-bold text-black font-serif tracking-wide">
              Scratch Art
            </span>
            <span className="text-sm text-gray-600">
              Order 100% Handmade Portraits
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/order-portrait" className="hover:text-red-500 transition">Order Portrait</Link>
          <Link to="/order-form" className="hover:text-red-500 transition">Order Form</Link>
          <Link to="/about-us" className="hover:text-red-500 transition">About Us</Link>
          <Link to="/gallery" className="hover:text-red-500 transition">Gallery</Link>
          <Link to="/review" className="hover:text-red-500 transition">Review</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;