import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#fefcf9] py-16 text-gray-800">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-10">
          <span className="text-orange-500">About</span>{" "}
          <span className="text-gray-900">Us</span>
        </h2>

        {/* About Us */}
        <div className="space-y-6 text-base leading-relaxed text-gray-700 text-sm">
          <p>
            This is the official website of <strong>Team SCRATCH ART</strong>, based at Greater Noida. 
            We create paintings and sketches on order and demand. Our artists 
            have more than <strong>9 years of experience</strong>. 
          </p>
          <p>
            According to our artists, painting is not just colors on a canvas – 
            it’s like music which gives us hope, like a book carrying deep 
            messages. We paint in oil colors, watercolors, pencil colors, 
            acrylic, pastel, and more. Our style is mostly <strong>realistic</strong>, 
            and we always use premium quality art material.
          </p>
        </div>

        <div className="mt-12">
  <h3 className="text-2xl font-bold mb-4 text-center">
    <span className="text-orange-500">About</span> SCRATCHART.COM
  </h3>
</div>

          <p className="mb-4 text-sm">
            Welcome to <strong>SCRATCHART.COM</strong>, where imagination meets artistry! 
            We transform your photos into captivating sketches and timeless 
            paintings. From cherished memories to beloved pets, our custom 
            sketches add individuality and charm to your space.
          </p>
          <p className="mb-4 text-sm">
            With commitment to quality and a seamless ordering process, we make 
            your journey from inspiration to creation smooth and delightful.
          </p>
          <p className="mb-4 text-sm">
            SCRATCHART.COM is an online marketplace helping art lovers all over 
            India order customized portraits and sketches with free delivery. 
            Explore our gallery, order any type of painting, or customize your 
            own masterpiece.
          </p>
        </div>

        {/* Services & Offerings */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-center  ">Our Commitments</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm text-center">
            <li>
              <strong>Quality 🥇</strong> – We always use premium imported art 
              materials (artist-grade pencils, canvas, acrylic primers, brushes, etc.). 
              Our artworks last for decades.
            </li>
            <li>
              <strong>Uniqueness 💎</strong> – Every portrait is a unique masterpiece, 
              crafted with high-quality materials for long-lasting results.
            </li>
            <li>
              <strong>Affordability 🎨</strong> – 100% handmade paintings starting from{" "}
              <span className="text-green-600 font-semibold">₹1199/- only</span>.
            </li>
            <li>
              <strong>Service 🏆</strong> – With 9+ years of excellence, we 
              guarantee satisfaction and personal attention to every order.
            </li>
            <li>
              <strong>Safe & Easy Online Payment 💳</strong> – Pay securely via 
              Razorpay (Paytm, UPI, PhonePe, Google Pay, Cards, EMI, etc.).
            </li>
            <li>
              <strong>Free Home Delivery ✈️</strong> – All over India within{" "}
              <span className="text-black font-semibold">5–9 days</span>. 
              Only pay for the sketch/painting.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#order"
            className="inline-block px-6 py-3 bg-orange-500 text-center text-white text-sm font-bold rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Order Portrait Now!
          </a>
        </div>
      
    </section>
  );
};

export default AboutSection;
