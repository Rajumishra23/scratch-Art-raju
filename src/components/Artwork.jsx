import React, { useEffect, useRef, useState } from "react";

const Artwork = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      src: "All.webp",
      alt: "Charcoal sketch 1",
      label: "Portrait type: Charcoal Pencil Sketch",
    },
    {
      src: "All1.webp",
      alt: "Charcoal sketch 2",
      label: "Portrait type: Colour Pencil Sketch",
    },
    {
      src: "All2.webp",
      alt: "Charcoal sketch 3",
      label: "Portrait type: Blood Painting",
    },
  ];

  useEffect(() => {
    const slider = sliderRef.current;

    const slideInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
      if (slider) {
        slider.scrollTo({
          left: nextIndex * slider.offsetWidth,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [currentIndex, slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-2 sm:py-4 font-sans text-center border-b border-gray-200">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-bold mb-1">
        All Available <span className="text-orange-500">Art Types</span>
      </h2>
      <p className="italic text-gray-700 text-[10px] sm:text-xs md:text-sm mb-2">
        “Elevate Your Photos to Art: Discover the Beauty of Sketches with Our Professional Service!”
      </p>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="mt-2 w-full h-[220px] sm:h-[280px] md:h-[340px] flex overflow-x-hidden overflow-y-hidden rounded-lg scroll-smooth"
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="min-w-full flex items-center justify-center">
            <div className="relative">
              <img
  src={slide.src}
  alt={slide.alt}
  className="w-[200px] h-[140px] 
             sm:w-[260px] sm:h-[200px] 
             md:w-[340px] md:h-[250px] 
             object-cover rounded shadow-lg"
/>
              <p className="absolute bottom-1 right-1 text-[7px] sm:text-[9px] md:text-[11px] font-bold text-white bg-black bg-opacity-50 px-1 py-0.5 rounded">
                {slide.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-2 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2 h-2 rounded-full transition ${
              idx === currentIndex ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-2 text-black text-xs sm:text-sm md:text-base font-medium">
        To know more{" "}
        <a href="#" className="underline hover:text-blue-500 text-indigo-500">
          Click Here
        </a>
      </div>
    </section>
  );
};

export default Artwork;