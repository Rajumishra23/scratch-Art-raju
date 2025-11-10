import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DemoSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["image.webp", "image1.webp", "All2.webp"];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        if (slider) {
          slider.scrollTo({
            left: next * slider.offsetWidth,
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual slide navigation
  const goTo = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;
    setCurrentIndex(index);
    slider.scrollTo({ left: index * slider.offsetWidth, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden"> {/* ✅ Prevents vertical scrollbars */}
      {/* 🔹 Image Slider */}
      <motion.div
        ref={sliderRef}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="mt-4 w-full h-56 sm:h-64 md:h-72 flex overflow-x-hidden overflow-y-hidden rounded-lg scroll-smooth"
      >
        {images.map((src, idx) => (
          <div key={idx} className="min-w-full flex items-center justify-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={src}
              alt={`Image ${idx + 1}`}
              className="w-[380px] sm:w-[440px] md:w-[520px] h-[300px] sm:h-[320px] md:h-[360px] object-cover rounded"
            />
          </div>
        ))}
      </motion.div>

      {/* 🔹 Dots Navigation */}
      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-2 h-2 rounded-full transition ${
              idx === currentIndex ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
};

export default DemoSlider;
