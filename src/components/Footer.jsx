import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-black via-gray-900 to-black text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            ScratchArt
          </h2>
          <p className="text-sm leading-6">
            ScratchArt is your creative hub for unique scratch paintings and premium art supplies.
            Discover, create, and share your imagination with the world.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["HOME", "PAGE", "GALLERY", "BLOG", "SHORTCODE", "SHOP", "CONTACT"].map((item, i) => (
              <li key={i}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-[#b85c38] relative group">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#b85c38] transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            {["Custom Art", "Workshops", "Blog", "Support"].map((item, i) => (
              <li key={i}>
                <a href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-[#b85c38] relative group">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#b85c38] transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media + Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-[#b85c38]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#b85c38]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#b85c38]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#b85c38]"><FaPinterestP /></a>
          </div>

          {/* Newsletter Input */}
          <div className="mt-6">
            <input
              type="email"
              placeholder="Subscribe to newsletter"
              className="w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b85c38]"
            />
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ScratchArt. All rights reserved.
        <h2>Designed by Bigdesign software technologies</h2>
      </div>
    </footer>
  );
};

export default Footer;