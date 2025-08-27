import { useEffect } from "react";
import { motion } from "framer-motion";
import ShopProducts from "../data/ShopProducts";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Shop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-6 py-10 bg-white min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
        🛍️ Scratch Art Shop
      </h2>

      {/* 🔹 Product Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {ShopProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>

            <div className="flex gap-2 items-center mb-2">
              <p className="text-gray-500 line-through text-sm">
                ₹{product.price}
              </p>
              <p className="text-green-600 font-semibold text-lg">
                ₹{product.discountPrice}
              </p>
            </div>

            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
              Save ₹{product.price - product.discountPrice}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Shop;
