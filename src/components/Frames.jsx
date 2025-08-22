import React, { useState } from "react";
import { motion } from "framer-motion";
import img6 from "../assets/portfolio/6.jpg";
import img1 from "../assets/portfolio/1.jpg";
import img3 from "../assets/portfolio/3.jpg";

const frames = [
  { id: 1, type: "CERAMIC", image: img6 },
  { id: 2, type: "WOODEN", image: img1 },
  { id: 3, type: "PLASTIC", image: img3 },
];

const categories = ["ALL", "CERAMIC", "PLASTIC", "WOODEN", "STEEL"];

export default function FrameSection() {
  const [selected, setSelected] = useState("ALL");

  const filteredFrames =
    selected === "ALL" ? frames : frames.filter((f) => f.type === selected);

  return (
    <section id="frames" className="bg-[#fefcf9] text-black py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-serif text-yellow-600 font-bold tracking-wide uppercase mb-4"
          >
            Frames
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-xl mx-auto"
          >
            Explore our curated collection of handcrafted frames across materials and styles.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full border text-sm tracking-wide uppercase font-medium ${
                selected === cat
                  ? "bg-[#e63946] text-white border-[#e63946] shadow-md"
                  : "bg-transparent text-gray-500 border-gray-300 hover:border-black hover:text-black"
              } transition duration-300`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Frame Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredFrames.map((frame) => (
            <motion.div
              key={frame.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white border border-gray-200"
            >
              <img
                src={frame.image}
                alt={`Frame ${frame.id}`}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm uppercase tracking-wider py-2 px-4 font-semibold">
                {frame.type}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 italic max-w-3xl mx-auto pt-10 text-lg leading-relaxed"
        >
          “The secret to so many artists living so long is that every painting is a new adventure. So, you see, they're always looking ahead to something new and exciting. The secret is not to look back.”
        </motion.p>
      </div>
    </section>
  );
}