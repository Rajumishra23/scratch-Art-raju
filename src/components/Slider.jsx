import sliderImages from "../data/SliderImages";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Slider = ({ title }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1.5; // speed adjust
        scrollContainer.scrollLeft = scrollAmount;

        // Infinite scroll effect
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
      }
    }, 16); // ~60fps smooth scroll

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="w-full py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      <div
        ref={scrollRef}
        className="flex gap-6 px-6 overflow-hidden flex-nowrap"
      >
        {sliderImages.concat(sliderImages).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Art ${index + 1}`}
            className="w-64 h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition duration-300 shrink-0"
            onClick={() => {
              navigate("/shop");
              window.scrollTo({ top: 0, });
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;