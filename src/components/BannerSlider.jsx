import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      if (slider) {
        scrollAmount += slider.offsetWidth; // ek image ki width ke hisaab se slide
        if (scrollAmount >= slider.scrollWidth) {
          scrollAmount = 0; // fir se pehli image pe
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000); // 3 sec ke baad slide

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="bg-white py-16 border-b border-gray-200 font-sans">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6 text-gray-800">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Order Your Personalize{" "}
          <span className="text-orange-600">Sketch/ Portrait Painting online</span>
        </h1>

        {/* First List */}
        <ul className="list-disc pl-6 text-[17px] space-y-2 text-left">
          <li>
            Convert Your <strong>Photo to sketch</strong>, <strong>Photo to Pencil Sketch</strong> 
            or <strong>Photo to Portrait Painting</strong> online, with 
            <span className="text-gray-900 font-semibold"> free Home delivery </span>all over India. 
            Price starting <span className="text-blue-600 font-semibold">@1599 only.</span>
          </li>
          <li>
            <strong>Team</strong> of Best Sketch Artist, Best Portrait Drawing Artist and Best Painting Artist in India.
          </li>
          <li>
            A <span className="text-green-600 font-semibold">Perfect, unique and Memorable gift</span> 
            for your <span className="italic">special-one</span>, surprise him/her with his/her sketch/portrait Painting.
          </li>
        </ul>

        {/* Quote */}
        <p className="italic text-gray-700 text-[16px]">
          “<span className="font-semibold">Sketch Your Story:</span> Turn Ordinary Photos into Extraordinary Art with Our Premium Service!”
        </p>

        {/* Second List */}
        <ul className="list-disc pl-6 text-[17px] space-y-2 text-left">
          <li>
            <strong>Picture Perfect Pencil Portraits:</strong> Elevate Your Images with Our Photo to Sketch Expertise!
          </li>
          <li>
            For Any Inquiry feel free to{" "}
            <span className="font-semibold">Call Us</span> or{" "}
            <span className=" font-semibold">
              <strong className="text-indigo-600">WhatsApp</strong> <strong>us on</strong>{" "}
              <strong className="text-green-600">123346767</strong>
            </span>{" "}
            or write us here.
          </li>
          <li>
            Perfect for <em>Birthday Gift, Wedding Gift, Anniversary Gift, Engagement Gift, Retirement Gift, Valentine Gift…</em>
          </li>
        </ul>

        {/* Quote 2 */}
        <p className="italic text-gray-700 text-[16px]">
          “<span className="font-semibold">Capturing Moments, Creating Masterpieces:</span> 
          Your Photos Transformed into <span className="text-green-600 font-semibold">Stunning Sketches!</span>”
        </p>

        {/* 🔹 Image Slider */}
        <div
          ref={sliderRef}
          className="mt-6 w-full h-72 flex overflow-x-hidden overflow-y-hidden rounded-lg scroll-smooth"
        >
          {/* Image 1 */}
          <div className="min-w-full flex items-center justify-center">
            <img
              src="front1.webp"
              alt="Image 1"
              className="w-[500px] h-[300px] object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="min-w-full flex items-center justify-center">
            <img
              src="frontS.webp"
              alt="Image 2"
              className="w-[500px] h-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="min-w-full flex items-center justify-center">
            <img
              src="frontS3.webp"
              alt="Image 3"
              className="w-[500px] h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
