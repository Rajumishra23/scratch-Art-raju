import React, { useEffect, useRef } from "react";

const Artwork = () => {
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
    <section className="bg-white py-10 sm:py-14 font-sans text-center border-b border-gray-200">
      {/* ✅ Heading */}
      <h2 className="text-lg sm:text-xl font-bold mb-2 px-4">
        All Available <span className="text-orange-500">Art Types</span>
      </h2>
      <p className="italic text-gray-700 text-[10px] sm:text-xs md:text-sm mb-6 px-4">
        “Elevate Your Photos to Art: Discover the Beauty of Sketches with Our Professional Service!”
      </p>

      {/* ✅ Slider */}
      <div
        ref={sliderRef}
        className="mt-6 w-full h-[420px] sm:h-[500px] md:h-[600px] flex overflow-x-hidden overflow-y-hidden rounded-lg scroll-smooth"
      >
        {/* Slide 1 */}
        <div className="min-w-full flex items-center justify-center">
          <div className="relative">
            <img
              src="All.webp"
              alt="Charcoal sketch 1"
              className="w-[320px] h-[240px] sm:w-[420px] sm:h-[320px] md:w-[520px] md:h-[400px] object-cover rounded shadow-lg"
            />
            <p className="absolute bottom-2 right-2 text-[8px] sm:text-[10px] md:text-xs font-bold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              Portrait type: Charcoal Pencil Sketch
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="min-w-full flex items-center justify-center">
          <div className="relative">
            <img
              src="All1.webp"
              alt="Charcoal sketch 2"
              className="w-[320px] h-[240px] sm:w-[420px] sm:h-[320px] md:w-[520px] md:h-[400px] object-cover rounded shadow-lg"
            />
            <p className="absolute bottom-2 right-2 text-[8px] sm:text-[10px] md:text-xs font-bold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              Portrait type: Colour Pencil Sketch
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="min-w-full flex items-center justify-center">
          <div className="relative">
            <img
              src="All2.webp"
              alt="Charcoal sketch 3"
              className="w-[320px] h-[240px] sm:w-[420px] sm:h-[320px] md:w-[520px] md:h-[400px] object-cover rounded shadow-lg"
            />
            <p className="absolute bottom-2 right-2 text-[8px] sm:text-[10px] md:text-xs font-bold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              Portrait type: Blood Painting
            </p>
          </div>
        </div>
      </div>

      {/* ✅ CTA */}
      <div className="mt-8 sm:mt-10 text-blue-600 text-xs sm:text-sm md:text-base font-medium">
        To know more{" "}
        <a href="#" className="underline hover:text-blue-800">
          Click Here
        </a>
      </div>
    </section>
  );
};

export default Artwork;
