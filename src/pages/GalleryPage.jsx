import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const sliderImages = [
   { src: "Gallery1.webp", title: "CRYSTAL PAINTINGS" },
    { src: "Gallery2.webp", title: "CANVAS PAINTINGS" },
    { src: "Gallery3.webp", title: "PREMIUM WALLPAPER" },
    { src: "Gallery4.webp", title: "HAND PAINTINGS" },
    { src: "Gallery5.webp", title: "GALLERY ART" },
    { src: "Gallery6.webp", title: "METAL ART" },
];

export default function GalleryPage() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Auto-scroll for slider
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1.2;
    const interval = 16;

    const scrollInterval = setInterval(() => {
      scrollAmount += speed;
      scrollContainer.scrollLeft = scrollAmount;

      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
    }, interval);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <main className="min-h-screen bg-[#fefcf9] px-6 py-12">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-8 text-gray-900 tracking-tight"
      >
        Gallery
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-700 mb-4 italic"
      >
        Explore our collection of stunning artworks and portraits👇
      </motion.p>

      {/* Slider Section */}
      <section className="py--1">
        {/* Subtext with arrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-gray-600 mb-6"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
            <ArrowDown className="w-6 h-6 text-[#1e3a8a] mt-2" />
          </motion.div>
        </motion.div>

        {/* Sliding Image Container */}
        <div
  ref={scrollRef}
  className="flex gap-8 overflow-hidden flex-nowrap max-w-6xl mx-auto"
  role="list"
>
  {sliderImages.concat(sliderImages).map((img, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center shrink-0"
      role="listitem"
      onClick={() => {
        window.scrollTo({ top: 0 });
        navigate("/gallery");
      }}
      aria-label={`View full gallery for ${img.title}`}
    >
     <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-300 hover:border-[#1e3a8a] transition cursor-pointer">
    <img
      src={img.src}
      alt={img.title}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>
  <p className="mt-2 text-sm font-semibold text-[#1e3a8a] text-center uppercase">
    {img.title}
  </p>
</div>
    
  ))}
</div>
      </section>

    {/* Artworks Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
  {artworks.map((art, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-105 transition duration-300"
    >
      {/* Image with Discount Badge */}
      <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
          -50%
        </span>
        <img
          src={art.image}
          alt={art.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold mt-4 mb-1 text-center px-2">
        {art.title}
      </h3>

      {/* Price Section */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-gray-500 line-through text-xs">₹2680</span>
        <span className="text-green-600 font-semibold text-sm">₹1340</span>
      </div>

      {/* Button */}
      <button className="bg-blue-900 text-white font-semibold py-2 text-sm mt-auto w-full hover:bg-blue-800 transition duration-300">
        SELECT OPTIONS
      </button>
    </motion.div>
  ))}
</div>
    </main>
  );
}
