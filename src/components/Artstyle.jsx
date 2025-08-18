import { motion } from "framer-motion";
import Artist from "../assets/portfolio/artist.jpg"; // ✅ Update path as per your folder structure

export default function PencilSketchNearMe() {
  return (
    <section className="py-16 bg-black">
      {/* Animated Subheading */}
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm uppercase tracking-wide text-yellow-400 font-bold mb-2"
      >
        Sketch Artist Near Me
      </motion.h4>

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-serif text-white font-bold mb-10"
      >
        Pencil Sketch Artist Near Me
      </motion.h2>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Left Image Section */}
        <div className="relative">
          <motion.img
            src={Artist}
            alt="Pencil Sketch Artist Near Me"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-lg shadow-lg border border-gray-200"
          />
        </div>

        {/* Right Text Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border border-blue-500 p-6 rounded-lg shadow-md bg-white"
        >
          <h3 className="text-xl font-serif font-bold mb-4">
            Pencil Artist Near Me – Sketch Artist Near Me
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Hello friends! I welcome all of you to my website Sketch Artist. I am a commission portrait artist with many years of experience. I have created many celebrity and live sketch portraits with great detail and passion.
          </p>

          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            READ MORE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}