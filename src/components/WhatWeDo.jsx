import React from 'react';

const WhatWeDoSection = () => {
  return (
    <section className="bg-white py-16 px-6 text-gray-800 font-sans">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">
        What <span className="text-orange-500">We Do</span> ?
      </h2>

      {/* Bullet Content */}
      <div className="max-w-5xl mx-auto text-[17px] leading-relaxed space-y-4">
        <ul className="list-disc list-inside space-y-4 marker:text-orange-500">
          <li>
            <strong>We create different paintings</strong> according to your requirement: watercolor portrait painting, color pencil sketch, coffee portrait painting, landscape painting, sentries, abstract paintings, pet painting, oil paintings on canvas, etc.
          </li>
          <li>
            <strong>Convert your precious photographs</strong> into hand-painted original portrait paintings — 100% hand-painted by professional artists.
          </li>
          <li>
            <strong>We also recreate existing artwork</strong> or make paintings from photographs as per your requirement.
          </li>
          <li>
            <strong>Special instructions?</strong> We can join different photos into one oil painting, enhance old or low-quality photos, and add beautiful sentries or custom backgrounds to your images.
          </li>
          <li>
            <strong>Custom sizes available:</strong> Contact us to order any custom size. We can create all art styles in any dimension.
          </li>
          <li>
            <strong>Multiple options available</strong> for portrait sketches and canvas oil paintings. If you still have any query, write to us here.
          </li>
          <li>
            <strong>We use premium quality materials</strong> — most of them Germany-imported: artist-grade pencils, thick sheets, canvas, colors, acrylic primer, charcoal pencils, charcoal powder, brushes, varnish, and more.
          </li>
          <li>
            <strong>Thoughtful process:</strong> Every portrait is crafted to be cherished for a lifetime.
          </li>
          <li>
            <strong>Note:</strong> You may find cheap sketches locally, but their life is short. They’re made on low-quality sheets that turn yellow in a few years.
          </li>
        </ul>

        {/* Guarantee Line */}
        <p className="mt-6 text-gray-700">
          <span className="font-semibold text-orange-600">Guarantee:</span> Our portraits are made to last for decades — with proper care, they retain their charm and richness over time.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDoSection;