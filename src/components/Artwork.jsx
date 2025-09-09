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
    <section className="bg-white py-16 font-sans text-center border-b border-gray-200">
      
      <h2 className="text-2xl font-bold mb-2">
        All Available <span className="text-orange-500 ">Art Types</span>
      </h2>
      <p className="italic text-gray-700  text-sm mb-8">
        “Elevate Your Photos to Art: Discover the Beauty of Sketches with Our Professional Service!”
      </p>

      <div
        ref={sliderRef}
        className="mt-6 w-full h-[450px] flex overflow-x-hidden overflow-y-hidden rounded-lg scroll-smooth"
      >
      <div className="min-w-full flex items-center justify-center">
  <div className="relative">
    <img
      src="All.webp"
      alt="Charcoal sketch 1"
      className="w-[400px] h-[300px] object-cover rounded shadow-lg"
    />
    <p className="absolute bottom-2 right-2 text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
      Portrait type: charcoal Pencil Sketch
    </p>
  </div>
</div>

<div className="min-w-full flex items-center justify-center">
  <div className="relative">
    <img
      src="All1.webp"
      alt="Charcoal sketch 2"
      className="w-[400px] h-[300px] object-cover rounded shadow-lg"
    />
    <p className="absolute bottom-2 right-2 text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
      Portrait type: Colour Pencil Sketch
    </p>
  </div>
</div>

<div className="min-w-full flex items-center justify-center">
  <div className="relative">
    <img
      src="All2.webp"
      alt="Charcoal sketch 3"
      className="w-[400px] h-[300px] object-cover rounded shadow-lg"
    />
    <p className="absolute bottom-2 right-2 text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
      Portrait type: Blood Painting
    </p>
  </div>
</div>

      </div>
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
