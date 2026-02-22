import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-[#fefcf9] py-12 text-gray-800">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl font-extrabold text-center mb-8"
        >
          <span className="text-orange-500">About</span>{" "}
          <span className="text-gray-900">Us</span>
        </motion.h2>

        {/* About Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="w-full sm:w-3/4 lg:w-2/3 rounded-lg overflow-hidden border-2 border-orange-400 shadow-lg">
            <img src="/All1.webp" alt="About us" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4 text-[10px] sm:text-xs md:text-sm leading-relaxed text-gray-700 border-2 border-gray-300 rounded-lg shadow-md p-4"
        >
          <p>
            Welcome to the Portrait Maker and Sketch Artist Studio, Sarojini Nagar, Delhi, led by Rajesh Kumar, a seasoned pencil sketch artist with 29 years of professional experience. From signboards and hoardings to live sketching at Delhi Haat, malls, and Pragati Maidan, his journey reflects true artistry.
          </p>

          <p>
            At the studio, commissioned artworks include portrait drawings, charcoal sketches, oil paintings, color pencil portraits, watercolor paintings, and even unique blood paintings. Fast, precise, and backed by glowing Google reviews, every piece reflects client satisfaction.
          </p>

          <h3 className="text-xs font-bold mt-6 mb-3 text-center">What We Do</h3>
          <p>
            We transform cherished moments into 100% handmade portraits and sketches using premium artist-grade materials—many imported from Germany. From realistic charcoal sketches to vibrant oil paintings, we cater to all artistic needs including pet portraits, landscapes, and rare blood paintings.
          </p>

          {/* Commitment Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center my-6"
          >
            <div className="w-full sm:w-3/4 lg:w-2/3 rounded-lg overflow-hidden border-2 border-orange-400 shadow-lg">
              <img src="All2.webp" alt="Our Commitment" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <h3 className="text-[10px] font-bold mt-6 mb-3 text-center">Our Commitments</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-[10px] sm:text-[10px] md:text-xs">
            <li>Quality 🥇: Premium imported materials ensure durability.</li>
            <li>Uniqueness 💎: Every portrait is one-of-a-kind.</li>
            <li>Affordability 🎨: Handmade sketches start at just ₹1300/-.</li>
            <li>Service 🏆: 29 years of expertise, top Google ratings.</li>
            <li>Safe Payment 💳: Secure transactions via Razorpay, Paytm, UPI, cards, NEFT.</li>
            <li>Home Delivery ✈️: Delivered across India within 5-9 days.</li>
          </ul>

          <h3 className="text-[10px] font-bold mt-6 mb-3 text-center">Why Choose Us?</h3>
          <p>
            With a legacy of 29 years, Rajesh Kumar blends traditional craftsmanship with modern creativity. From signboard painting to live sketching, now delivering custom portraits that capture memories with precision. Fast, high-quality artwork ensures every client leaves with a masterpiece.
          </p>

          <p>
            Explore our gallery, order your sketch or painting today, and let us transform your photos into timeless art. Visit our studio in Sarojini Nagar, Delhi, or order online for a seamless experience.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="/order-portrait"
            className="inline-block px-4 py-2 bg-orange-500 text-white text-xs font-bold rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Order Portrait Now!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;