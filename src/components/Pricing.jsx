import { motion } from "framer-motion";

export default function PricingSection() {
  const plans = [
    {
      price: "₹3,000",
      original: "₹6,000",
      discount: "50% SALE",
      image: "aamir.png",
      description: "Perfect for gifting a single face sketch with clean finish.",
    },
    {
      price: "₹5,000",
      original: "₹6,000",
      discount: "16.7% SALE",
      image: "budha.png",
      description: "Ideal for birthdays with custom background and print option.",
    },
    {
      price: "₹7,000",
      original: "₹8,900",
      discount: "21.4% SALE",
      image: "ganesh.png",
      description: "Best for gifting framed sketches with detailed background.",
    },
  ];

  return (
    <section className="bg-[#fefcf9] text-black py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-yellow-600 mb-12 font-serif"
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
            className="bg-white border border-gray-200 rounded-xl p-6 relative shadow-sm hover:shadow-lg transition-all duration-300"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ y: -4 }}
          >
            {/* Discount Badge */}
            <motion.div
              className="absolute top-4 left-4 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold shadow"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {plan.discount}
            </motion.div>

            {/* Image */}
            <motion.img
              src={plan.image}
              alt="Sketch Preview"
              className="w-full h-64 object-cover rounded mb-4 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">{plan.description}</p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-yellow-600 text-3xl font-bold mr-2">
                {plan.price}
              </span>
              <span className="line-through text-gray-400 text-lg">
                {plan.original}
              </span>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full py-2 bg-yellow-500 text-black rounded font-medium hover:bg-yellow-600 transition"
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}