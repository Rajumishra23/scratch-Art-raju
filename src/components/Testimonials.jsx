import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "As important as strategy is, we have to execute to win. Execution involves every employee and every relation we have with customers. We must operate quickly on problems, drive results, not just activities.",
      name: "Conor Rashford",
      post: "Designer",
      avatar: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/testimonials-img1.jpg",
    },
    {
      quote:
        "We never hesitate in our support, and we never lose sight of our main mission: serving our clients. Our job is to always make it easy for clients to do business with us and strive not only to meet their needs but also to exceed their expectations.",
      name: "Daren Noel",
      post: "CEO",
      avatar: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/testimonials-img2.jpg",
    },
  ];

  return (
    <section className="bg-[#fefcf9] text-black py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="uppercase text-sm tracking-widest font-bold text-yellow-600">what clients say</div>
          <h3 className="text-3xl md:text-4xl font-bold">Testimonials</h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-300 text-center"
            >
              <div
                className="w-24 h-24 mx-auto rounded-full bg-cover bg-center mb-4 border border-gray-300"
                style={{ backgroundImage: `url(${testimonial.avatar})` }}
              ></div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="font-semibold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-yellow-600">{testimonial.post}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;