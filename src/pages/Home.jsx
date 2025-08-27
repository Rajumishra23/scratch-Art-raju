import { useNavigate } from "react-router-dom";
import featuredImages from "../data/sliderImages";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-10 bg-white space-y-12">
      <div>
        <h2 className="text-4xl font-extrabold text-center mb-2 text-gray-900">
          🎨 Featured Scratch Art
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Tap any artwork to explore the full collection
        </p>

        <div className="flex gap-6 px-6 overflow-x-scroll scrollbar-hide scroll-smooth">
          {featuredImages.map((img, index) => (
            <div
              key={index}
              className="relative w-64 h-40 rounded-lg overflow-hidden cursor-pointer group shrink-0"
              onClick={() => navigate("/shop")}
            >
              <img
                src={img}
                alt={`Featured ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
               <p className="text-center text-gray-500 text-sm mb-6">
  Click any artwork to explore the shop
</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/shop")}
            className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;