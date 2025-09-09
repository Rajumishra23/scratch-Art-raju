import { motion } from "framer-motion";

const artworks = [
  { title: "SHIVA PANTING", image: "shiva.webp" },
  { title: "KRISHNA PANTING", image: "krishna.webp" },
  { title: "Shreenathji Pichwai", image: "shree.webp" },
  { title: "BUDHA PANTING", image: "budha.webp" },
  { title: "Divine Ganesha", image: "ganesh.webp" },
  { title: "Krishna Flute", image: "krish.webp" },
  { title: "MADHUBANI PAINTING", image: "madhubani.webp" },
  { title: "Radha in Forest", image: "radha.webp" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#fefcf9] px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-8 text-gray-900 tracking-tight"
      >
        Gallery
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-700 mb-12 italic"
      >
        Explore our collection of stunning artworks and portraits👇
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {artworks.map((art, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-48 h-64 object-cover rounded-md border-4 border-[#e5e7eb] transition duration-300 hover:border-orange-400"
            />
            <h3 className="mt-4 text-sm text-gray-700 font-semibold text-center">
              {art.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </main>
  );
}