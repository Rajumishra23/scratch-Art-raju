import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      if (slider) {
        scrollAmount += slider.offsetWidth;

        if (scrollAmount >= slider.scrollWidth) {
          scrollAmount = 0;
        }

        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-white pt-3 pb-6 border-b border-gray-200 font-sans">

      {/* Decorative Left Element */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-20 hidden md:block"
      >
        <img src="brush-left.svg" alt="Brush Stroke" className="w-20 h-40 opacity-40" />
      </motion.div>

      {/* Decorative Right Element */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-32 hidden md:block"
      >
        <img src="brush-right.svg" alt="Brush Stroke" className="w-20 h-40 opacity-40" />
      </motion.div>

      {/* Content Box */}
      <div className="relative flex justify-center items-center py-6 px-4">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center text-gray-800 space-y-3 border-2 border-orange-600 rounded-lg shadow-lg bg-white">

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl font-bold leading-snug tracking-tight mb-1"
          >
            Order Portrait Paintings & Custom{" "}
            <span className="text-orange-600">Pencil Sketches in India</span>
          </motion.h1>

          {/* Intro */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="list-disc pl-5 text-[10px] sm:text-xs leading-snug tracking-tight text-left space-y-1"
          >
            <li>
              Turn your precious photos into breathtaking art with{" "}
              <strong>Sketch Artist with Portrait Painting</strong>! Get 100%{" "}
              <strong>Handmade Pencil Sketches</strong>,{" "}
              <strong>Photo to Sketch</strong>, or{" "}
              <strong>Photo to Portrait Painting</strong>.
            </li>
            <li>
              Starting at just{" "}
              <span className="text-blue-600 font-semibold">₹1,199</span> with{" "}
              <span className="text-gray-900 font-semibold">free home delivery</span> across India.
            </li>
            <li>
              Based in{" "}
              <span className="font-semibold">Sarojini Nagar, Pilanji Village, Delhi</span>.
            </li>
          </motion.ul>

          {/* Quote */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="italic text-gray-700 text-[10px] sm:text-[11px] leading-snug tracking-tight mt-1"
          >
            “<span className="font-semibold">Sketch Your Story:</span> Transform Ordinary Photos into Timeless Art!”
          </motion.p>

          {/* Services */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="list-disc pl-5 text-[10px] sm:text-xs leading-snug tracking-tight text-left mt-1 space-y-1"
          >
            <li><strong>Our Services:</strong> Pencil Art Drawings, Charcoal Portraits, Blood Art Paintings, Custom Pet Portraits & more.</li>
            <li><strong>Best Sketch Artist in India:</strong> Stunning Pencil Art Drawings, Charcoal Portraits, and Sketch Art with exceptional skill.</li>
            <li><strong>Custom Creations:</strong> Portrait Drawing, Custom Painting, Photo to Painting, Custom Pet Portraits.</li>
            <li><strong>Unique Artworks:</strong> Blood Art Painting and distinctive pieces by our expert Blood Artist.</li>
          </motion.ul>

          {/* Pricing */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="list-disc pl-5 text-[10px] sm:text-xs leading-snug tracking-tight text-left mt-1 space-y-1"
          >
            <li><strong>Affordable Pricing:</strong> Pencil Sketches from ₹1,299, Portrait Commissions from ₹5,000.</li>
            <li><strong>Fast Delivery:</strong> Same-day in Delhi, global shipping available.</li>
          </motion.ul>

          {/* Contact */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="list-disc pl-5 text-[10px] sm:text-xs leading-snug tracking-tight text-left mt-1"
          >
            <li><strong>Contact Us:</strong> <span className="text-green-600 font-semibold">+91 7503602684</span> via <span className="text-indigo-600 font-semibold">WhatsApp</span>.</li>
          </motion.ul>

          {/* Final Quote */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="italic text-gray-700 text-[10px] sm:text-[11px] leading-snug tracking-tight mt-1"
          >
            “<span className="font-semibold">Capturing Moments, Creating Masterpieces:</span> Your Photos Transformed into <span className="text-green-600 font-semibold">Stunning Sketches!</span>”
          </motion.p>
        </div>
      </div>

      {/* Image Slider */}
      <motion.div
        ref={sliderRef}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        className="mt-4 w-full h-56 sm:h-64 md:h-72 flex overflow-hidden rounded-lg scroll-smooth"
      >
        {["image.webp", "image1.webp", "All2.webp"].map((src, idx) => (
          <div key={idx} className="min-w-full flex items-center justify-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={src}
              alt={`Image ${idx + 1}`}
              className="w-[380px] sm:w-[440px] md:w-[520px] h-[290px] sm:h-[320px] md:h-[360px] object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;