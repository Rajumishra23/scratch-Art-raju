import React, { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Aarav Sharma",
    review: "I gifted a charcoal portrait to my dad — he got emotional. Rajesh’s work is pure magic.",
    rating: 5,
    avatar: "client1.png",
    post: "Charcoal Portrait",
  },
  {
    name: "Meera Kapoor",
    review: "The blood art was bold and unforgettable. Delivered on time, and beautifully packed.",
    rating: 4.5,
    avatar: "girl.png",
    post: "Blood Art",
  },
  {
    name: "Rishi Verma",
    review: "Pet portrait was so accurate, it felt alive. Highly recommend ScratchArt!",
    rating: 5,
    avatar: "client3.png",
    post: "Pet Portrait",
  },
];

const Testimonials = () => {
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
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="bg-[#fefcf9] text-black py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-wide mb-4">
            Customer <span className="text-orange-500">Review</span>
          </h1>
          <p className="text-[16px] md:text-[22px] italic text-gray-700 max-w-3xl mx-auto leading-relaxed">
            “Picture Perfect Pencil Portraits : Elevate Your Images with Our Photo to Sketch Expertise!”
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="w-full flex overflow-x-hidden overflow-y-hidden scroll-smooth"
        >
          {reviews.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center px-4"
            >
              {/* Card with Sketch Background */}
              <div
                className="relative bg-white p-6 max-w-md rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-300 text-center"
                style={{
                  backgroundImage: `url('bg.webp')`, // ✅ Replace with your actual image path
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Optional Overlay for readability */}
                <div className="absolute inset-0 bg-white/80 rounded-lg z-0"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="w-24 h-24 mx-auto rounded-full bg-cover bg-center mb-4 border border-gray-300"
                    style={{
                      backgroundImage: `url(${testimonial.avatar || "/default-avatar.jpg"})`,
                    }}
                  ></div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.review}"
                  </p>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-yellow-600">
                    {testimonial.post}
                  </div>
                  <div className="mt-2 text-yellow-500 text-lg">
                    {"⭐".repeat(Math.round(testimonial.rating))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;