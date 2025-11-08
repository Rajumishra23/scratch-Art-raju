import React from "react";
import Gallery from "../components/Gallery";
import Blog from "../components/Blog";
import BannerSlider from "../components/BannerSlider";
import Artwork from "../components/Artwork";
import AboutUs from "../components/AboutUs";
import WhatWeDo from "../components/WhatWeDo";
import Testimonials from "../components/Testimonials";
import Slider from "../components/Slider";
import PrivacyPolicy from "../components/PrivacyPolicy";
import DemoSlider from "../components/DemoSlider";



const Home = () => {
  return (
    <div className="font-poppins relative w-full bg-white">
      {/* Navigation */}
      <BannerSlider/>
      <Artwork/>
      <Slider/>
      <AboutUs/>
      <DemoSlider/>
      <WhatWeDo/>
      <Testimonials/>
      <Gallery />
      <Blog />
      <PrivacyPolicy/>
    </div>
  );
};

export default Home;
