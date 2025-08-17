import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      image: 'wp-content/uploads/2019/03/testimonials-img1.jpg',
      quote: 'As important as strategy is, we have to execute to win. Execution involves every employee and every relation we have with customers.',
      name: 'Conor Rashford',
      post: 'Designer',
    },
    {
      image: 'wp-content/uploads/2019/03/testimonials-img2.jpg',
      quote: 'We never hesitate in our support, and we never lose sight of our main mission: serving our clients.',
      name: 'Daren Noel',
      post: 'CEO',
    },
  ];

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl uppercase text-gray-500">what clients say</h3>
          <h2 className="text-4xl font-bold">Testimonials</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className="w-24 h-24 rounded-full mx-auto mb-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonial.image})` }}
              ></div>
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-gray-500">{testimonial.post}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;