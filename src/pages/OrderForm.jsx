import React from "react";
import { motion } from "framer-motion";

const PortraitTypes = () => {
  return (
    <>
      {/* 🔹 Order Form Section */}
      <section className="bg-white py-10 px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl font-bold"
        >
          Order <span className="text-orange-500">Form</span>
        </motion.h2>

        {/* Sub Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mt-6"
        >
          <div className="bg-gray-100 w-full sm:w-3/4 lg:w-2/3 rounded-md p-3 text-gray-600 text-sm text-center sm:text-left">
            Choose Your Art Type and Size /{" "}
            <span className="text-blue-500">Fill Your Details</span>
          </div>
        </motion.div>

        {/* Form Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6 w-full sm:w-3/4 mx-auto text-sm"
        >
          {/* Number of Faces */}
          <div>
            <h3 className="font-bold">
              Number of Face (s) <span className="text-red-500">*</span>
            </h3>
            <div className="mt-2 space-y-1">
              <label className="block">
                <input type="radio" name="faces" defaultChecked /> Single Face
              </label>
              <label className="block">
                <input type="radio" name="faces" /> Two Faces
              </label>
            </div>
            <p className="text-xs mt-2">
              **For more than 2 faces sketch, WhatsApp us
            </p>
          </div>

          {/* Art Type */}
          <div>
            <h3 className="font-bold">
              Choose Your Art Type <span className="text-red-500">*</span>
            </h3>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border rounded-md mt-2 divide-y text-center"
            >
              <button className="w-full py-2">Normal Sketch</button>
              <button className="w-full py-2">*Realistic Charcoal Sketch</button>
              <button className="w-full py-2">Coffee Color Painting</button>
              <button className="w-full py-2">Watercolor Painting</button>
              <button className="w-full py-2">*Scribble Pen Sketch</button>
              <button className="w-full py-2">Charcoal Sketch on Wood</button>
            </motion.div>
            <p className="text-xs mt-2">*Trending</p>
          </div>

          {/* Art Size */}
          <div>
            <h3 className="font-bold">
              Choose Your Art Size In Inch <span className="text-red-500">*</span>
            </h3>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mt-2"
            >
              <button className="border px-3 py-2 rounded">8×12 (A4)</button>
              <button className="border px-3 py-2 rounded">12×16 (A3)</button>
              <button className="border px-3 py-2 rounded">16×24 (A2)</button>
              <button className="border px-3 py-2 rounded">* 24×32 (A1)</button>
            </motion.div>
          </div>

          {/* Orientation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold">
              Orientation <span className="text-red-500">*</span>
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <button className="bg-green-500 text-white px-3 py-2 rounded">
                Artist Choice
              </button>
              <button className="border px-3 py-2 rounded">Vertical</button>
              <button className="border px-3 py-2 rounded">Horizontal</button>
            </div>
          </motion.div>

          {/* Upload Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold">
              Upload Your Photo <br /> (Photo which you want in Sketch/Painting)
            </h3>
            <button className="bg-black text-white px-4 py-2 mt-2 rounded w-full sm:w-auto">
              Choose/Upload Photo
            </button>
          </motion.div>
        </motion.div>

        {/* Price + Next Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full sm:w-3/4 mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-bold">
              Total Price (₹)(Include of All Taxes){" "}
              <span className="text-red-500">*</span>
            </h3>
            <p className="text-xl font-semibold">₹ 0</p>
          </div>
          <button className="border px-6 py-2 rounded w-full sm:w-auto">
            Next
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default PortraitTypes;
