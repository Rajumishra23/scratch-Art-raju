import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Contact</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
            <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded-md"></textarea>
            <button className="bg-[#b85c38] text-white px-6 py-2 rounded-md hover:bg-[#a14a2e] transition">Send</button>
          </form>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.123456789!2d77.216721!3d28.644800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a123456789%3A0xabcdef123456789!2sDelhi%20Art%20Hub!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}