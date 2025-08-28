import { useParams } from 'react-router-dom';
import ShopProducts from '../data/ShopProducts';

const ProductProfile = () => {
  const { id } = useParams();
  const product = ShopProducts.find((p) => p.id === Number(id)); // ✅ Convert string to number

  if (!product) {
    return (
      <div
        className="p-6 text-red-600 text-center font-semibold"
        role="alert"
        aria-live="assertive"
      >
        Product not found. Please check the link or return to the shop.
      </div>
    );
  }

  return (
    <main
      className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
      aria-labelledby="product-title"
    >
      {/* 🖼️ Product Image */}
      <div className="w-full h-full">
        <img
          src={`${product.image}`} // ✅ Make sure image path is correct
          alt={product.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-md"
          loading="lazy"
          role="img"
        />
      </div>

      {/* 📋 Product Details */}
      <div className="flex flex-col justify-center">
        <h1
          id="product-title"
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          {product.title}
        </h1>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {product.description || "No description available."}
        </p>
        <p className="text-xl text-gray-500 line-through">
          ₹{product.price}
        </p>
        <p className="text-2xl font-semibold text-green-600 mb-6">
          ₹{product.discountPrice}
        </p>
        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          aria-label={`Add ${product.title} to cart`}
        >
          {product.btn}
        </button>
      </div>
    </main>
  );
};

export default ProductProfile;