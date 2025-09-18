import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PortraitTypes = () => {
  const portraits = [
    { id: 1, src: "G1.png", alt: "Blue Scribble Sketch" },
    { id: 2, src: "G2.png", alt: "Orange Scribble Sketch" },
    { id: 3, src: "G3.png", alt: "Purple Scribble Sketch" },
    { id: 4, src: "G4.png", alt: "Red Scribble Sketch" },
    { id: 5, src: "G1.png", alt: "Green Scribble Sketch" },
    { id: 6, src: "G6.png", alt: "Pink Scribble Sketch" },
  ];

  const happyClients = [
    { id: 1, src: "Testimonial1.webp", alt: "Client Portrait 1" },
    { id: 2, src: "testimonial2.webp", alt: "Client Portrait 2" },
    { id: 3, src: "testimonial3.webp", alt: "Client Portrait 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === happyClients.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [happyClients.length]);

  return (
    <div className="text-xs">
      <section className="bg-[#fefcf9] py-6 text-gray-800">
        <div className="container mx-auto px-2">
          <div className="text-center mb-4 animate-fade-in">
            <h2 className="text-sm font-bold text-gray-900 mb-1 tracking-tight">
    <span className="text-orange-500">Order Portrait Paintings</span> & Custom Pencil Sketches in India
  </h2>

  <p className="text-xs text-gray-700 max-w-md mx-auto italic mb-2">
    Transform your cherished memories into stunning works of art with our 100% handmade pencil sketches, portrait drawings, and custom paintings! At our studio, home to the best sketch artists and painting artists in India, we specialize in turning your photos into breathtaking photo to sketch or painting drawings, starting at just{" "}
    <strong className="text-green-500">₹1300/-</strong> with home delivery across India.
  </p>

  <ul className="text-gray-800 text-[10px] max-w-md mx-auto space-y-1 list-disc list-inside text-left sm:text-center">
    <li>
      Looking for a <strong>pencil artist near me</strong> or a <strong>sketch artist near me</strong> with price? Our expert team, including photo sketch artists near me, creates personalized masterpieces like pencil drawings near me and sketch drawings near me that capture the essence of your moments.
    </li>
    <li>
      Whether it’s a heartfelt gift for loved ones or a unique keepsake, our <strong>custom paintings</strong> and <strong>portrait drawings</strong> are crafted to be perfect, memorable, and timeless.
    </li>
    <li>
      Every artwork is meticulously handcrafted using premium materials to ensure lasting quality, making them ideal for gifting or cherishing forever.
    </li>
  </ul>

  <h1 className="text-center text-sm font-bold mb-2">
    <span className="text-black">Portrait</span>{" "}
    <span className="text-orange-500">Type</span>
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
    {portraits.map((portrait, index) => (
      <div
        key={portrait.id}
        className="bg-white border border-gray-200 rounded p-2 flex flex-col items-center hover:scale-105 hover:shadow-md transition duration-300"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <img
          src={portrait.src}
          alt={portrait.alt}
          className="w-24 h-32 object-cover rounded border border-gray-300"
        />
        <p className="mt-2 text-[10px] text-gray-600 font-medium text-center">
          Scribble Pen Sketch · Custom Colors
        </p>
      </div>
    ))}
  </div>

  <p className="text-xs text-gray-700 max-w-md mx-auto italic mt-4">
    Order your pencil sketch, portrait drawing, or custom painting today and let our skilled artists bring your vision to life. With affordable pricing, exceptional craftsmanship, and free home delivery, we make it easy to own a masterpiece. Contact us now to find a sketch artist near me with price or a pencil drawing near me and create a gift that speaks to the heart!
  </p>
</div>
        
        </div>
      </section>

      {/* 💬 Happy Clients Section */}
      <section className="bg-white py-6 text-gray-800">
        <div className="container mx-auto px-2">
          {/* Heading */}
          <div className="text-center mb-3">
            <h2 className="text-sm font-bold mb-1 tracking-tight">
              <span className="text-black">Happy Client</span>{" "}
              <span className="text-orange-500">= Our Goal</span>
            </h2>
          </div>

          {/* Auto Sliding Clients */}
          <div className="relative w-full max-w-[180px] mx-auto overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {happyClients.map((client) => (
                <div key={client.id} className="min-w-full flex flex-col items-center">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="w-32 h-32 object-cover rounded border border-gray-300"
                  />
                  <p className="mt-2 text-[10px] text-gray-600 font-medium">
                    Client Artwork · Custom Sketch
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* ✨ Order Section */}
<section className="bg-white py-2 text-gray-800">
  <div className="container mx-auto px-2 text-center max-w-md">
    <p className="text-[10px] text-gray-700 mb-2">
      Looking for a Meaningful Gift? At <strong>PORTRAIT MAKER</strong>, we create{" "}
      <strong>Photo to Sketch & Custom Portraits</strong>!
    </p>

    <p className="text-[10px] text-gray-700 mb-2">
      Discover the perfect gift with <strong>PORTRAIT MAKER</strong>, where we transform your cherished photos into stunning pencil sketch drawings near me and custom portraits, crafted by the best portrait artists near me. Our expert sketch makers near me and pencil sketch artists near me specialize in turning your memories into timeless works of art, ideal for gifting or cherishing forever. Whether you’re searching for a photo sketch artist near me or portrait makers near me, we deliver heartfelt, handmade creations that capture the essence of your moments.
    </p>

    <h2 className="text-[11px] font-bold mb-2">
      How to <span className="text-orange-500">Place Your Order?</span>
    </h2>

    <div className="text-left sm:text-center space-y-1 text-[10px]">
      <p>
        <span className="text-green-600 font-semibold">Step 1.</span> Choose Your Art Type & Size
      </p>
      <p>
        <span className="text-green-600 font-semibold">Step 2.</span> Upload Your Photo
      </p>
      <p>
        <span className="text-green-600 font-semibold">Step 3.</span> Click on Order Now & Confirm
      </p>
    </div>

    <p className="mt-3 text-gray-700 text-[10px]">
      Relax! Your handmade sketch, created by our expert photo sketch artists near me, will be delivered to your doorstep in <strong>5-7 days</strong> with home delivery across India.
    </p>
  </div>
</section>



    {/* 🔹 Order Form Section (Smaller Version) */}
<section className="bg-white py-6 px-3 sm:px-5 lg:px-8">
  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center text-base sm:text-lg font-bold"
  >
    Order <span className="text-orange-500">Form</span>
  </motion.h2>

  {/* Sub Text */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="flex justify-center mt-2"
  >
    <div className="bg-gray-100 w-full sm:w-3/4 lg:w-2/3 rounded-md p-2 text-gray-600 text-[10px] text-center sm:text-left">
      Choose Your Art Type and Size /{" "}
      <span className="text-blue-500">Fill Your Details</span>
    </div>
  </motion.div>

  {/* Form Grid */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-3 w-full sm:w-3/4 mx-auto text-[10px]"
  >
    {/* Number of Faces */}
    <div>
      <h3 className="font-bold text-[11px]">
        Number of Face(s) <span className="text-red-500">*</span>
      </h3>
      <div className="mt-1 space-y-0.5">
        <label className="block">
          <input type="radio" name="faces" defaultChecked /> Single Face
        </label>
        <label className="block">
          <input type="radio" name="faces" /> Two Faces
        </label>
      </div>
      <p className="text-[9px] mt-1">
        For more than 2 faces sketch, WhatsApp us
      </p>
    </div>

    {/* Art Type */}
    <div>
      <h3 className="font-bold text-[11px]">
        Choose Your Art Type <span className="text-red-500">*</span>
      </h3>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="border rounded-md mt-1 divide-y text-center text-[10px]"
      >
        <button className="w-full py-1">Normal Sketch</button>
        <button className="w-full py-1">Realistic Charcoal Sketch</button>
        <button className="w-full py-1">Coffee Color Painting</button>
        <button className="w-full py-1">Watercolor Painting</button>
        <button className="w-full py-1">Scribble Pen Sketch</button>
        <button className="w-full py-1">Charcoal Sketch on Wood</button>
      </motion.div>
      <p className="text-[9px] mt-1">*Trending</p>
    </div>

    {/* Art Size */}
    <div>
      <h3 className="font-bold text-[11px]">
        Choose Your Art Size (In Inches) <span className="text-red-500">*</span>
      </h3>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-1.5 mt-1 text-[10px]"
      >
        <button className="border px-2 py-1 rounded">8×12 (A4)</button>
        <button className="border px-2 py-1 rounded">12×16 (A3)</button>
        <button className="border px-2 py-1 rounded">16×20 (A2)</button>
        <button className="border px-2 py-1 rounded">24×34 (A1)</button>
      </motion.div>
    </div>

    {/* Orientation */}
    <div>
      <h3 className="font-bold text-[11px]">
        Orientation <span className="text-red-500">*</span>
      </h3>
      <div className="flex flex-wrap gap-1.5 mt-1 text-[10px]">
        <button className="bg-green-500 text-white px-2 py-1 rounded">
          Artist Choice
        </button>
        <button className="border px-2 py-1 rounded">Vertical</button>
        <button className="border px-2 py-1 rounded">Horizontal</button>
      </div>
    </div>

    {/* Upload Photo */}
    <div>
      <h3 className="font-bold text-[11px]">
        Upload Your Photo <br />
        <span className="text-[9px]">(Photo which you want in Sketch/Painting)</span>
      </h3>
      <button className="bg-black text-white px-3 py-1.5 mt-2 rounded w-full sm:w-auto text-[10px]">
        Choose/Upload Photo
      </button>
    </div>
  </motion.div>

  {/* Price + Next Button */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="w-full sm:w-3/4 mx-auto mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px]"
  >
    <div className="text-center sm:text-left">
      <h3 className="font-bold text-[11px]">
        Total Price (₹)(Include of All Taxes) <span className="text-red-500">*</span>
      </h3>
      <p className="text-sm font-semibold">₹ 0</p>
    </div>
    <button className="border px-4 py-1.5 rounded w-full sm:w-auto text-[10px]">
      Next
    </button>
  </motion.div>

  {/* Info Paragraph */}
  <div className="mt-3 text-[10px] text-gray-700 text-center sm:text-left">
    Looking for a portrait maker near me or a photo sketch artist near me? At <strong>PORTRAIT MAKER</strong>, our talented team ensures every pencil sketch drawing near me is crafted with precision and care, using premium materials to create lasting memories. Order now to gift your loved ones a unique, meaningful masterpiece that speaks to the heart!
  </div>
</section>


    </div>
  );
};

export default PortraitTypes;
