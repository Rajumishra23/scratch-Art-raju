import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Link import kiya

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
            <img
              src="Logo.webp" 
              alt="Logo"
              className=" h-[120px] w-[120px] object-contain"
            />
            Portraits Maker & Sketch Artist Studio
          </h2>

          <p className="text-sm leading-6 text-gray-200">
            Order 101% Handmade Portrait Pantings
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            {[
              { name: "HOME", path: "/" },
              { name: "Order Portrait", path: "/order-portrait" },
              { name: "Order Form", path: "/contacts" },
              { name: "AboutUs", path: "/about-us" },
              { name: "Gallery", path: "/gallery" },
              { name: "Shop", path: "/shop" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="hover:text-yellow-400 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-200">
            {["Custom Art", "Workshops", "Blog", "Support"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-yellow-400 relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg text-white">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400"><FaPinterestP /></a>
          </div>
          <div className="mt-6">
            <input
              type="email"
              placeholder="Subscribe to newsletter"
              className="w-full px-3 py-2 bg-white text-black placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </motion.div>
      </div>
      <div className="mt-10 text-center text-sm  pt-4 text-gray-200">
        © {new Date().getFullYear()} ScratchArt. All rights reserved.
        <h2 className="mt-1">Designed by Bigdesign Software Technologies</h2>
      </div>
    </footer>
  );
};

export default Footer;