import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  const navItems = [
    { path: "/", label: "Home", sectionId: "home" },
    { path: "/pages", label: "Pages" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Blog" },
    { path: "/shop", label: "Shop" },
    { path: "/contacts", label: "Contacts" },
  ];

  return (
    <header className="bg-black text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Scratch Art Branding - Left Aligned */}
        <div className="flex items-center mr-auto">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-white hover:text-blue-400 transition duration-300"
          >
            Scratch Art
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-2 px-4 hover:text-blue-400 transition duration-300 ${
                location.pathname === item.path
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : ''
              }`}
              onClick={() => item.sectionId && scrollToSection(item.sectionId)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Cart Icon with Badge */}
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.5 21a3 3 0 100-6 3 3 0 000 6zm9 0a3 3 0 100-6 3 3 0 000 6zM4 4h16l-2 7H6l-2-7zm0-2v1h20v-1H4z" />
            </svg>
          </div>

          {/* Search Icon */}
          <svg className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navigation;