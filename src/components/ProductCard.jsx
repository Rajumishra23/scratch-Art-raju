const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.title}</h3>
        <p className="text-gray-600 mt-2">₹{product.price}</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;