import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('*');
  const portfolioItems = [
    { id: 1, category: ['branding'], title: 'Here\'s What Industry Insiders Say About Business Cards', image: 'wp-content/uploads/2019/03/img1-1024x1024.jpg', type: 'video', link: '/gallery' },
    { id: 2, category: ['social'], title: 'Five Facts About Gallery That Will Blow Your Mind', image: 'wp-content/uploads/2019/03/img2-1024x1024.jpg', type: 'image', link: '/gallery' },
    { id: 3, category: ['social'], title: 'Master The Skills Of Flower And Be Successful', image: 'wp-content/uploads/2019/03/img3-1024x1024.jpg', type: 'image', link: '/gallery' },
    { id: 4, category: ['apps'], title: 'Five Brilliant Ways To Advertise House', image: 'wp-content/uploads/2019/03/img4-1024x1024.jpg', type: 'image', link: '/gallery' },
    { id: 5, category: ['social'], title: 'The Insider\'s Guide to Candy', image: 'wp-content/uploads/2019/03/img8-1024x638.jpg', type: 'video', link: '/gallery' },
    { id: 6, category: ['social'], title: 'Believing These 10 Myths About Cone Keeps You From Growing', image: 'wp-content/uploads/2019/03/img5-684x1024.jpg', type: 'image', link: '/gallery' },
    { id: 7, category: ['branding'], title: 'Best 20 Tips For Business Cards', image: 'wp-content/uploads/2019/03/img6-682x1024.jpg', type: 'image', link: '/gallery' },
    { id: 8, category: ['branding'], title: 'Brand Strategy', image: 'wp-content/uploads/2019/03/img7-1024x576.jpg', type: 'image', link: '/gallery' },
    { id: 9, category: ['social', 'websites'], title: 'The Insider\'s Guide to Stairs', image: 'wp-content/uploads/2019/03/img9-1024x726.jpg', type: 'image', link: '/gallery' },
  ];

  const filteredItems = filter === '*' ? portfolioItems : portfolioItems.filter(item => item.category.includes(filter.replace('.category-', '')));

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl uppercase text-gray-500">our portfolio</h3>
          <h2 className="text-4xl font-bold">Latest Projects</h2>
        </motion.div>
        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          <button onClick={() => setFilter('*')} className={`px-4 py-2 ${filter === '*' ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded hover:bg-blue-500 hover:text-white transition duration-300`}>All</button>
          <button onClick={() => setFilter('.category-apps')} className={`px-4 py-2 ${filter === '.category-apps' ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded hover:bg-blue-500 hover:text-white transition duration-300`}>Apps</button>
          <button onClick={() => setFilter('.category-branding')} className={`px-4 py-2 ${filter === '.category-branding' ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded hover:bg-blue-500 hover:text-white transition duration-300`}>Branding</button>
          <button onClick={() => setFilter('.category-social')} className={`px-4 py-2 ${filter === '.category-social' ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded hover:bg-blue-500 hover:text-white transition duration-300`}>Social</button>
          <button onClick={() => setFilter('.category-websites')} className={`px-4 py-2 ${filter === '.category-websites' ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded hover:bg-blue-500 hover:text-white transition duration-300`}>Websites</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p>{item.category.join(', ')}</p>
                  <Link to={item.link} className="mt-2 inline-block text-blue-400 hover:underline">View</Link>
                </div>
              </div>
              {item.type === 'video' && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">Load More</Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;