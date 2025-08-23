import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import BannerSlider from './components/BannerSlider';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Frames from './components/Frames';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Artstyle from './components/Artstyle';
import Artwork from './components/Artwork';
import Pricing from './components/Pricing';
import Occasion from './components/Occasion';
import Gallery from './components/Gallery';




import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';

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
                
          <BannerSlider />
          <Artwork/>
          <AboutUs/>
          <WhatWeDo/>
           <Testimonials />
          <Artstyle/>
          <Pricing/>
          <Occasion/>
          <Gallery/>
          <Services />
          <Portfolio />
          <Stats />
          <Blog/>
          <About/>
          
          
          

                  
                  
                  
                </motion.div>
              }
            />
            <Route
              path="/pages"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  
                </motion.div>
              }
            />
            <Route
              path="/gallery"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  
                </motion.div>
              }
            />
            <Route
              path="/blog"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Blog />
                </motion.div>
              }
            />
            <Route
              path="/shop"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
              
                </motion.div>
              }
            />
            <Route
              path="/contacts"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;