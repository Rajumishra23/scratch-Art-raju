import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import header4 from "../assets/portfolio/header4.jpg";
import header5 from "../assets/portfolio/header5.jpg";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slides = [
    { image: header4 },
    { image: header5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === currentSlide && (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center filter brightness-110"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>

              {/* Artistic Text */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-white text-4xl md:text-6xl tracking-wide text-center px-4"
                  style={{ fontFamily: '"Great Vibes", cursive' }}
                >
                  {slide.text}
                </motion.h2>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;