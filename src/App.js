import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navigation from './components/Navigation';
import BannerSlider from './components/BannerSlider';
import Slider from './components/Slider'; // 👈 New Slider Component
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
      <div className="font-poppins">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
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
                  <AboutUs />
                  <WhatWeDo />
                  <Testimonials />
                  <Gallery />
                  <Blog />

                  {/* 🔥 Featured Slider — sabse last me */}
                  <Slider title="🔥Our Shops" />
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
      </div>
    </BrowserRouter>
  );
};

export default App;
