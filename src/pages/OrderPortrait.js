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
  <br></br>
  <hr></hr>
</section>
<section className="w-full py-10 bg-white text-black">
  {/* 🔹 Top Features */}
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-1xl font-bold mb-4">
      <span className="text-orange-500">Features</span> of Your Sketch:-
    </h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
  <li>
    <span className="text-green-600 font-semibold">Home Delivery Across India:</span>{" "}
    Your pencil sketch drawing near me is conveniently delivered to your doorstep anywhere in India.
  </li>
  <li>
    <span className="text-green-600 font-semibold">Premium Quality Materials:</span>{" "}
    Crafted by pencil sketch artists near me using top-grade, artist-quality pencils, thick sheets, and premium supplies, ensuring your sketch is vibrant and long-lasting.
  </li>
  <li>
    <span className="text-green-600 font-semibold">100% Handmade by India’s Top Artists:</span>{" "}
    Every pencil sketch is meticulously handcrafted by the best pencil sketch artists and photo painting artists in India, delivering exceptional artistry and precision.
  </li>
  <li>
    <span className="text-green-600 font-semibold">No Artist Signature or Watermark:</span>{" "}
    Your photo sketch artist near me creation remains pure and personal, free from any artist signatures or watermarks, making it an ideal keepsake or gift.
  </li>
  <li>
    <span className="text-green-600 font-semibold">Personalized Craftsmanship:</span>{" "}
    Our sketch makers near me and portrait artists near me transform your photos into stunning pencil sketch drawings, capturing the essence of your memories with care and detail.
  </li>
  <li>
    <span className="text-green-600 font-semibold">Timeless and Unique:</span>{" "}
    Each pencil sketch drawing near me is a one-of-a-kind masterpiece, crafted to be cherished for a lifetime, perfect for gifting or decorating your space.
  </li>
</ul>

<p className="mt-2 text-gray-800 font-semibold">
  Order now and let our photo sketch artists near me create a custom pencil sketch that brings your vision to life with unparalleled creativity and quality!
</p>

  </div>

  {/* 🔹 Image / Price Chart Slider */}
  <div className="relative flex justify-center items-center py-10">
    {/* Left Arrow */}
    <button className="absolute left-4 text-gray-500 text-4xl">&#10094;</button>

    {/* Center Image Box (Price Chart Image) */}
    <div className="border rounded-xl shadow-lg overflow-hidden">
      <img
        src="image.webp"
        alt="Price Chart"
        className="max-h-[300px] object-contain"
      />
    </div>

    {/* Right Arrow */}
    <button className="absolute right-4 text-gray-500 text-4xl">&#10095;</button>
  </div>

  {/* 🔹 FAQ Section */}
  <div className="max-w-3xl mx-auto px-4 mt-8">
    <h3 className="font-bold mb-3">FAQ:-</h3>

   <p className="font-semibold">How can I track my order?</p>
<p className="text-gray-700 mb-4">
  After placing your order for a pencil sketch drawing near me, you will receive an Order Receipt via email. All updates regarding your pencil sketch or portrait drawing will be sent to your email for easy tracking.
</p>

<p className="font-semibold">Do you also make pet portraits?</p>
<p className="text-gray-700 mb-4">
  Yes, our portrait artists near me and photo sketch artists near me can create any type of portrait, including pet portraits, tailored to your requirements. Connect with us freely on WhatsApp to discuss your vision with our sketch makers near me.
</p>

<p className="font-semibold">Which type and size is perfect for gifting?</p>
<p className="text-gray-700 mb-4">
  The Realistic Charcoal Sketch in sizes A2 (16×24 inches) or A1 (24×32 inches) is the most popular and best choice for gifting. These pencil sketch drawings near me, crafted by our pencil sketch artists near me, make for a stunning and memorable gift.
</p>

<p className="font-semibold">Have more questions?</p>
<p className="text-gray-700">
  Contact our photo sketch artists near me or portrait makers near me today to order your custom pencil sketch and bring your memories to life!
</p>

  </div>
  <br></br>
  <hr></hr>
</section>
<section className="w-full py-10 bg-white text-center">
  {/* 🔹 Top small text */}
  <p className="text-orange-500 text-sm mb-2">
    # If you find this page useful, please share with your friends : )
  </p>

  {/* 🔹 Heading */}
  <h2 className="text-1xl md:text-2xl font-bold mb-6">
    What <span className="text-orange-500">we do ?</span>
  </h2>

  {/* 🔹 Description */}
  <div className="max-w-4xl mx-auto px-4 text-gray-700 space-y-6">
   <p>
  Our expert pencil sketch artists near me and portrait artists near me specialize in transforming your cherished photographs into timeless pencil sketch drawings near me, infusing artistic elegance into your precious moments. With meticulous attention to detail and a passion for creativity, our photo sketch artists near me breathe life into every image, capturing the essence of your memories. Whether it’s a beloved memory, a cherished pet, or a dreamy landscape, our sketch makers near me turn your concepts into timeless works of art.
</p>

<p className="mt-2">
  We create a variety of portrait drawings and photo sketches tailored to your requirements:
</p>

<ul className="list-disc pl-6 space-y-1 text-gray-700">
  <li>Charcoal Pencil Sketch</li>
  <li>Photo to Watercolor Painting</li>
  <li>Realistic Portrait Painting</li>
  <li>Color Pencil Sketch</li>
  <li>Landscape Painting</li>
  <li>Sentries</li>
  <li>Abstract Paintings</li>
  <li>Pet Painting</li>
  <li>Acrylic Color Paintings on Canvas</li>
</ul>

<p className="mt-2">
  Our portrait makers near me ensure each piece is crafted with precision, making your pencil sketch drawing near me a unique masterpiece. Want to know more about us?{" "}
  <span className="text-blue-600 underline cursor-pointer">Click Here to Order Your Portrait Now!</span>
</p>


<p className="mt-2">
  Our portrait makers near me ensure each piece is crafted with precision, making your pencil sketch drawing near me a unique masterpiece. Want to know more about us?{" "}
  <span className="text-blue-600 underline cursor-pointer">Click Here to Order Your Portrait Now!</span>
</p>

  </div>

  {/* 🔹 Bottom line */}
  <div className="max-w-5xl mx-auto mt-6 border-b border-gray-300"></div>
</section>
<section className="w-full py-6 bg-white text-center">
  
 {/* 🔹 Heading */}
<h2 className="text-1xl md:text-2xl font-bold mb-8 text-center">
  <span className="text-green-600">Why You Should</span>{" "}
  <span className="text-orange-500">Order a Portrait</span>{" "}
  <span className="text-green-600">from Us?</span>
</h2>
<hr className="mb-4" />

<div className="max-w-2xl mx-auto px-6 text-gray-700 space-y-10">
  {/* Quality */}
  <div>
    <h3 className="text-sm font-bold text-blue-900 mb-2">Quality</h3>
    <p>
      Our top priority is delivering exceptional quality for your pencil sketch drawing near me. We use only premium-quality materials, most of which are imported from Germany, including artist-grade pencils, thick sheets, canvas, colors, acrylic primer, charcoal pencils, charcoal powder, brushes, varnish, and more. Our thoughtful process ensures that every portrait drawing or pencil sketch created by our pencil sketch artists near me is a masterpiece you’ll cherish for a lifetime.
    </p>
    <p className="italic text-gray-600 mt-2">
      Note: While you may find cheaper sketches locally, their lifespan is short due to low-quality sheets that yellow within a few years. We guarantee that our photo sketches and portrait drawings, crafted by our photo sketch artists near me, will last for decades with proper care.
    </p>
  </div>

  {/* Uniqueness */}
  <div>
    <h3 className="text-sm font-bold text-blue-900 mb-2">Uniqueness</h3>
    <p>
      Each pencil sketch drawing near me is a unique masterpiece, handcrafted by our portrait artists near me and sketch makers near me. We never compromise on quality, ensuring that every portrait drawing is long-lasting, embossed with excellence, and 100% handmade. Our commitment to creating one-of-a-kind artwork makes every piece stand out as a true reflection of your memories.
    </p>
  </div>

  {/* Affordability */}
  <div>
    <h3 className="text-sm font-bold text-blue-900 mb-2">Affordability</h3>
    <p>
      Our pencil sketches and portrait drawings start at just <s>₹2000</s> now only <span className="text-green-600 font-semibold">₹1300/-</span>, making it affordable for everyone to own a masterpiece. Our photo sketch artists near me and portrait makers near me ensure that high-quality, 100% hand-painted portraits are accessible without breaking the bank. Bring home a stunning pencil sketch drawing near me at an unbeatable price!
    </p>
  </div>

  {/* Service */}
  <div>
    <h3 className="text-sm font-bold text-blue-900 mb-2">Service</h3>
    <p>
      Our customers are our priority, and we’ve been providing exceptional service for over 9 years, earning us the top rank on Google for sketch makers near me. Our portrait artists near me offer personalized attention to every order, ensuring you walk away with a piece of art you’ll treasure forever. We stand by our work with a satisfaction guarantee, delivering unmatched quality and care.
    </p>
  </div>

  {/* Safe and Easy Payment */}
  <div>
    <h3 className="text-sm font-bold text-blue-900 mb-2">Safe and Easy Online Payment</h3>
    <p>
      Make payments effortlessly and securely through our trusted payment partners, including <span className="text-blue-600 font-semibold">Razorpay</span> and PayPal. We support all major payment methods like Paytm, BHIM UPI, PhonePe, Google Pay, Card, NEFT, and more, ensuring a seamless experience for ordering your pencil sketch or portrait drawing.
    </p>
  </div>

  {/* Home Delivery */}
  <div>
    <h3 className="text-sm font-bold text-blue-900 mb-2">Home Delivery</h3>
    <p>
      We offer home delivery across India for your pencil sketch drawing near me or portrait drawing. Simply pay for the sketch, and we’ll take care of the rest. Our standard sizes make it easy to frame your artwork at any local market. Expect your pencil sketch or painting, crafted by our photo sketch artists near me, to reach you within 5-9 days.
    </p>
  </div>

  {/* Final Call to Action */}
  <div className="text-center mt-4">
    <span className="text-blue-600 underline cursor-pointer font-semibold">
      Order your portrait now and let our pencil sketch artists near me and portrait makers near me create a timeless masterpiece that captures your cherished moments!
    </span>
  </div>
</div>
</section>
<section className="w-full bg-white py-10 md:py-14">
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-6">
      <h2 className="text-1xl md:text-4xl font-extrabold">
        <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
          Testimonials
        </span>
      </h2>
      <div className="mt-3 inline-flex items-center gap-3">
        <img
          src="/googlereview.png"
          alt="Google Reviews"
          className="h-6 w-auto object-contain"
        />
        <div className="flex items-center gap-1">
          <span className="text-amber-500 text-xl">★</span>
          <span className="text-amber-500 text-xl">★</span>
          <span className="text-amber-500 text-xl">★</span>
          <span className="text-amber-500 text-xl">★</span>
          <span className="text-amber-500 text-xl">★</span>
        </div>
      </div>
    </div>

    {/* Review Card */}
    <div className="relative bg-gray-50 rounded-2xl shadow-xl p-6 md:p-8">
      <p className="text-gray-800 text-base md:text-lg leading-relaxed">
        “Great Artistic Work has Done Here! Impressive thing is every detail is carefully mentioned.
        Amazing hand of artist to make the frame live. Thank you, loved it! :)”
      </p>

      <div className="mt-5 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">
            SS
          </div>
          <div>
            <p className="font-semibold text-gray-900">Sathya Subha</p>
            <p className="text-sm text-gray-500">Chennai</p>
          </div>
        </div>

       <button>Want to see more Reviews? Click Here</button>


      </div>
    </div>

    {/* Gift Footer */}
    <div className="mt-6 text-center">
      <p className="text-sm md:text-base font-semibold">
        <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Perfect for:
        </span>{" "}
        <span className="text-gray-800">
          Birthday Gift, Valentine Gift, Wedding Gift, Engagement Gift, Anniversary Gift, Retirement Gift
        </span>
      </p>
      <p className="mt-2 text-green-600 text-sm md:text-base">
        If you like this page, please share with your friends
      </p>
    </div>
  </div>
</section>
    </div>
  );
};

export default PortraitTypes;
