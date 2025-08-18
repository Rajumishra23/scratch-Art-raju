import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Hair & Light Study",
      subtitle:
        "Exploring <span class='text-red-500 font-semibold'>texture & tone</span>",
      desc: "A dramatic study of hair illuminated by rich red light against deep purple. Perfect for stylized sketch commissions.",
      link: "#",
      linkLabel: "View Style",
      image: "w1.png",
    },
    {
      title: "Moody Portraits",
      subtitle:
        "Capturing <span class='text-red-500 font-semibold'>emotion in shadow</span>",
      desc: "Side-lit pencil portraits that evoke depth, silence, and introspection. Ideal for personal or gift sketches.",
      link: "#",
      linkLabel: "Explore Mood",
      image: "w2.png",
    },
    {
      title: "Companion Sketches",
      subtitle:
        "Preserving <span class='text-red-500 font-semibold'>loyalty in lines</span>",
      desc: "Lifelike pet sketches that honor your furry friend with love and detail. A timeless tribute to your companion.",
      link: "#",
      linkLabel: "See Gallery",
      image: "w3.png",
    },
  ];

  return (
    <section className="bg-black py-20 px-6 md:px-16">
      <h2 className="text-4xl font-bold font-serif text-center mb-14 text-yellow-400">
        Our Art Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -5,
              boxShadow: "0px 10px 20px rgba(255, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 transition"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-60 overflow-hidden"
            >
              <motion.img
                src={service.image}
                alt={service.title}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
              />
            </motion.div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p
                className="text-sm text-gray-600 mb-3"
                dangerouslySetInnerHTML={{ __html: service.subtitle }}
              ></p>
              <p className="text-gray-700 text-sm mb-5">{service.desc}</p>

              {/* CTA Link */}
              <motion.a
                href={service.link}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group inline-flex items-center gap-2 text-red-500 font-semibold text-sm hover:gap-3 transition-all"
              >
                {service.linkLabel}
                <motion.span
                  className="text-lg group-hover:translate-x-1 transition-transform"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  ➝
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;