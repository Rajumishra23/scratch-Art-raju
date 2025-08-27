import sliderImages from "../data/SliderImages";
import { useNavigate } from "react-router-dom";

const SliderGrid = ({ title }) => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      
      {/* Grid container: 2 columns */}
      <div className="grid grid-cols-2 gap-6 px-6">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => {
              navigate("/shop");
              window.scrollTo({ top: 0 });
            }}
          >
            <div className="w-full aspect-[4/3]">
              <img
                src={img}
                alt={`Art ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SliderGrid;
