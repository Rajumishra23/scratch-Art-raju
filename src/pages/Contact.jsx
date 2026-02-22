import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    artType: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }
    if (!form.artType.trim()) {
      alert("Please select an art type.");
      return;
    }
    alert("Message sent successfully!");
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      artType: "",
      message: "",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Get In Touch</h2>
        <p className="text-gray-600 text-[10px] font-medium max-w-2xl mx-auto">
          Have questions about our art or want to commission a custom piece? We'd love to hear from you. Our team responds within 24 hours.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-blue-900">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 w-full transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 w-full transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                className="border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 w-full transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className="border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 w-full transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Art Type *</label>
              <select
                name="artType"
                value={form.artType}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 w-full transition"
              >
                <option value="">Select art type...</option>
                <option value="portrait">Portrait</option>
                <option value="sketch">Sketch</option>
                <option value="digital">Digital Art</option>
                <option value="painting">Painting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project or idea..."
                required
                className="border-2 border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 w-full min-h-[140px] resize-none transition"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg w-full text-base"
            >
              Send Message ✉️
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t-2 border-gray-200 space-y-3">
            <h4 className="font-bold text-gray-900 text-base mb-4">Contact Details</h4>
            <p className="flex items-center text-gray-700"><span className="font-semibold text-blue-900 mr-3">Studio:</span> Portraits Maker & Sketch Artist</p>
            <p className="flex items-center text-gray-700"><span className="font-semibold text-blue-900 mr-3">📞 Phone:</span> <a href="tel:+917503602684" className="text-blue-600 hover:underline">+91 7503602684</a></p>
            <p className="flex items-center text-gray-700"><span className="font-semibold text-blue-900 mr-3">✉️ Email:</span> <a href="mailto:india8833@gmail.com" className="text-blue-600 hover:underline">india8833@gmail.com</a></p>
          </div>
        </div>

        {/* Map + Address */}
        <div className="flex flex-col gap-6">
          {/* Google Map */}
          <div className="h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
            <iframe
              title="Studio Location"
              src="https://www.google.com/maps?q=P-2%20First%20Floor,%20Pilanji,%20Sarojini%20Nagar,%20New%20Delhi,%20Delhi%20110023&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address Card */}
          <div className="bg-white shadow-2xl rounded-2xl p-6 border-l-4 border-orange-500">
            <h3 className="font-bold text-xl text-gray-900 mb-4">Visit Our Studio</h3>

            <a
              href="https://www.google.com/maps/search/?api=1&query=P-2+First+Floor,+Pilanji,+Sarojini+Nagar,+New+Delhi,+Delhi+110023"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline text-base font-semibold block mb-4 flex items-center gap-2"
            >
              📍 P-2 First Floor, Pilanji, Sarojini Nagar, New Delhi, Delhi 110023
            </a>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-900">
              <p className="text-gray-700 font-semibold text-base">⏰ Opening Hours</p>
              <p className="text-gray-600 mt-2">Monday – Saturday: 10:00 AM – 7:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
