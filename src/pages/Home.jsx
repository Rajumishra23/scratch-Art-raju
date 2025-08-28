import { useState } from "react";
import { useNavigate } from "react-router-dom";
import featuredImages from "../data/SliderImages";
import Gallery from "./Gallery";

const Home = () => {
  const navigate = useNavigate();
  const [showGallery, setShowGallery] = useState(false);

  const handleImageClick = () => {
    setShowGallery(true);
  };

  return (
    <section className="w-full py-10 bg-white space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-center mb-6">🎨 Featured Scratch Art</h2>
        <div className="flex overflow-x-auto gap-6 px-6">
          {featuredImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Featured ${index + 1}`}
              className="w-64 h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
              onClick={handleImageClick}
            />
          ))}
        </div>
      </div>

      {/* Gallery Rendered Below on Image Click */}
      {showGallery && (
        <div className="mt-12 px-6">
          <Gallery />
        </div>
      )}
    </section>
  );
};

export default Home;