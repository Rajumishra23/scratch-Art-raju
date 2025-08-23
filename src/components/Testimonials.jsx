import React, { useEffect, useRef } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "As important as strategy is, we have to execute to win. Execution involves every employee and every relation we have with customers. We must operate quickly on problems, drive results, not just activities.",
      name: "Conor Rashford",
      post: "Designer",
      avatar:
        "https://promo-theme.com/luxa/wp-content/uploads/2019/03/testimonials-img1.jpg",
    },
    {
      quote:
        "We never hesitate in our support, and we never lose sight of our main mission: serving our clients. Our job is to always make it easy for clients to do business with us and strive not only to meet their needs but also to exceed their expectations.",
      name: "Daren Noel",
      post: "CEO",
      avatar:
        "https://promo-theme.com/luxa/wp-content/uploads/2019/03/testimonials-img2.jpg",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      if (slider) {
        scrollAmount += slider.offsetWidth; // ek testimonial card ki width ke hisaab se slide
        if (scrollAmount >= slider.scrollWidth) {
          scrollAmount = 0; // reset first testimonial pe
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 4000); // 4 sec me slide change hoga

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
            “Picture Perfect Pencil Portraits: Elevate Your Images with Our Photo to Sketch Expertise!”
          </p>
        </div>

        {/* 🔹 Testimonials Slider */}
        <div
          ref={sliderRef}
          className="w-full flex overflow-x-hidden overflow-y-hidden scroll-smooth"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center px-4"
            >
              <div className="bg-white p-6 max-w-md rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-300 text-center">
                <div
                  className="w-24 h-24 mx-auto rounded-full bg-cover bg-center mb-4 border border-gray-300"
                  style={{ backgroundImage: `url(${testimonial.avatar})` }}
                ></div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-yellow-600">
                  {testimonial.post}
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
