import { motion } from "framer-motion";

export default function GalleryGrid() {
  const images = [
    "G1.png",
    "G2.png",
    "G3.png",
    "G4.png",
    "G5.png",
    "G6.png",
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6 md:px-20">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl text-yellow-400 font-bold font-serif text-center mb-12"
      >
        Gallery
      </motion.h2>

      {/* Animated Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-lg border border-gray-700 hover:border-yellow-500 transition"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={src}
              alt={`Sketch ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}