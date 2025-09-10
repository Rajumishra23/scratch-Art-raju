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

  return (
    <section className="bg-white pt-3 pb-6 border-b border-gray-200 font-sans">
      <div className="max-w-3xl mx-auto px-6 text-center text-gray-800">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-1xl md:text-2xl font-bold leading-tight tracking-tight mb-2"
        >
          Order Portrait Paintings & Custom{" "}
          <span className="text-orange-600">Pencil Sketches in India</span>
        </motion.h1>

        {/* Intro */}
        <motion.ul
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="list-disc pl-5 text-[13px] leading-tight tracking-tight text-left"
        >
          <li>
            Turn your precious photos into breathtaking art with{" "}
            <strong>Sketch Artist with Portrait Painting</strong>! Get 100%{" "}
            <strong>Handmade Pencil Sketches</strong>,{" "}
            <strong>Photo to Sketch</strong>, or{" "}
            <strong>Photo to Portrait Painting</strong> — perfect for gifting or
            home decor.
          </li>
          <li>
            Starting at just{" "}
            <span className="text-blue-600 font-semibold">₹1,199</span> with{" "}
            <span className="text-gray-900 font-semibold">
              free home delivery
            </span>{" "}
            across India.
          </li>
          <li>
            Based in{" "}
            <span className="font-semibold">
              Sarojini Nagar, Pilanji Village, Delhi
            </span>
            , visit our studio or book online.
          </li>
        </motion.ul>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="italic text-gray-700 text-[12px] leading-tight tracking-tight mt-2"
        >
          “<span className="font-semibold">Sketch Your Story:</span> Transform
          Ordinary Photos into Timeless Art!”
        </motion.p>

        {/* 🔹 Services, Pricing, Gift, Contact etc. */}
        {[
          {
            title: "Our Services",
            content:
              "Pencil Art Drawings, Charcoal Portraits, Blood Art Paintings, Custom Pet Portraits & more.",
          },
          {
            title: "Best Sketch Artist in India",
            content:
              "Our team of Pencil Sketch Artist Near Me, Drawing Artist Near Me, and Painting Artist Near Me creates stunning Pencil Art Drawings, Charcoal Portraits, and Sketch Art with exceptional skill.",
          },
          {
            title: "Custom Creations",
            content:
              "From Pencil Sketch Near Me, Portrait Drawing, Custom Painting, Photo to Painting, to Custom Pet Portrait from Photo — we bring your story to life.",
          },
          {
            title: "Unique Artworks",
            content:
              "Discover Blood Art Painting Near Me and Blood Painting Art Near Me by our expert Blood Artist for bold, distinctive pieces.",
          },
        ].map((item, i) => (
          <motion.ul
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="list-disc pl-5 text-[13px] leading-tight tracking-tight text-left mt-2"
          >
            <li>
              <strong>{item.title}:</strong> {item.content}
            </li>
          </motion.ul>
        ))}

        {/* 🔹 Image Slider with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          ref={sliderRef}
          className="mt-4 w-full h-64 flex overflow-x-hidden overflow-y-hidden rounded-lg scroll-smooth"
        >
          <div className="min-w-full flex items-center justify-center">
            <motion.img
              src="front.webp"
              alt="Image 1"
              className="w-[300px] h-[200px] object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="min-w-full flex items-center justify-center">
            <motion.img
              src="front2.webp"
              alt="Image 2"
              className="w-[300px] h-[200px] object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="min-w-full flex items-center justify-center">
            <motion.img
              src="front3.webp"
              alt="Image 3"
              className="w-[300px] h-[200px] object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
