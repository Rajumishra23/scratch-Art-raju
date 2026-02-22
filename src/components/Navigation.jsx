import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/order-portrait", label: "Order Portrait" },
    { to: "/contacts", label: "Order Form" },
    { to: "/about-us", label: "About Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/shop", label: "Shop" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white border-b-[2px] border-red-500 shadow-md fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 hover:no-underline focus:no-underline"
        >
          <div className="relative h-12 w-12 overflow-visible">
            <img
              src="Logo.webp"
              alt="Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120px] w-[120px] object-contain scale-125"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-black font-serif tracking-wide">
              Portraits Maker & Sketch Artist Studio
            </span>
            <span className="text-sm text-gray-600">
              Order 101% Handmade Portrait Pantings
            </span>
          </div>
        </Link>

       {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4 text-sm font-medium text-gray-700">
      {navLinks.map((link, i) => (
      <NavLink
      key={i}
      to={link.to}
      end={link.end ?? false}
      className={({ isActive }) =>
        `px-3 py-1 border border-gray-400 rounded-md transition 
         hover:text-red-500 hover:border-red-500 
         ${isActive ? "text-red-500 border-red-500 font-semibold" : ""}`
      }
    >
      {link.label}
    </NavLink>
  ))}
</nav>
        {/* Mobile Hamburger Button */}
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with smooth slide */}
      <div
        ref={menuRef}
        className={`overflow-hidden transition-all duration-300 md:hidden bg-white border-t border-gray-200 shadow-sm ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 space-y-3 text-sm font-medium text-gray-700">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              end={link.end ?? false}
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
    </header>
  );
};

export default Navbar;
