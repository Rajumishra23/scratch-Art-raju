import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const menuItems = [
    {
      title: "Home",
      subItems: [
        { title: "Creative Studio", link: "#" },
        { title: "Design Agency", link: "/design-agency" },
        { title: "Photographer", link: "/photographer" },
        { title: "Product Page", link: "/product-page" },
      ],
    },
    {
      title: "Pages",
      subItems: [
        { title: "About Me", link: "/about-me" },
        { title: "Services", link: "/services" },
      ],
    },
    {
      title: "Gallery",
      subItems: [
        { title: "Carousel", link: "/gallery/carousel" },
        { title: "Grid Type 2", link: "/gallery/grid-type-2" },
      ],
    },
    {
      title: "Blog",
      subItems: [
        { title: "Blog Grid", link: "/blog-grid" },
        { title: "Blog Masonry", link: "/blog-masonry" },
      ],
    },
    {
      title: "Shop",
      subItems: [
        { title: "Cart", link: "/cart" },
        { title: "Product List", link: "/shop" },
      ],
    },
    {
      title: "Contacts",
      subItems: [
        { title: "Contacts", link: "/contacts" },
      ],
    },
  ];

  return (
    <header className="bg-white text-black sticky top-0 z-50 shadow-md">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    {/* Logo */}
    <Link to="/" className="text-2xl font-bold tracking-wide text-black font-serif">
      Scratch Art
    </Link>

    {/* Right Section */}
    <div className="flex items-center space-x-6">
      {/* Navigation */}
      <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="relative group"
            >
              <span className="cursor-pointer hover:text-yellow-400">{item.title}</span>
              {item.subItems && (
                <ul className="absolute hidden group-hover:block bg-white text-black border border-gray-200 p-4 rounded shadow-lg z-50 min-w-[200px] transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 group-hover:opacity-100 opacity-0">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.link} className="block py-2 hover:text-yellow-400">
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      {/* Cart + Search */}
      <div className="flex items-center space-x-4 cursor-pointer">
        <motion.div whileHover={{ scale: 1.2 }} className="relative">
          <span className="text-xl">🛒</span>
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
            {cartCount}
          </span>
        </motion.div>

        <motion.span whileHover={{ scale: 1.2 }} onClick={() => setIsSearchOpen(true)} className="text-xl">
          🔍
        </motion.span>
      </div>

      {/* Mobile Menu Icon */}
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="md:hidden cursor-pointer hover:text-yellow-400"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </motion.div>
    </div>
  </div>

  {/* Search Popup */}
  <AnimatePresence>
    {isSearchOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white p-6 rounded shadow-lg w-full max-w-md"
        >
          <button className="absolute top-2 right-2 text-black" onClick={() => setIsSearchOpen(false)}>
            ❌
          </button>
          <input
            type="text"
            placeholder="Type and hit enter"
            className="w-full p-3 border rounded text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</header>
  );
};

export default Navbar;