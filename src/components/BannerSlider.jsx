import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bg1 from '../assets/portfolio/bg1.webp';

const BannerSlider = () => {
  const banners = [
    {
      bg: bg1,
      subTitle: "LUXURY AGENCY",
      title: `Designed for you<br>Faster, easier and<br>Safer <span class='text-yellow-400'>than ever</span>`,
    },
    {
      bg: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/bg2.jpg",
      subTitle: "ABOUT US",
      title: `You push a button,<br>We do <span class='text-yellow-400'>the rest</span>`,
    },
    {
      bg: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/bg3.jpg",
      subTitle: "CREATIVE DESIGN",
      title: `Our ultimate reward -<br>Our customer's <span class='text-yellow-400'>smile</span>`,
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] scale-105"
        style={{ backgroundImage: `url(${banners[currentBanner].bg})` }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 bg-white/5 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent mix-blend-screen"></div>
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>

        {/* Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-20 text-white"
          >
            {/* Subtitle with Accent Line */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-[1px] bg-yellow-400"></div>
              <div className="uppercase text-sm tracking-widest text-yellow-400 font-semibold">
                {banners[currentBanner].subTitle}
              </div>
            </div>

            {/* Title */}
            <h2
              className="text-[1.25rem] md:text-[1.75rem] font-semibold leading-snug max-w-2xl"
              dangerouslySetInnerHTML={{ __html: banners[currentBanner].title }}
            ></h2>

            {/* Button */}
            <div className="mt-8">
              <div className="w-20 h-[1px] bg-yellow-400 mb-3"></div>
              <a
                href="#"
                className="inline-block border border-white text-white px-6 py-2 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-transform transform hover:scale-105 duration-300"
              >
                Work With Us
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentBanner
                ? 'bg-yellow-400 scale-125'
                : 'bg-gray-500 hover:bg-yellow-400'
            }`}
            onClick={() => setCurrentBanner(index)}
          ></button>
        ))}
      </div>

      {/* Social Links */}
      <div className="absolute bottom-6 left-6 z-20 space-y-2 text-white text-sm font-light tracking-wide">
        <a href="#" className="hover:text-yellow-400">📘 <span className="ml-1">Facebook</span></a>
        <a href="#" className="hover:text-yellow-400">🐦 <span className="ml-1">Twitter</span></a>
        <a href="#" className="hover:text-yellow-400">📸 <span className="ml-1">Instagram</span></a>
      </div>
    </section>
  );
};

export default BannerSlider;