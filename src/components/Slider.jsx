import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import sliderImages from "../data/SliderImages"; // Array of image URLs

const Slider = ({ title }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const handleClick = () => {
    navigate("/shop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1.5; // Gallery-style speed
    const interval = 16; // ~60fps

    const scrollInterval = setInterval(() => {
      scrollAmount += speed;
      scrollContainer.scrollLeft = scrollAmount;

      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0; // Reset like Gallery
      }
    }, interval);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section
      className="w-full py-10 bg-[#f3f4f6]"
      aria-labelledby="slider-title"
      role="region"
    >
      {/* Heading */}
      <h2
        id="slider-title"
        className="text-4xl font-extrabold text-center text-[#1e3a8a] "
      >
        {title}
      </h2>

      {/* Subtext with arrow */}
      <div className="flex flex-col items-center mt-2 mb-6">
        <p className="text-sm text-gray-600">(Click on any image for shops👇)</p>
        <ArrowDown
          className="w-6 h-6 text-gray-500 mt-1 animate-bounce"
          aria-hidden="true"
        />
      </div>

    {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 px-6 overflow-hidden flex-nowrap scroll-smooth scrollbar-hide"
        role="list"
        aria-live="off"
      >
        {sliderImages.concat(sliderImages).map((img, index) => (
          <button
            key={index}
            onClick={handleClick}
            className="min-w-[160px] w-40 h-40 shrink-0 overflow-hidden aspect-square focus:outline-none 
                       focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                       hover:shadow-lg transition duration-300"
            role="listitem"
            aria-label={`View artwork ${index + 1}`}
          >
            <img
              src={img}
              alt={`Artwork ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
              loading="lazy"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Slider;