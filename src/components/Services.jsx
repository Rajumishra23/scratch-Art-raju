import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: 'web-design-graphic-tools',
      title: 'graphic design',
      subtitle: 'Starting from the concept up to the Final Result',
      description: 'Proin tempor nulla eget turpis blandit vulputate. Donec vitae libero justo. Cras ut est nec orci ultrices volutpat.',
      link: '/gallery',
      linkText: 'see graphics',
    },
    {
      icon: 'web-design-interface',
      title: 'web design',
      subtitle: 'Creating Websites that focused on Clients Needs',
      description: 'Proin tempor nulla eget turpis blandit vulputate. Donec vitae libero justo. Cras ut est nec orci ultrices volutpat.',
      link: '/gallery',
      linkText: 'see websites',
    },
    {
      icon: 'web-design-idea',
      title: 'User Experience',
      subtitle: 'We analyze experience and Achieve Results.',
      description: 'Proin tempor nulla eget turpis blandit vulputate. Donec vitae libero justo. Cras ut est nec orci ultrices volutpat.',
      link: '/gallery',
      linkText: 'see ui projects',
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <i className={`text-4xl mb-4 ${service.icon}`}></i>
              <h3 className="text-xl uppercase mb-2">{service.title}</h3>
              <h5 className="text-lg font-semibold mb-4">{service.subtitle}</h5>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className="text-blue-600 hover:underline">{service.linkText}</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;