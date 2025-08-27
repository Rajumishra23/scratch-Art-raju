import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      if (slider) {
        scrollAmount += slider.offsetWidth; 
        if (scrollAmount >= slider.scrollWidth) {
          scrollAmount = 0; 
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="bg-white pt-3 pb-6 border-b border-gray-200 font-sans">
      <div className="max-w-3xl mx-auto px-6 text-center text-gray-800">
{/* Heading */}
<h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-2">
  Order Portrait Paintings & Custom{" "}
  <span className="text-orange-600">Pencil Sketches in India</span>
</h1>

{/* First List */}
<ul className="list-disc pl-5 text-[15px] leading-tight tracking-tight text-left">
  <li>
    Turn your precious photos into breathtaking art with{" "}
    <strong>Sketch Artist with Portrait Painting</strong>! Get 100%{" "}
    <strong>Handmade Pencil Sketches</strong>,{" "}
    <strong>Photo to Sketch</strong>, or{" "}
    <strong>Photo to Portrait Painting</strong> — perfect for gifting or home decor.
  </li>
  <li>
    Starting at just{" "}
    <span className="text-blue-600 font-semibold">₹1,199</span> with{" "}
    <span className="text-gray-900 font-semibold">free home delivery</span> across India.
  </li>
  <li>
    Based in{" "}
    <span className="font-semibold">Sarojini Nagar, Pilanji Village, Delhi</span>, visit our studio or book online.
  </li>
</ul>

{/* Quote */}
<p className="italic text-gray-700 text-[14px] leading-tight tracking-tight mt-2">
  “<span className="font-semibold">Sketch Your Story:</span> Transform Ordinary Photos into Timeless Art!”
</p>

{/* Second List */}
<ul className="list-disc pl-5 text-[15px] leading-tight tracking-tight text-left mt-2">
  <li>
    <strong>Our Services:</strong> Pencil Art Drawings, Charcoal Portraits, Blood Art Paintings, Custom Pet Portraits & more.
  </li>
  <li>
    <strong>Affordable Pricing:</strong> Pencil Sketches from ₹1,299, Portrait Commissions from ₹5,000.
  </li>
  <li>
    <strong>Fast Delivery:</strong> Same-day in Delhi (extra for framing/courier), global shipping available.
  </li>
  <li>
    <strong>Live Art:</strong> Visit us at Delhi Haat or book a{" "}
    <span className="text-indigo-600 font-semibold">free online consultation</span>.
  </li>
  <li>
    <strong>Perfect Gift:</strong>{" "}
    <em>Birthday, Anniversary, Wedding, Retirement, Valentine’s Day</em> — make it unforgettable.
  </li>
  <li>
    <strong>Contact Us:</strong>{" "}
    <span className="text-green-600 font-semibold">+91 7503602684</span> via{" "}
    <span className="text-indigo-600 font-semibold">WhatsApp</span> or our website.
  </li>
</ul>

{/* Quote 2 */}
<p className="italic text-gray-700 text-[14px] leading-tight tracking-tight mt-2">
  “<span className="font-semibold">Capturing Moments, Creating Masterpieces:</span> Your Photos Transformed into{" "}
  <span className="text-green-600 font-semibold">Stunning Sketches!</span>”
</p>

        {/* 🔹 Image Slider */}
        <div
          ref={sliderRef}
          className="mt-4 w-full h-64 flex overflow-x-hidden overflow-y-hidden rounded-lg scroll-smooth"
        >
          <div className="min-w-full flex items-center justify-center">
            <img
              src="front.webp"
              alt="Image 1"
              className="w-[400px] h-[260px] object-cover"
            />
          </div>
          <div className="min-w-full flex items-center justify-center">
            <img
              src="front2.webp"
              alt="Image 2"
              className="w-[400px] h-[260px] object-cover"
            />
          </div>
          <div className="min-w-full flex items-center justify-center">
            <img
              src="front3.webp"
              alt="Image 3"
              className="w-[400px] h-[260px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
