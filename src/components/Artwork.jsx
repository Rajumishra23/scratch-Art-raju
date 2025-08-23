import React, { useEffect, useRef } from "react";

const Artwork = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      if (slider) {
        scrollAmount += slider.offsetWidth; // ek image ki width ke hisaab se slide
        if (scrollAmount >= slider.scrollWidth) {
          scrollAmount = 0; // phir se first image pe aa jaaye
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000); // har 3 sec baad slide hoga

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="bg-white py-16 font-sans text-center border-b border-gray-200">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-2">
        All Available <span className="text-orange-500">Art Types</span>
      </h2>

      {/* Subtitle */}
      <p className="italic text-gray-700 mb-8">
        “Elevate Your Photos to Art: Discover the Beauty of Sketches with Our Professional Service!”
      </p>

      {/* 🔹 Image Slider */}
      <div
        ref={sliderRef}
        className="mt-6 w-full h-[450px] flex overflow-x-hidden overflow-y-hidden rounded-lg scroll-smooth"
      >
        {/* Image 1 */}
        <div className="min-w-full flex items-center justify-center">
          <img
            src="frame.webp"
            alt="Charcoal sketch 1"
            className="w-[500px] h-[400px]  object-cover rounded shadow-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="min-w-full flex items-center justify-center">
          <img
            src="frame1.webp"
            alt="Charcoal sketch 2"
            className="w-[500px] h-[400px]  object-cover rounded shadow-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="min-w-full flex items-center justify-center">
          <img
            src="frame2.webp"
            alt="Charcoal sketch 3"
            className="w-[500px] h-[400px] object-cover rounded shadow-lg"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-blue-600 text-[17px] font-medium">
        To know more{" "}
        <a href="#" className="underline hover:text-blue-800">
          Click Here
        </a>
      </div>
    </section>
  );
};

export default Artwork;
