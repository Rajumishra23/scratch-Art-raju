import { motion } from "framer-motion";

export default function PricingSection() {
  const plans = [
    {
      price: "₹3,000",
      original: "₹6,000",
      discount: "50% SALE",
      image: "p1.png",
      description: "Perfect for gifting a single face sketch with clean finish.",
    },
    {
      price: "₹5,000",
      original: "₹6,000",
      discount: "16.7% SALE",
      image: "G3.png",
      description: "Ideal for birthdays with custom background and print option.",
    },
    {
      price: "₹7,000",
      original: "₹8,900",
      discount: "21.4% SALE",
      image: "G6.png",
      description: "Best for gifting framed sketches with detailed background.",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl text-yellow-400 font-bold font-serif text-center mb-12"
      >
        Pricing
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            className="border border-gray-700 rounded-xl p-6 relative bg-[#1a1a1a] hover:shadow-xl transition"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(255, 255, 0, 0.2)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Discount Badge */}
            <motion.div
              className="absolute top-4 left-4 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-semibold"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {plan.discount}
            </motion.div>

            {/* Image Preview */}
            <motion.img
              src={plan.image}
              alt="Sketch Preview"
              className="w-full h-64 object-cover rounded mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4">{plan.description}</p>

            {/* Price with Strike-through */}
            <div className="mb-6">
              <span className="text-yellow-500 text-3xl font-bold mr-2">
                {plan.price}
              </span>
              <span className="line-through text-gray-500 text-lg">
                {plan.original}
              </span>
            </div>

            {/* Buy Now Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}