import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-white py-16 px-6 text-gray-800 font-sans">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">
        About <span className="text-orange-500">Us</span> ?
      </h2>

      {/* Bullet Content */}
      <div className="max-w-4xl mx-auto text-[17px] leading-relaxed space-y-4">
        <ul className="list-disc list-inside space-y-4 marker:text-orange-500">
          <li>
            <strong>Welcome to ScratchArt</strong>, where memories come to life on paper! Our expert artists specialize in transforming your cherished photographs into timeless sketches, adding a touch of artistic elegance to your precious moments. With meticulous attention to detail and a passion for creativity, we breathe new life into each image, capturing the essence and emotion behind every scene.
          </li>
          <li>
            <strong>Our skilled artists</strong> meticulously transform your visions into captivating sketches, ensuring each stroke captures the essence of your imagination. Whether it’s a cherished memory, a beloved pet, or a dreamy landscape, our service transforms concepts into timeless works of art.
          </li>
          <li>
            <strong>Immerse yourself in the world of artistry</strong> as we seamlessly blend technology with traditional craftsmanship. Our process ensures that each sketch reflects the unique qualities of your photos, creating personalized masterpieces that tell a story beyond pixels. Whether you want to commemorate a special occasion or simply elevate your favorite snapshots, our professional service is dedicated to turning ordinary images into extraordinary works of art.
          </li>
          <li>
            <strong>Rediscover the beauty of your memories</strong> with our photo to sketch service—where every stroke holds the power to transform moments into lasting impressions. Elevate your photos, embrace the artistry, and let your story unfold on the canvas of creativity!
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsSection;