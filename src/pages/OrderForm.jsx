import React from "react";
import { motion } from "framer-motion";

const PortraitTypes = () => {
  return (
    <>
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

    </>
  );
};

export default PortraitTypes;
