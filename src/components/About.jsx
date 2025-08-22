import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-white text-black py-20">
      {/* Decorative Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] via-[#eab308] to-[#1e3a8a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <motion.img
              src="girl.png"
              alt="CKARTISTIC Portrait"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg shadow-lg object-cover w-full h-full max-h-[500px]"
            />
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Welcome Message */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-serif text-[#1e3a8a] mb-2"
              >
                Welcome to Scratch Art
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700"
              >
                Where memories come to life on paper. Our expert artists specialize in transforming your cherished photographs into timeless sketches, adding a touch of artistic elegance to your precious moments.
              </motion.p>
            </div>

            {/* What We Offer */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-serif text-[#1e3a8a] mb-2"
              >
                What We Offer
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700"
              >
                From watercolor portraits to coffee paintings, pet sketches to abstract art — every piece is 100% hand-painted using premium imported materials. We craft emotion into every stroke.
              </motion.p>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-serif text-[#1e3a8a] mb-2"
              >
                Stay Connected
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-4"
              >
                Get updates on new sketch drops, exhibitions, and exclusive offers — straight to your inbox.
              </motion.p>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white border border-gray-300 text-black px-4 py-2 rounded w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1e3a8a] hover:bg-[#172c6e] text-white px-4 py-2 rounded font-semibold"
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