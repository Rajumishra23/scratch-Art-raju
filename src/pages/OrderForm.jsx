import React from "react";

const PortraitTypes = () => {
  return (
    <>
      {/* 🔹 Order Form Section */}
      <section className="bg-white py-10">
        <h2 className="text-center text-3xl font-bold">
          Order <span className="text-orange-500">Form</span>
        </h2>

        <div className="flex justify-center mt-6">
          <div className="bg-gray-100 w-3/4 rounded-md p-3 text-gray-600 text-sm">
            Choose Your Art Type and Size /{" "}
            <span className="text-blue-500">Fill Your Details</span>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6 w-3/4 mx-auto text-sm">
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
          <div className="md:col-span-1">
            <h3 className="font-bold">
              Choose Your Art Type <span className="text-red-500">*</span>
            </h3>
            <div className="border rounded-md mt-2 divide-y">
              <button className="w-full py-2">Normal Sketch</button>
              <button className="w-full py-2">*Realistic Charcoal Sketch</button>
              <button className="w-full py-2">Coffee Color Painting</button>
              <button className="w-full py-2">Watercolor Painting</button>
              <button className="w-full py-2">*Scribble Pen Sketch</button>
              <button className="w-full py-2">Charcoal Sketch on Wood</button>
            </div>
            <p className="text-xs mt-2">*Trending</p>
          </div>

          {/* Art Size */}
          <div>
            <h3 className="font-bold">
              Choose Your Art Size In Inch <span className="text-red-500">*</span>
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <button className="border px-3 py-2 rounded">8×12 (A4)</button>
              <button className="border px-3 py-2 rounded">12×16 (A3)</button>
              <button className="border px-3 py-2 rounded">16×24 (A2)</button>
              <button className="border px-3 py-2 rounded">* 24×32 (A1)</button>
            </div>
          </div>

          {/* Orientation */}
          <div>
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
          </div>

          {/* Upload Photo */}
          <div>
            <h3 className="font-bold">
              Upload Your Photo <br /> (Photo which you want in Sketch/Painting)
            </h3>
            <button className="bg-black text-white px-4 py-2 mt-2 rounded">
              Choose/Upload Photo
            </button>
          </div>
        </div>

        {/* Price + Next Button */}
        <div className="w-3/4 mx-auto mt-6 flex justify-between items-center">
          <div>
            <h3 className="font-bold">
              Total Price (₹)(Include of All Taxes){" "}
              <span className="text-red-500">*</span>
            </h3>
            <p className="text-xl font-semibold">₹ 0</p>
          </div>
          <button className="border px-4 py-2 rounded">Next</button>
        </div>
      </section>
    </>
  );
};

export default PortraitTypes;
