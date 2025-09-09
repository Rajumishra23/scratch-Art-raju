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
        className="text-4xl font-bold mb-10 text-gray-900 text-center"
        id="shop-title"
      >
        🛍️ Scratch Art Shop
      </h2>

      {/* ✅ Products Grid */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        role="list"
        aria-labelledby="shop-title"
      >
        {ShopProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariant}
            role="listitem"
            className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition duration-300 cursor-pointer flex flex-col"
          >
            {/* ✅ Image Box */}
            <div className="w-full h-56 flex items-center justify-center bg-gray-100 rounded-md mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* ✅ Title */}
            <h3 className="text-lg font-semibold mb-2 text-center">
              {product.title}
            </h3>

            {/* ✅ Price Section */}
            <div className="flex gap-2 items-center justify-center mb-2">
              <p className="text-gray-500 line-through text-sm">
                ₹{product.price}
              </p>
              <p className="text-green-600 font-semibold text-lg">
                ₹{product.discountPrice}
              </p>
            </div>

            {/* ✅ Save Badge */}
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full mb-4 inline-block self-center">
              Save ₹{product.price - product.discountPrice}
            </span>

            {/* ✅ Buy Now Button */}
            <button className="mt-auto bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Buy Now
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Shop;
