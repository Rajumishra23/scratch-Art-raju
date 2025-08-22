import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      category: ["branding"],
      title: "Here's What Industry Insiders Say About Business Cards",
      img: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/img1-1024x1024.jpg",
      type: "video",
      link: "#",
    },
    {
      id: 2,
      category: ["social"],
      title: "Five Facts About Gallery That Will Blow Your Mind",
      img: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/img2-1024x1024.jpg",
      type: "image",
      link: "#",
    },
    {
      id: 3,
      category: ["social"],
      title: "Master The Skills Of Flower And Be Successful",
      img: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/img3-1024x1024.jpg",
      type: "image",
      link: "#",
    },
    {
      id: 4,
      category: ["apps"],
      title: "Five Brilliant Ways To Advertise House",
      img: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/img4-1024x1024.jpg",
      type: "image",
      link: "#",
    },
    {
      id: 5,
      category: ["social"],
      title: "The Insider's Guide to Candy",
      img: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/img8-1024x638.jpg",
      type: "video",
      link: "#",
    },
    {
      id: 6,
      category: ["social"],
      title: "Believing These 10 Myths About Cone Keeps You From Growing",
      img: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/img5-684x1024.jpg",
      type: "image",
      link: "#",
    },
    {
      id: 7,
      category: ["branding"],
      title: "Best 20 Tips For Business Cards",
      img: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/img6-1024x682.jpg",
      type: "image",
      link: "#",
    },
    {
      id: 8,
      category: ["branding"],
      title: "Brand Strategy",
      img: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/img7-1024x576.jpg",
      type: "image",
      link: "#",
    },
    {
      id: 9,
      category: ["social", "websites"],
      title: "The Insider's Guide to Stairs",
      img: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/img9-1024x726.jpg",
      type: "image",
      link: "#",
    },
  ];

  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.category.includes(filter.replace(".category-", ""))
        );

  const categories = ["apps", "branding", "social", "websites"];

  return (
    <section className="bg-[#f3f4f6] text-black py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="uppercase text-sm font-bold tracking-widest text-yellow-400">our portfolio</div>
          <h2 className="text-3xl md:text-4xl font-bold">Latest Projects</h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <button
            className={`px-4 py-2 rounded ${filter === "*" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"}`}
            onClick={() => setFilter("*")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded ${
                filter === `.category-${cat}` ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
              }`}
              onClick={() => setFilter(`.category-${cat}`)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div
                className="bg-cover bg-center h-64 transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <i className="fas fa-play text-white text-3xl"></i>
                  </div>
                )}
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <div className="text-sm text-gray-700">{item.category.join(", ")}</div>
                <a href={item.link} className="absolute inset-0 z-10"></a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Load More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;