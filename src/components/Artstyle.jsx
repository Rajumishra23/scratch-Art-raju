import { motion } from "framer-motion";
import Artist from "../assets/portfolio/artist.jpg"; // ✅ Update path as per your folder structure

export default function PencilSketchNearMe() {
  return (
    <section className="py-16 bg-[#f3f4f6]">
      {/* Animated Subheading */}
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-sm uppercase tracking-wide text-[#1e3a8a] font-bold mb-2"
      >
        Sketch Artist Near Me
      </motion.h4>

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-serif text-black font-bold mb-10"
      >
        Pencil Sketch Artist Near Me
      </motion.h2>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch px-4">
        {/* Left Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-full"
        >
          <img
            src={Artist}
            alt="Pencil Sketch Artist Near Me"
            className="rounded-lg shadow-lg border border-gray-300 w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="h-full flex flex-col justify-between border border-gray-300 p-6 rounded-lg shadow-md bg-white"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h3 className="text-xl font-serif font-bold mb-4 text-[#1e3a8a]">
              Pencil Artist Near Me – Sketch Artist Near Me
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Hello friends! I welcome all of you to my website Scratch Art. I am a commission portrait artist with many years of experience. I have created many celebrity and live sketch portraits with great detail and passion.
            </p>
          </motion.div>

          {/* Animated Button */}
          <motion.button
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1e3a8a] text-white px-5 py-2 rounded hover:bg-[#172c6e] transition self-start"
          >
            READ MORE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}