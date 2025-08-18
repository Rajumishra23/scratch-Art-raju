import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-black text-white py-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-16">
        {/* Grid Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <motion.img
              src="girl.png"
              alt="ScratchArt"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg shadow-lg object-cover w-full h-full max-h-[500px]"
            />
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* A LITTLE INTRO */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-serif text-yellow-400 mb-2"
              >
                A LITTLE INTRO
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300"
              >
                We create timeless scratch art that blends emotion, elegance, and storytelling. Each piece is hand-crafted to evoke a personal connection.
              </motion.p>
            </div>

            {/* MY EXHIBITIONS */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-serif text-yellow-400 mb-2"
              >
                MY EXHIBITIONS
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300"
              >
                Our work has been featured in galleries across India, from intimate showcases to large-scale exhibitions celebrating modern sketch artistry.
              </motion.p>
            </div>

            {/* NEWSLETTER */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-serif text-yellow-400 mb-2"
              >
                NEWSLETTER
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-4"
              >
                Stay updated with our latest exhibitions, offers, and sketch drops.
              </motion.p>

              {/* Email Input + Button */}
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#2a2a2a] text-white px-4 py-2 rounded w-full placeholder-gray-400 focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded font-semibold"
                >
                  SUBSCRIBE
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}