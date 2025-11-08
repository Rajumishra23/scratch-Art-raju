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
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Name, email and message are required." });
      return;
    }
    setStatus({ type: "loading", text: "Sending..." });
    setTimeout(() => {
      setStatus({ type: "success", text: "Message sent. We will contact you soon." });
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        artType: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-yellow-50 to-white">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contact_Us</h2>
        <p className="text-sm text-gray-500 mt-2">
          For commissions, collaborations, or queries — send us a message. We respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Contact Form */}
        <div className="bg-white shadow-xl rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Name *</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Email *</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Phone *</span>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                placeholder="+91 98765 43210"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                placeholder="Project / query"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Art Type</span>
              <select
                name="artType"
                value={form.artType}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Select type</option>
                <option value="portrait">Portrait</option>
                <option value="sketch">Sketch</option>
                <option value="mural">Mural</option>
                <option value="digital">Digital Art</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Message *</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border rounded-md min-h-[120px] focus:ring-2 focus:ring-yellow-400"
                placeholder="Tell us about your idea..."
                required
              />
            </label>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition"
              >
                Send Message
              </button>
              <button
                type="button"
                onClick={() =>
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    artType: "",
                    message: "",
                  })
                }
                className="border px-4 py-2 rounded-md hover:bg-gray-100 transition"
              >
                Reset
              </button>
              {status && (
                <span
                  className={`text-sm ${
                    status.type === "error"
                      ? "text-red-600"
                      : status.type === "loading"
                      ? "text-gray-600 animate-pulse"
                      : "text-green-600"
                  }`}
                >
                  {status.text}
                </span>
              )}
            </div>
          </form>

          <div className="mt-6 text-sm text-gray-700 space-y-1">
            <p><strong>Studio:</strong> Portraits Maker & Sketch Artist Studio</p>
            <p><strong>Phone:</strong> +91 7503602684</p>
            <p><strong>Email:</strong> india8833@gmail.com</p>
            <div className="flex gap-4 mt-2 text-blue-600 text-sm">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
              <a href="https://wa.me/917503602684" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Right: Map + Visit Info */}
        <div className="flex flex-col gap-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden h-80">
            <iframe
              title="studio-map"
              src="https://www.google.com/maps?q=Delhi,India&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-sm text-gray-600">
              P-2 First Floor, Pilanji, Sarojini Nagar, New Delhi, Delhi 110023
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Opening Hours: Mon - Sat, 10:00 AM - 7:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;