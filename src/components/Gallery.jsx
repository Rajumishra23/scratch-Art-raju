import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const images = [
    { src: "Gallery1.webp", title: "CRYSTAL PAINTINGS" },
    { src: "Gallery2.webp", title: "CANVAS PAINTINGS" },
    { src: "Gallery3.webp", title: "PREMIUM WALLPAPER" },
    { src: "Gallery4.webp", title: "HAND PAINTINGS" },
    { src: "Gallery5.webp", title: "GALLERY ART" },
    { src: "Gallery6.webp", title: "METAL ART" },
  ];

  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1.2;
    const interval = 16;

    const scrollInterval = setInterval(() => {
      scrollAmount += speed;
      scrollContainer.scrollLeft = scrollAmount;

      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0;
      }
    }, interval);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="bg-[#f3f4f6] py-20 px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl text-[#1e3a8a] font-bold font-serif text-center"
      >
        Gallery
      </motion.h2>

      {/* Subtext with arrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-gray-600 mt-2 mb-12"
      >
        <p className="text-center">(Click on image for more gallery image👇)</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          <ArrowDown className="w-6 h-6 text-[#1e3a8a] mt-2" />
        </motion.div>
      </motion.div>

      {/* Sliding Image Container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-hidden flex-nowrap max-w-6xl mx-auto"
      >
        {images.concat(images).map((item, idx) => (
          <div key={idx} className="flex flex-col items-center shrink-0">
            <div
              className="w-40 h-40 rounded-full overflow-hidden border border-gray-300 hover:border-[#1e3a8a] transition cursor-pointer"
            onClick={() => {
        window.scrollTo({ top: 0,});
        navigate("/gallery");
      }}
      aria-label={`View full gallery for ${item.title}`}
    >
              
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-[#1e3a8a] uppercase whitespace-nowrap">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}