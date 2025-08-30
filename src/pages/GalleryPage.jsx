import { motion } from "framer-motion";

const artworks = [
  {
    title: "SHIVA PANTING",
    image: "shiva.webp",
  },
  {
    title: "KRISHNA PANTING",
    image: "krishna.webp",
  },
  {
    title: "Shreenathji Pichwai",
    image: "shree.webp",
  },
  {
    title: "BUDHA PANTING",
    image: "budha.webp",
  },
  {
    title: "Divine Ganesha",
    image: "ganesh.webp",
  },
  {
    title: "Krishna Flute",
    image: "krish.webp",
  },
  {
    title: "MADHUBANI PAINTING",
    image: "madhubani.webp",
  },
  {
    title: "Radha in Forest",
    image: "radha.webp",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 text-gray-800"
      >
        Gallery
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-600 mb-12"
      >
        Explore our collection of stunning artworks and portraits👇
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {artworks.map((art, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                {art.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}