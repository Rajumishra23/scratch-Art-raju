import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/shopProduct/${product.id}`); 
  };

  return (
    <div
      className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      aria-label={`View details for ${product.title}`}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
        <p className="text-gray-600 mt-2">₹{product.price}</p>
        <button
          className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          onClick={(e) => {
            e.stopPropagation(); // Prevent parent click
            navigate(`/shopProduct/${product.id}`); // ✅ Same route
          }}
          aria-label={`Buy ${product.title}`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;