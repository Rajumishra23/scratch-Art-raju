import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navigation from './components/Navigation';
import BannerSlider from './components/BannerSlider';
import Slider from './components/Slider'; 
import Footer from './components/Footer';
import Blog from './components/Blog';
import Artwork from './components/Artwork';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import Shop from './pages/Shop';
import Gallery from './components/Gallery';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import OrderForm from './pages/OrderForm';
import OrderPortrait from './pages/OrderPortrait';

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-poppins relative">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            {/* ✅ Home Route */}
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <BannerSlider />
                  <Artwork />
                  <Slider title="Our Shops" />
                  <AboutUs />
                  <WhatWeDo />
                  <Testimonials />
                  <Gallery />
                  <Blog />
                </motion.div>
              }
            />

            {/* ✅ Shop Route */}
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

            {/* ✅ Gallery Page */}
            <Route
              path="/gallery"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GalleryPage />
                </motion.div>
              }
            />

            {/* ✅ Blog */}
            <Route path="/blog" element={<motion.div><Blog /></motion.div>} />

            {/* ✅ About Us */}
            <Route path="/about-us" element={<motion.div><AboutPage /></motion.div>} />

            {/* ✅ Order Form */}
            <Route path="/contacts" element={<motion.div><OrderForm /></motion.div>} />

            {/* ✅ Order Portrait */}
            <Route path="/order-portrait" element={<motion.div><OrderPortrait /></motion.div>} />
          </Routes>
        </AnimatePresence>

        <Footer />

        {/* 📱 WhatsApp Floating Icon */}
        <a
          href="https://wa.me/917503602684?text=Hello%20Portrait%20Maker."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hello Portrait Maker"
          className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white 
                     p-4 rounded-full shadow-xl transition-all duration-300 ease-in-out 
                     hover:scale-105 flex items-center justify-center 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-7 h-7"
            role="img"
            aria-hidden="true"
          >
            <title>WhatsApp Icon</title>
            <path d="M16 0C7.163 0 0 7.163 0 16a15.89 15.89 0 002.188 8.063L0 32l8.125-2.125A15.89 15.89 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.5c-3.625 0-6.938-1.125-9.75-3.063l-.688-.438-4.875 1.25 1.313-4.75-.438-.75A13.49 13.49 0 012.5 16c0-7.438 6.063-13.5 13.5-13.5S29.5 8.563 29.5 16 23.438 29.5 16 29.5zm7.063-9.25c-.375-.188-2.25-1.125-2.625-1.25-.375-.125-.625-.188-.875.188s-1 1.25-1.25 1.5c-.25.25-.438.25-.813.063-.375-.188-1.625-.625-3.125-2-1.125-1-2-2.25-2.25-2.625-.25-.375-.025-.563.188-.75.188-.188.375-.438.563-.625.188-.188.25-.313.375-.5.125-.188.063-.375 0-.563-.063-.188-.875-2.125-1.188-2.875-.313-.75-.625-.625-.875-.625h-.75c-.25 0-.625.063-.938.438s-1.25 1.25-1.25 3.063c0 1.813 1.313 3.563 1.5 3.813.188.25 2.5 3.875 6.063 5.438.85.375 1.513.6 2.025.75.85.25 1.625.213 2.25.125.688-.125 2.125-.875 2.438-1.75.313-.875.313-1.625.25-1.75-.063-.125-.25-.188-.625-.375z" />
          </svg>
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
