import { useEffect } from "react";
import { motion } from "framer-motion";
import ShopProducts from "../data/ShopProducts";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariant = {
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
      <h2
        className="text-2xl font-bold mb-10 text-gray-900 text-center"
        id="shop-title"
      >
        🛍️ Scratch Art Shop
      </h2>

      {/* ✅ Products Grid */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        role="list"
        aria-labelledby="shop-title"
      >
        {ShopProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariant}
            role="listitem"
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer flex flex-col"
          >
            {/* ✅ Image Box with BEST SELLER badge */}
            <div className="relative w-full h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                BEST SELLER
              </span>
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* ✅ Title */}
            <h3 className="text-sm font-semibold mt-3 mb-1 text-center px-2">
              {product.title}
            </h3>

            {/* ✅ Price Section */}
            <p className="text-center text-xs text-gray-600 mb-3">
              From ₹{product.price}
            </p>

            {/* ✅ Button */}
            <button className="bg-blue-900 text-white font-semibold py-1.5 text-sm mt-auto w-full hover:bg-blue-800 transition duration-300">
              SELECT OPTIONS
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Shop;