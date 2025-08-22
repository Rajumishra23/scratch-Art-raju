import { motion } from "framer-motion";

const services = [
  {
    title: "Colour Pencil Sketch Portrait",
    subtitle: "Sketch Artist Online",
    img: "p1.png",
    rating: 5,
    desc: "Friends, getting a colour pencil portrait is very costly because it takes days and canvas work. It also demands more effort...",
  },
  {
    title: "Pencil Sketch",
    subtitle: "Pencil Sketch Artist Near Me",
    img: "p2.png",
    rating: 5,
    desc: "We make pencil sketches in black and white using cartridge paper with charcoal or color pencil. It’s affordable and quick...",
  },
  {
    title: "Realistic Pencil Portrait Artists",
    subtitle: "Painting Artist Near Me",
    img: "p3.png",
    rating: 4.5,
    desc: "Realism needs patience and detailing. We try to make realistic eyes, nose, hair, and expressions with depth and texture...",
  },
  {
    title: "Acrylic Colour Painting",
    subtitle: "Sketchatist",
    img: "p4.png",
    rating: 5,
    desc: "Acrylic dries fast, making it harder than oil painting. We use bold colors and brushwork to create vibrant, expressive art...",
  },
];

export default function OurServices() {
  return (
    <section className="py-20 bg-[#f3f4f6]">
      {/* Animated Subheading */}
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-sm font-bold uppercase tracking-wide text-[#1e3a8a] mb-2"
      >
        Art Work
      </motion.h4>

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-serif text-black font-bold mb-12"
      >
        Our Services
      </motion.h2>

      {/* Animated Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="text-center bg-white p-6 rounded-lg shadow-md"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Animated Image */}
            <motion.img
              src={service.img}
              alt={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full h-80 object-cover rounded-lg shadow-sm mb-4"
            />

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mb-2"
            >
              {[...Array(Math.floor(service.rating))].map((_, i) => (
                <span key={i} className="text-orange-400 text-xl">★</span>
              ))}
              {service.rating % 1 !== 0 && (
                <span className="text-orange-400 text-xl">☆</span>
              )}
            </motion.div>

            <p className="text-sm text-gray-500 uppercase mb-1">{service.subtitle}</p>
            <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm mb-3">{service.desc}</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-sm text-[#1e3a8a] font-medium hover:underline inline-block"
            >
              Read more
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}