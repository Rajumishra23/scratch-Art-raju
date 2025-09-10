import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-[#fefcf9] py-16 text-gray-800">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-10"
        >
          <span className="text-orange-500">About</span>{" "}
          <span className="text-gray-900">Us</span>
        </motion.h2>

        {/* About Us */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 text-base leading-relaxed text-gray-700 text-sm"
        >
          <p>
            This is the official website of <strong>Team SCRATCH ART</strong>, based at Greater Noida. 
            We create paintings and sketches on order and demand. Our artists 
            have more than <strong>9 years of experience</strong>. 
          </p>
          <p>
            According to our artists, painting is not just colors on a canvas – 
            it’s like music which gives us hope, like a book carrying deep 
            messages. We paint in oil colors, watercolors, pencil colors, 
            acrylic, pastel, and more. Our style is mostly <strong>realistic</strong>, 
            and we always use premium quality art material.
          </p>
        </motion.div>

        {/* About SCRATCHART.COM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">
            <span className="text-orange-500">About</span> SCRATCHART.COM
          </h3>

          <p className="mb-4 text-sm">
            Welcome to <strong>SCRATCHART.COM</strong>, where imagination meets artistry! 
            We transform your photos into captivating sketches and timeless 
            paintings. From cherished memories to beloved pets, our custom 
            sketches add individuality and charm to your space.
          </p>
          <p className="mb-4 text-sm">
            With commitment to quality and a seamless ordering process, we make 
            your journey from inspiration to creation smooth and delightful.
          </p>
          <p className="mb-4 text-sm">
            SCRATCHART.COM is an online marketplace helping art lovers all over 
            India order customized portraits and sketches with free delivery. 
            Explore our gallery, order any type of painting, or customize your 
            own masterpiece.
          </p>
        </motion.div>

        {/* Services & Offerings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Our Commitments</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm text-center">
            {[
              "Quality 🥇 – Premium imported art materials (artist-grade pencils, canvas, brushes, etc.).",
              "Uniqueness 💎 – Every portrait is a unique masterpiece.",
              "Affordability 🎨 – Handmade paintings starting at ₹1199/- only.",
              "Service 🏆 – 9+ years of excellence, guaranteed satisfaction.",
              "Safe & Easy Online Payment 💳 – Secure via Razorpay, UPI, Paytm, Cards, etc.",
              "Free Home Delivery ✈️ – Anywhere in India within 5–9 days."
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#order"
            className="inline-block px-6 py-3 bg-orange-500 text-center text-white text-sm font-bold rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Order Portrait Now!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
