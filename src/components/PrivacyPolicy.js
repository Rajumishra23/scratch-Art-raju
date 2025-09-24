import React from "react";
import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
<section className="w-full bg-black text-white py-10 md:py-14"> 
      {/* 👆 bg-gray-900 ki jagah bg-black use kiya */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Call to Action */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to Order?{" "}
          <NavLink
            to="/order-portrait"
            className="text-orange-400 hover:underline"
          >
            order portrait now
          </NavLink>
        </h2>

        {/* Share Prompt */}
        <p className="text-green-400 text-sm md:text-base mb-8">
          *If you like this page, Please Share with Your Friends.
        </p>    

        {/* Contact Info */}
        <div className="space-y-2 text-sm md:text-base">
          <p>
            Email:{" "}
            <a
              href="mailto:support@idraftstore.com"
              className="text-orange-400 hover:underline"
            >
              India8833@gmail.com
            </a>
          </p>
          <p>
            Call:{" "}
            <a
              href="tel:7980830853"
              className="text-orange-400 hover:underline"
            >
              7980830853
            </a>
          </p>
          <p>
            Whatsapp Us:{" "}
            <span className="text-orange-400">+91-7503602684</span>
          </p>
          <p>
            GSTIN:{" "}
            <span className="text-orange-400">09BGQPM6282B2ZX</span>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm md:text-base">
          <NavLink to="/" className="hover:text-orange-400">
            Home
          </NavLink>
          <NavLink to="/order-portrait" className="hover:text-orange-400">
            Order Sketch
          </NavLink>
          <NavLink to="/mail-us" className="hover:text-orange-400">
            Mail Us
          </NavLink>
          <NavLink to="/whatsapp" className="hover:text-orange-400">
            Whatsapp Us
          </NavLink>
          <NavLink to="/refund-policy" className="hover:text-orange-400">
            Refund Policy
          </NavLink>
          <NavLink to="/terms" className="hover:text-orange-400">
            Terms & Conditions
          </NavLink>
          <NavLink to="/privacy-policy" className="hover:text-orange-400">
            Privacy Policy
          </NavLink>
          <NavLink to="/about-us" className="hover:text-orange-400">
            About Us
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;