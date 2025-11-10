import { useLocation } from "react-router-dom";
import { useState } from "react";

const GalleryDetails = () => {
  const location = useLocation();
  const painting = location.state; // 👈 state se poora object aa raha hai
  const [mainImage, setMainImage] = useState(painting?.image);

  if (!painting) {
    return <p className="text-center text-red-500 mt-10">No artwork data found!</p>;
  }

  // 👇 Ek hi image ko 4 thumbnails ke liye repeat kar diya
  const thumbnails = [
    painting.image,
    painting.image,
    painting.image,
    painting.image,
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: Main Image + Thumbnails */}
        <div className="flex flex-col items-center">
          {/* Main Image */}
          <div className="w-full max-w-md mb-4">
            <img
              src={`/${mainImage}`}
              alt={painting.title}
              className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {thumbnails.map((thumb, idx) => (
              <img
                key={idx}
                src={`/${thumb}`}
                alt={`thumbnail-${idx}`}
                onClick={() => setMainImage(thumb)}
                className={`w-28 h-28 object-cover rounded-md border cursor-pointer hover:scale-110 transition ${
                  mainImage === thumb ? "border-blue-600" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Description */}
        <div className="flex flex-col justify-start">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {painting.title}
          </h1>

          {/* Ratings */}
          <div className="flex items-center mb-3">
            <span className="text-yellow-500">★★★★★</span>
            <span className="ml-2 text-sm text-gray-500">(100+ reviews)</span>
          </div>

          {/* ✅ WhatsApp Order Button */}
<a
  href="https://wa.me/917503602684?text=Hi%20I%20want%20to%20order%20this%20product:%20{product.title}"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 border border-green-500 bg-white text-green-600 font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-green-50 transition duration-300 w-fit mb-6"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.95 0-3.84-.52-5.5-1.5l-.39-.23-3.68.96.98-3.59-.25-.41A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0122 12c0 5.52-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.17.19-.34.21-.62.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.46.14-.15.19-.25.28-.42.09-.17.05-.32-.02-.46-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.49-.64-.5h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.26-.18-.54-.32z" />
  </svg>
  <span>ORDER ON WHATSAPP</span>
</a>


          {/* Price Section */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-500 line-through text-lg">
              ₹{painting.oldPrice}
            </span>
            <span className="text-green-600 font-bold text-2xl">
              ₹{painting.newPrice}
            </span>
            <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
              -50%
            </span>
          </div>

          {/* Offers & Discounts Slider */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Offers & Discounts:</p>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              <div className="min-w-[220px] bg-yellow-50 border border-yellow-300 rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-yellow-800 mb-1">Save Extra 10%</h4>
                <p className="text-sm text-gray-700">
                  Use Coupon Code <span className="font-bold">GALLERY</span>
                </p>
              </div>
              <div className="min-w-[220px] bg-green-50 border border-green-300 rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-green-800 mb-1">Bank Offer</h4>
                <p className="text-sm text-gray-700">
                  Get <span className="font-bold">5% Instant Discount</span> on Prepaid Orders
                </p>
              </div>
              <div className="min-w-[220px] bg-blue-50 border border-blue-300 rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-blue-800 mb-1">Festival Special</h4>
                <p className="text-sm text-gray-700">
                  Flat <span className="font-bold">₹200 OFF</span> on orders above ₹2000
                </p>
              </div>
            </div>
          </div>

          {/* Size Options */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Available Sizes:</p>
            <div className="flex gap-3">
              <button className="border px-3 py-1 rounded hover:bg-gray-100">19x24 Inch</button>
              <button className="border px-3 py-1 rounded hover:bg-gray-100">28x36 Inch</button>
              <button className="border px-3 py-1 rounded hover:bg-gray-100">36x48 Inch</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-blue-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition">
              Add to Cart
            </button>
            <button className="flex-1 bg-orange-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-500 transition">
              Buy Now
            </button>
          </div>

          {/* Delivery Info Box */}
          <div className="mb-6 p-4 border border-gray-500 rounded-lg shadow-sm bg-gray-50">
            <h3 className="font-semibold text-gray-800 mb-3">Delivery Information</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>🚚 FREE Delivery | Expected by <span className="font-semibold">Monday, 6 October</span></li>
              <li>🏭 Shipped from Delhi Factory</li>
              <li>💵 Pay on Delivery available</li>
              <li>🔄 Easy 7 days returns & exchanges</li>
            </ul>
          </div>

          {/* Extra Info Box */}
          <div className="mb-6 p-4 border border-blue-500 rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-gray-800 mb-3">Product Highlights</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔ Premium 380 GSM Cotton Canvas</li>
              <li>✔ Vibrant, fade-resistant colors</li>
              <li>✔ Trusted by 10,000+ customers</li>
            </ul>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
<div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
  <h3 className="font-semibold text-gray-800 mb-4">FAQs: Find Your Answers Fast</h3>
  <ul className="space-y-3 text-sm text-gray-700">
    <li>
      <p className="font-semibold">❓ Are these hand paintings?</p>
      <p className="ml-4 text-gray-600">Yes, all our artworks are crafted with premium quality and attention to detail.</p>
    </li>
    <li>
      <p className="font-semibold">❓ I need customisation. Can it be done?</p>
      <p className="ml-4 text-gray-600">Absolutely! We offer custom sizes and framing options on request.</p>
    </li>
    <li>
      <p className="font-semibold">❓ Do you have a return policy?</p>
      <p className="ml-4 text-gray-600">Yes, we provide easy 7‑day returns and exchanges for all artworks.</p>
    </li>
    <li>
      <p className="font-semibold">❓ Is COD available?</p>
      <p className="ml-4 text-gray-600">Yes, Cash on Delivery is available across most locations in India.</p>
    </li>
    <li>
      <p className="font-semibold">❓ Where are you based?</p>
      <p className="ml-4 text-gray-600">We are based in Delhi, and ship artworks pan‑India with free delivery.</p>
    </li>
  </ul>
</div>

    {/* Reviews Section */}
<div className="mt-12">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Review 1 */}
    <div className="p-5 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition">
      {/* Bada Image */}
      <img
        src="/God1.webp"
        alt="review-1"
        className="w-full h-56 object-cover rounded-md mb-3"
      />
      <p className="font-semibold">CHOUDHURY SANJUKT KUMAR DASH</p>
      <p className="text-yellow-500">★★★★★</p>
      <p className="text-sm text-gray-700 mt-2">
        The painting is excellent.
      </p>
    </div>

    {/* Review 2 */}
    <div className="p-5 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition">
      <img
        src="/God2.webp"
        alt="review-2"
        className="w-full h-56 object-cover rounded-md mb-3"
      />
      <p className="font-semibold">Taniri Prasad Patro</p>
      <p className="text-yellow-500">★★★★★</p>
      <p className="text-sm text-gray-700 mt-2">
        Looking gorgeous.
      </p>
    </div>

    {/* Review 3 */}
    <div className="p-5 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition">
      <img
        src="/God3.webp"
        alt="review-3"
        className="w-full h-56 object-cover rounded-md mb-3"
      />
      <p className="font-semibold">Dr. Chandana K</p>
      <p className="text-yellow-500">★★★★★</p>
      <p className="text-sm text-gray-700 mt-2">
        Safe packaging and delivery. The painting looks even better in real life!
      </p>
    </div>
  
</div>

  {/* Trusted Badge */}
  <div className="mt-8 text-center">
    <p className="text-gray-600 text-sm">
      ⭐ Trusted by <span className="font-bold">10,000+ Customers</span>
    </p>
  </div>
</div>
      </div>
    
  );
};

export default GalleryDetails;