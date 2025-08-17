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
    <section id="frames" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-12">

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
            className="text-4xl font-bold text-white font-serif mb-4"
          >
            FRAMES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-xl mx-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
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
              className={`px-4 py-2 rounded-full border ${
                selected === cat
                  ? "bg-[#e63946] text-white border-[#e63946]"
                  : "bg-transparent text-gray-300 border-gray-500"
              } transition duration-300`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Frame Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredFrames.map((frame) => (
            <motion.div
              key={frame.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={frame.image}
                alt={`Frame ${frame.id}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 italic max-w-3xl mx-auto pt-10"
        >
          “The secret to so many artists living so long is that every painting is a new adventure. So, you see, they're always looking ahead to something new and exciting. The secret is not to look back.”
        </motion.p>
      </div>
    </section>
  );
}