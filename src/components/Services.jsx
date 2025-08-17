import React from 'react';
import { PenTool, Monitor, UserCheck } from 'react-feather';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <PenTool size={40} strokeWidth={1.5} className="text-white mb-6 mx-auto icon-glow" />,
      title: "GRAPHIC DESIGN",
      subtitle: "Starting from the concept up to the Final Result",
      desc: "Proin tempor nulla eget turpis blandit vulputate. Donec vitae libero justo. Cras ut est nec orci ultrices volutpat.",
      link: "#",
      linkLabel: "SEE GRAPHICS",
    },
    {
      icon: <Monitor size={40} strokeWidth={1.5} className="text-white mb-6 mx-auto icon-glow" />,
      title: "WEB DESIGN",
      subtitle: "Creating Websites that focused on Clients Needs",
      desc: "Proin tempor nulla eget turpis blandit vulputate. Donec vitae libero justo. Cras ut est nec orci ultrices volutpat.",
      link: "#",
      linkLabel: "SEE WEBSITES",
    },
    {
      icon: <UserCheck size={40} strokeWidth={1.5} className="text-white mb-6 mx-auto icon-glow" />,
      title: "USER EXPERIENCE",
      subtitle: "We analyze experience and <span class='text-yellow-400 font-semibold'>Achieve Results.</span>",
      desc: "Proin tempor nulla eget turpis blandit vulputate. Donec vitae libero justo. Cras ut est nec orci ultrices volutpat.",
      link: "#",
      linkLabel: "SEE PROJECTS",
    },
  ];

  return (
    <section
      className="bg-black text-white py-20"
      style={{
        backgroundImage: "url(https://promo-theme.com/luxa/wp-content/uploads/2019/03/bg-services.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-black p-8 rounded-lg text-center border border-gray-800 hover:border-yellow-400 transition duration-300"
            >
              {/* Top Icon */}
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                {service.icon}
              </motion.div>

              {/* Title */}
              <div className="uppercase text-sm tracking-widest text-yellow-400 font-semibold mb-2">
                {service.title}
              </div>

              {/* Subtitle */}
              <h5
                className="text-lg font-bold leading-snug mb-4"
                dangerouslySetInnerHTML={{ __html: service.subtitle }}
              ></h5>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-6">
                {service.desc}
              </p>

              {/* Link */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={service.link}
                className="uppercase text-xs text-white underline hover:text-yellow-400 transition"
              >
                {service.linkLabel}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;