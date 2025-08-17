import React, { useState, useEffect } from 'react';

const BannerSlider = () => {
  const banners = [
    {
      bg: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/bg1.jpg",
      subTitle: "LUXURY AGENCY",
      title: `Designed for you<br>Faster, easier and<br>Safer <span class='text-yellow-400'>than ever</span>`,
    },
    {
      bg: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/bg2.jpg",
      subTitle: "ABOUT US",
      title: `You push a button,<br>We do <span class='text-yellow-400'>the rest</span>`,
    },
    {
      bg: "https://promo-theme.com/luxa/wp-content/uploads/2019/03/bg3.jpg",
      subTitle: "CREATIVE DESIGN",
      title: `Our ultimate reward -<br>Our customer's <span class='text-yellow-400'>smile</span>`,
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden font-sans">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${banners[currentBanner].bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-20 text-white animate-fade-in">
          {/* Subtitle */}
          <div className="uppercase text-sm tracking-widest mb-4 text-yellow-400 font-semibold">
            {banners[currentBanner].subTitle}
          </div>

          {/* Title */}
          <h2
            className="text-[1.75rem] md:text-[2.5rem] font-bold leading-tight max-w-3xl"
            dangerouslySetInnerHTML={{ __html: banners[currentBanner].title }}
          ></h2>

          {/* Button */}
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 border border-white text-white px-6 py-2 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition"
          >
            Work With Us <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentBanner ? 'bg-yellow-400 scale-125' : 'bg-gray-500 hover:bg-yellow-400'
            }`}
            onClick={() => setCurrentBanner(index)}
          ></button>
        ))}
      </div>

      {/* Social Links */}
      <div className="absolute bottom-6 left-6 z-20 space-y-2 text-white text-sm font-light tracking-wide">
        <a href="#" className="hover:text-yellow-400">📘 <span className="ml-1">Facebook</span></a>
        <a href="#" className="hover:text-yellow-400">🐦 <span className="ml-1">Twitter</span></a>
        <a href="#" className="hover:text-yellow-400">📸 <span className="ml-1">Instagram</span></a>
      </div>
    </section>
  );
};

export default BannerSlider;