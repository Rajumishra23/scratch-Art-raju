import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { icon: 'interview-hiring', number: 3200, title: 'Analyzed Scripts' },
    { icon: 'interview-handshake', number: 280, title: 'Realized Projects' },
    { icon: 'interview-interview-3', number: 120, title: 'Loyal Customers' },
    { icon: 'web-design-object', number: 160, title: 'Designed Brands' },
  ];

  return (
    <section id="stats" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <i className={`text-4xl mb-4 ${stat.icon}`}></i>
              <div className="h-0.5 w-16 bg-gray-500 mx-auto mb-4"></div>
              <div className="text-4xl font-bold">{stat.number}</div>
              <h6 className="text-lg">{stat.title}</h6>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;