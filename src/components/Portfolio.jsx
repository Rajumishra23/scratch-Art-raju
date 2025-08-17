import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/portfolio/1.jpg";
import img2 from "../assets/portfolio/2.jpg";
import img3 from "../assets/portfolio/3.jpg";
import img4 from "../assets/portfolio/4.jpg";
import img5 from "../assets/portfolio/5.jpg";
import img6 from "../assets/portfolio/6.jpg";

export default function Portfolio() {
  const gallery = [
    { title: "Master Piece", img: img1, category: "People" },
    { title: "Dark Beauty", img: img2, category: "Nature" },
    { title: "Wild Life", img: img3, category: "Nature" },
    { title: "Proposing Love", img: img4, category: "People" },
    { title: "Mountain Ride", img: img5, category: "Adventure" },
    { title: "River Ride", img: img6, category: "Adventure" },
  ];

  const categories = ["All", "Nature", "People", "Adventure"];
  const [selected, setSelected] = useState("All");

  const filteredGallery =
    selected === "All"
      ? gallery
      : gallery.filter((item) => item.category === selected);

  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15 },
    }),
  };

  return (
    <section id="portfolio" className="py-20 bg-[#111] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading + Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl font-bold text-white uppercase tracking-wide mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-xl mx-auto text-[15px] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover the artistry in every detail — each creation tells a unique story
            woven with passion, skill, and imagination.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center gap-4 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full border ${
                selected === cat
                  ? "bg-[#b85c38] text-white border-[#b85c38]"
                  : "bg-transparent text-gray-300 border-gray-500"
              } transition duration-300`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGallery.map(({ title, img }, index) => (
            <motion.div
              key={title}
              custom={index}
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <motion.img
                src={img}
                alt={title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-lg font-semibold text-[#b85c38]">{title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
