import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PortraitTypes = () => {
  const portraits = [
    { id: 1, src: "G1.png", alt: "Blue Scribble Sketch" },
    { id: 2, src: "G2.png", alt: "Orange Scribble Sketch" },
    { id: 3, src: "G3.png", alt: "Purple Scribble Sketch" },
    { id: 4, src: "G4.png", alt: "Red Scribble Sketch" },
    { id: 5, src: "G1.png", alt: "Green Scribble Sketch" },
    { id: 6, src: "G6.png", alt: "Pink Scribble Sketch" },
  ];

  const happyClients = [
    { id: 1, src: "Testimonial1.webp", alt: "Client Portrait 1" },
    { id: 2, src: "testimonial2.webp", alt: "Client Portrait 2" },
    { id: 3, src: "testimonial3.webp", alt: "Client Portrait 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === happyClients.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [happyClients.length]);

  return (
    <div>
      {/* 🎨 Portrait Section */}
      <section className="bg-[#fefcf9] py-16 text-gray-800">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              <span className="text-orange-500">Order Portrait Paintings</span>{" "}
              & Custom Pencil Sketches in India
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto italic mb-6">
              100% Handmade · Photo to Sketch or Painting · Free Home Delivery ·
              Starting from{" "}
              <strong className="text-green-500">₹1199/-</strong> only
            </p>

            <ul className="text-gray-800 text-sm md:text-base max-w-2xl mx-auto space-y-2 list-disc list-inside text-left sm:text-center">
              <li>
                <strong>A Perfect, Unique and Memorable gift</strong> for your
                Loved-ones.
              </li>
              <li>
                Team of <strong>Best Sketch Artist</strong>,{" "}
                <strong>Best Portrait Drawing Artist</strong> and{" "}
                <strong>Best Painting Artist</strong> in India.
              </li>
              <li>
                Order <strong>Pencil Sketch</strong>,{" "}
                <strong>Portrait Drawing</strong>,{" "}
                <strong>Custom Painting</strong>,{" "}
                <strong>Photo to Painting</strong>,{" "}
                <strong>Custom Pet Portrait</strong> from photo.
              </li>
            </ul>
          </motion.div>

          {/* Portrait Grid */}
          <h1 className="text-center text-2xl md:text-3xl font-bold">
            <span className="text-black">Portrait</span>{" "}
            <span className="text-orange-500">Type</span>
          </h1>

          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {portraits.map((portrait, index) => (
              <motion.div
                key={portrait.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={portrait.src}
                  alt={portrait.alt}
                  className="w-40 h-56 md:w-48 md:h-64 object-cover rounded-md border-4 border-[#e5e7eb] transition duration-300 hover:border-orange-400"
                />
                <p className="mt-4 text-sm text-gray-600 font-medium text-center">
                  Scribble Pen Sketch · Custom Colors
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 Happy Clients Section */}
      <section className="bg-white py-16 text-gray-800">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight">
              <span className="text-black">Happy Client</span>{" "}
              <span className="text-orange-500">= Our Goal</span>
            </h2>
          </motion.div>

          {/* Auto Sliding Clients Work */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto overflow-hidden"
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {happyClients.map((client) => (
                <div
                  key={client.id}
                  className="min-w-full flex flex-col items-center"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="w-56 h-56 md:w-[300px] md:h-[300px] object-cover rounded-md border-4 border-[#e5e7eb] transition duration-300 hover:border-orange-400"
                  />
                  <p className="mt-4 text-sm text-gray-600 font-medium">
                    Client Artwork · Custom Sketch
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortraitTypes;
