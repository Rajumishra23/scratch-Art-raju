import React, { useEffect } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#fefcf9] text-black-600 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 text-center"
        >
          About Us
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed text-center text-gray-700 mb-10"
        >
          At ScratchArt, we don’t just sketch — we capture emotions, memories, and stories. Whether it’s a charcoal portrait, blood art, or pet sketch, every stroke is crafted with precision and passion.
        </motion.p>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold mb-2 text-orange-600">🎯 Our Mission</h2>
            <p className="text-gray-700">
              To turn your photos into timeless hand-drawn art pieces that speak louder than words. We believe in art that connects, surprises, and stays with you forever.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold mb-2 text-orange-600">🌟 Our Vision</h2>
            <p className="text-gray-700">
              To become India’s most trusted name in custom portrait artistry — where every client feels seen, heard, and amazed by the final masterpiece.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;