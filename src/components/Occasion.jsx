import { motion } from "framer-motion";

export default function OccasionCTA() {
  const occasions = [
    {
      title: "Gift a Sketch",
      desc: "Make birthdays unforgettable with a hand-drawn portrait.",
      img: "birthday.png",
    },
    {
      title: "Anniversary Special",
      desc: "Celebrate love with a timeless sketch of your moments.",
      img: "aniversery.png",
    },
    {
      title: "Pet Portraits",
      desc: "Honor your furry friend with a custom sketch.",
      img: "dog.png",
    },
    {
      title: "Memorial Art",
      desc: "Preserve memories with heartfelt tribute sketches.",
      img: "memonial.png",
    },
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
        Occasions We Sketch For
      </motion.h2>

      {/* Animated Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
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
        {occasions.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1a1a1a] p-6 rounded-xl text-center border border-gray-700 hover:border-yellow-500 transition"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.desc}</p>

            {/* Animated Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition"
            >
              Order Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}