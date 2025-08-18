import { motion } from "framer-motion";

export default function PricingSection() {
  const plans = [
    {
      title: "Basic",
      price: "₹499",
      features: ["1 Face", "Digital Delivery", "No Background"],
    },
    {
      title: "Premium",
      price: "₹999",
      features: ["2 Faces", "Custom Background", "Digital + Print"],
      popular: true,
    },
    {
      title: "Deluxe",
      price: "₹1499",
      features: ["Up to 4 Faces", "Detailed Background", "Framed Print"],
    },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6 md:px-20">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-serif text-center mb-12"
      >
        Pricing
      </motion.h2>

      {/* Animated Grid */}
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
            className={`border rounded-xl p-6 relative ${
              plan.popular ? "border-yellow-500 shadow-lg" : "border-gray-700"
            }`}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Popular Glow Pulse */}
            {plan.popular && (
              <motion.div
                className="absolute top-4 right-4 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Most Popular
              </motion.div>
            )}

            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-yellow-500 text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2 text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>

            {/* Animated Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
            >
              Book Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}