import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/portfolio/2.jpg";
import img4 from "../assets/portfolio/4.jpg";

export default function BlogShowcase() {
  return (
    <section id="blog" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* Blog Intro */}
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
            className="text-4xl font-bold font-serif text-yellow-400 mb-4"
          >
            BLOG
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

        {/* Acrylic Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:flex md:items-center md:justify-between gap-10"
        >
          <div className="md:w-1/2 space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-white"
            >
              ACRYLIC
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400"
            >
              Acrylic painting, technique in which pigments are mixed with hot, liquid wax. After all of the colours have been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              href="#gallery"
              className="inline-block mt-4 px-6 py-2 bg-[#e63946] text-white font-medium rounded-full hover:bg-[#ff6b6b] transition duration-300"
            >
              VIEW GALLERY
            </motion.a>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={img2}
              alt="Forest Path"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Encaustic Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:flex md:items-center md:justify-between gap-10 flex-row-reverse"
        >
          <div className="md:w-1/2 space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-white"
            >
              ENCAUSTIC
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400"
            >
              Encaustic painting involves using heated beeswax to which colored pigments are added. The liquid or paste is then applied to a surface—usually prepared wood, though canvas and other materials are also used.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              href="#gallery"
              className="inline-block mt-4 px-6 py-2 bg-[#e63946] text-white font-medium rounded-full hover:bg-[#ff6b6b] transition duration-300"
            >
              VIEW GALLERY
            </motion.a>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={img4}
              alt="Encaustic Art"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}