import sliderImages from "../data/SliderImages";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react"; 

const Slider = ({ title }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const handleClick = () => {
    navigate("/shop");
    window.scrollTo({ top: 0 });
  };

 useEffect(() => {
  const scrollContainer = scrollRef.current;
  if (!scrollContainer) return;

  let scrollInterval;

  const startScroll = () => {
    const speed = 1; // scroll speed
    const interval = 20; // ~50fps

    scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += speed;

        // Infinite scroll effect (reset when reaches half scrollWidth)
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth / 2
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, interval);
  };

  // check if all images are loaded
  const images = scrollContainer.querySelectorAll("img");
  let loadedCount = 0;

  const handleImageLoad = () => {
    loadedCount++;
    if (loadedCount === images.length) {
      startScroll();
    }
  };

  images.forEach((img) => {
    if (img.complete) {
      handleImageLoad();
    } else {
      img.addEventListener("load", handleImageLoad);
    }
  });

  return () => {
    clearInterval(scrollInterval);
    images.forEach((img) =>
      img.removeEventListener("load", handleImageLoad)
    );
  };
}, []);


  return (
    <section
      className="w-full py-10 bg-white"
      aria-labelledby="slider-title"
      role="region"
    >
      {/* Heading */}
      <h2
        id="slider-title"
        className="text-4xl font-extrabold text-center text-gray-900"
      >
        {title}
      </h2>

      {/* Subtext with arrow */}
      <div className="flex flex-col items-center mt-2 mb-6">
        <p className="text-sm text-gray-600">
          Click on image for more shops
        </p>
        <ChevronDown
          className="w-6 h-6 text-gray-500 mt-1 animate-bounce"
          aria-hidden="true"
        />
      </div>

      {/* Horizontal auto-scrolling container */}
      <div
        ref={scrollRef}
        className="flex gap-6 px-6 overflow-hidden flex-nowrap"
        aria-live="off"
      >
        {sliderImages.concat(sliderImages).map((img, index) => (
          <button
            key={index}
            onClick={handleClick}
            className="w-40 h-40 shrink-0 overflow-hidden rounded-lg focus:outline-none 
                       focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                       hover:shadow-lg transition duration-300"
            aria-label={`View artwork ${index + 1}`}
          >
            <img
              src={img}
              alt={`Artwork ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Slider;
