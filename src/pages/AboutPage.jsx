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
          <div className="w-full sm:w-3/4 lg:w-2/3 rounded-lg overflow-hidden border border-gray-300 shadow-md min-h-32 sm:min-h-48 lg:min-h-64">
            <img
              src="/All1.webp"
              alt="About us"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* About Rajesh Kumar */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4 text-[9px] sm:text-xs md:text-sm leading-relaxed text-gray-700"
        >
          <p>
            Welcome to the Portrait Maker and Sketch Artist Studio, Sarojini Nagar, Delhi, led by Rajesh Kumar, a seasoned pencil sketch artist near me with 29 years of professional experience. My journey began with 15 years of crafting signboards and hoardings across Delhi-NCR, painting vibrant stories on every corner. I then transitioned to live sketching, creating pencil sketch drawings near me in just 10-15 minutes at iconic locations like Delhi Haat, INA, malls, and Pragati Maidan.
          </p>

          <p>
            Now, at my studio in Sarojini Nagar, I run Portrait Maker and Sketch Artist Studio, where I bring memories to life through commissioned artwork. As a photo sketch artist near me, I specialize in portrait drawings, charcoal sketches, oil paintings, color pencil portraits, watercolor paintings, and even unique blood paintings. My work is fast, precise, and backed by glowing Google reviews, reflecting the satisfaction of countless clients.
          </p>

          <h3 className="text-[9px] sm:text-[10px] md:text-xs font-bold mt-6 mb-3 text-center">
            What We Do
          </h3>

          <p>
            At Portrait Maker and Sketch Artist Studio, we transform your cherished moments into 100% handmade portraits and sketches. Whether it’s a pencil sketch drawing near me, a portrait painting, or a custom masterpiece, our sketch makers near me and portrait artists near me use premium, artist-grade materials—many imported from Germany, including pencils, thick sheets, canvas, colors, acrylic primer, charcoal, brushes, and varnish. From realistic charcoal sketches to vibrant oil paintings, we cater to all your artistic needs, including pet portraits, landscape paintings, and rare blood paintings.
          </p>

          {/* Commitment Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center my-6"
          >
            <div className="w-full sm:w-3/4 lg:w-2/3 rounded-lg overflow-hidden border border-gray-300 shadow-md min-h-32 sm:min-h-48 lg:min-h-64">
              <img
                src="ALL2.webp"
                alt="Our Commitment"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <h3 className="text-[9px] sm:text-[10px] md:text-xs font-bold mt-6 mb-3 text-center">
            Our Commitments
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-700 text-[9px] sm:text-[10px] md:text-xs text-left">
            <li>Quality 🥇: We use only premium, imported materials to ensure your pencil sketch or portrait drawing lasts for decades, unlike local sketches that fade on low-quality sheets.</li>
            <li>Uniqueness 💎: Every portrait drawing is a one-of-a-kind masterpiece, crafted with precision by our photo sketch artists near me.</li>
            <li>Affordability 🎨: Stunning, handmade sketches and paintings start at just ₹1300/-, making art accessible to all.</li>
            <li>Service 🏆: With 29 years of expertise, our portrait makers near me guarantee satisfaction, backed by top Google ratings.</li>
            <li>Safe & Easy Online Payment 💳: Secure transactions via Razorpay, Paytm, UPI, Google Pay, cards, NEFT, and more.</li>
            <li>Home Delivery ✈️: Your pencil sketch drawing near me or portrait painting is delivered across India within 5-9 days, ready to be framed in standard sizes.</li>
          </ul>

          <h3 className="text-[9px] sm:text-[10px] md:text-xs font-bold mt-6 mb-3 text-center">
            Why Choose Us?
          </h3>

          <p>
            With a legacy of 29 years, I, Rajesh Kumar, blend traditional craftsmanship with modern creativity at Portrait Maker and Sketch Artist Studio. From my early days as a signboard painter to mastering live sketching at Delhi’s busiest hubs, I now create custom portraits that capture the essence of your memories. My sketch makers near me team delivers fast, high-quality artwork, ensuring every client leaves with a smile and a masterpiece. Check our Google reviews for proof of our excellence.
          </p>

          <p>
            Explore our gallery, order your pencil sketch, charcoal portrait, or custom painting today, and let us transform your photos into timeless art. Visit Portrait Maker and Sketch Artist Studio, Sarojini Nagar, Delhi, or order online for a seamless experience.
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
            href="#order"
            className="inline-block px-4 py-2 bg-orange-500 text-white text-[10px] font-bold rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Order Portrait Now!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
