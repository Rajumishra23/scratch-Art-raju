import React, { useState, useEffect } from "react";

const PortraitTypes = () => {
  const portraits = [
    { id: 1, src: "G1.png", alt: "Blue Scribble Sketch" },
    { id: 2, src: "G2.png", alt: "Orange Scribble Sketch" },
    { id: 3, src: "G3.png", alt: "Purple Scribble Sketch" },
    { id: 4, src: "G4.png", alt: "Red Scribble Sketch" },
    { id: 5, src: "G5.png", alt: "Green Scribble Sketch" },
    { id: 6, src: "G6.png", alt: "Pink Scribble Sketch" },
  ];

  const happyClients = [
    { id: 1, src: "testimonial1.webp", alt: "Client Portrait 1" },
    { id: 2, src: "testimonial2.webp", alt: "Client Portrait 2" },
    { id: 3, src: "testimonial3.webp", alt: "Client Portrait 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === happyClients.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [happyClients.length]);

  return (
    <div>
      {/* 🎨 Portrait Section */}
      <section className="bg-[#fefcf9] py-16 text-gray-800">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              <span className="text-orange-500">Order Portrait Paintings</span>{" "}
              & Custom Pencil Sketches in India
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto italic mb-6">
              100% Handmade · Photo to Sketch or Painting · Free Home Delivery ·
              Starting from{" "}
              <strong className="text-green-500">₹1199/-</strong> only
            </p>

            <ul className="text-gray-800 text-base max-w-1xl text-sm mx-auto space-y-2 list-disc list-inside text-left sm:text-center">
              <li>
                <strong>A Perfect, Unique and Memorable gift</strong> for your
                Loved-ones. Order Sketch Gift Now!
              </li>
              <li>
                Team of <strong>Best Sketch Artist</strong>,{" "}
                <strong>Best Portrait Drawing Artist</strong> and{" "}
                <strong>Best Painting Artist</strong> in India.
              </li>
              <li>
                Order <strong>Pencil Sketch</strong>,{" "}
                <strong>Portrait Drawing</strong>,{" "}
                <strong>Custom Painting</strong>,{" "}
                <strong>Photo to Painting</strong>,{" "}
                <strong>Custom Pet Portrait</strong> from photo.
              </li>
            </ul>
          </div>

          {/* Portrait Grid */}
          <h1 className="text-center text-3xl font-bold">
            <span className="text-black">Portrait</span>{" "}
            <span className="text-orange-500">Type</span>
          </h1>

          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {portraits.map((portrait, index) => (
              <div
                key={portrait.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={portrait.src}
                  alt={portrait.alt}
                  className="w-48 h-64 object-cover rounded-md border-4 border-[#e5e7eb] transition duration-300 hover:border-orange-400"
                />
                <p className="mt-4 text-sm text-gray-600 font-medium">
                  Scribble Pen Sketch · Custom Colors
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 Happy Clients Section */}
      <section className="bg-white py-16 text-gray-800">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              <span className="text-black">Happy Client</span>{" "}
              <span className="text-orange-500">= Our Goal</span>
            </h2>
          </div>

          {/* Auto Sliding Clients Work */}
          <div className="relative w-full max-w-md mx-auto overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {happyClients.map((client) => (
                <div
                  key={client.id}
                  className="min-w-full flex flex-col items-center"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="w-[300px] h-[300px] object-cover rounded-md border-4 border-[#e5e7eb] transition duration-300 hover:border-orange-400"
                  />
                  <p className="mt-4 text-sm text-gray-600 font-medium">
                    Client Artwork · Custom Sketch
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✨ Order Section (Guide) */}
      <section className="bg-white py-16 text-gray-800">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-lg text-gray-700 mb-4">
            Looking for a meaningful and personalized Gift? At{" "}
            <strong>CKARTISTIC</strong>, we specialize in creating,{" "}
            <strong>Photo to Sketch, handmade pencil sketches</strong> and{" "}
            <strong>custom portraits from your photos.</strong>
          </p>

          <p className="text-lg text-gray-700 mb-8">
            You can use these custom artworks as unique gifts for birthdays,
            anniversaries, weddings, or to decorate your Home. We deliver across
            India.
          </p>

          <h2 className="text-3xl font-bold mb-6">
            How to <span className="text-orange-500">Place Your Order ?</span>
          </h2>

          <div className="text-left sm:text-center space-y-3 text-base">
            <p>
              <span className="text-green-600 font-semibold">Step 1.</span> Choose
              your <span className="text-sky-600 font-semibold">Art Type</span>{" "}
              and <span className="text-sky-600 font-semibold">Size</span>
            </p>
            <p>
              <span className="text-green-600 font-semibold">Step 2.</span> Upload
              your <span className="text-sky-600 font-semibold">Photo</span> and{" "}
              <span className="text-sky-600 font-semibold">Shipping Address</span>
            </p>
            <p>
              <span className="text-green-600 font-semibold">Step 3.</span> Click
              on <span className="text-orange-500 font-semibold">Order Now</span>{" "}
              button, Make your payment &{" "}
              <strong className="text-black">Confirm</strong> the Order.
            </p>
          </div>

          <p className="mt-6 text-gray-700">
            And <strong>Relax : )</strong> Your Masterpiece 100% Handmade sketch
            will deliver to you in{" "}
            <strong className="text-black">5-7 Days</strong>. No hidden cost.{" "}
            <strong className="text-black">Delivery is Free</strong>, all across
            India.{" "}
            <span className="text-green-600 font-semibold">
              Call/ WhatsApp – 7982088153
            </span>
          </p>

          <a
            href="#"
            className="mt-6 inline-block text-green-600 font-semibold hover:underline"
          >
            Order Portrait <strong className="text-blue-500">Now!</strong>
          </a>
        </div>
      </section>

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
    </div>
  );
};

export default PortraitTypes;
