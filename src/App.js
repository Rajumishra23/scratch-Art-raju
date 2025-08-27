import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navigation from './components/Navigation';
import BannerSlider from './components/BannerSlider';
import Slider from './components/Slider'; 
import Footer from './components/Footer';
import Blog from './components/Blog';
import Artwork from './components/Artwork';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';

// 🛍️ Import Shop Page
import Shop from './pages/Shop';

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-poppins relative">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            {/* 🏠 Home Page */}
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* 🎨 Hero Slider */}
                  <BannerSlider />

                  {/* 📌 Main Sections */}
                  <Artwork />
                  <Slider title="🔥 Our Shops" />
                  <AboutUs />
                  <WhatWeDo />
                  <Testimonials />
                  <Gallery />
                  <Blog />
                </motion.div>
              }
            />

            {/* 🛒 Dedicated Shop Page */}
            <Route
              path="/shop"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Shop />
                </motion.div>
              }
            />

            {/* Other Routes */}
            <Route path="/pages" element={<motion.div />} />
            <Route path="/gallery" element={<motion.div />} />
            <Route path="/blog" element={<motion.div><Blog /></motion.div>} />
            <Route path="/contacts" element={<motion.div />} />
          </Routes>
        </AnimatePresence>

        {/* 🧭 Footer stays outside Routes */}
        <Footer />

        {/* 📱 WhatsApp Floating Icon */}
        <a
          href="https://wa.me/917503602684"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg animate-pulse transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.17 1.6 6L0 24l6.26-1.64a11.94 11.94 0 005.74 1.46c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22c-1.84 0-3.63-.5-5.2-1.44l-.37-.22-3.7.97.99-3.6-.24-.38A9.94 9.94 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.27-7.4l-1.54-.77c-.2-.1-.43-.03-.56.15l-.7.9a.42.42 0 01-.54.13c-.96-.48-1.7-1.22-2.18-2.18a.42.42 0 01.13-.54l.9-.7c.18-.13.25-.36.15-.56l-.77-1.54a.42.42 0 00-.56-.18c-.66.33-1.4.5-2.15.5a.42.42 0 00-.42.42c0 3.31 2.69 6 6 6a.42.42 0 00.42-.42c0-.75-.17-1.49-.5-2.15a.42.42 0 00-.18-.56z" />
          </svg>
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;