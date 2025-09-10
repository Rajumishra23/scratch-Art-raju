import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Magic of Scratch Art",
    summary: "How scratch art reveals hidden beauty with simple contrasts.",
    content:
      "Scratch art is a fascinating technique where dark surfaces are scratched away to reveal bright colors beneath. This simple yet powerful form of art plays with contrast, light, and negative space. Artists often use it to create dramatic landscapes, portraits, or abstract pieces. The beauty of scratch art lies in its ability to surprise — every stroke reveals something unexpected, making it feel alive.",
    image: "blog4.webp",
    link: "/blog/scratch-art",
  },
  {
    id: 2,
    title: "Pencil Art: The Power of Shades",
    summary: "Why pencil sketches remain timeless in the digital era.",
    content:
      "Pencil art is considered the foundation of drawing. From soft shading to bold strokes, pencils allow artists to express depth, mood, and fine details with ease. Whether it’s hyper-realistic portraits or simple line sketches, pencil art connects directly with emotions. The raw texture of graphite on paper creates a sense of authenticity that no digital medium can fully replicate.",
    image: "blog5.webp",
    link: "/blog/pencil-art",
  },
  {
    id: 3,
    title: "Scratch vs Pencil: Two Worlds of Expression",
    summary: "Comparing the bold surprises of scratch art with the subtlety of pencil sketches.",
    content:
      "Scratch art and pencil art might seem opposite, but both are rooted in contrast and expression. Scratch art is bold, dramatic, and high in visual impact, while pencil art is soft, detailed, and layered with emotions. Together, they show how artists use different mediums to express similar ideas — light, shadow, and storytelling.",
    image: "blog2.webp",
    link: "/blog/scratch-vs-pencil",
  },
  {
    id: 4,
    title: "Mastering Shading: 7 Pencil Techniques",
    summary: "From hatching to burnishing — learn the secrets to depth and realism.",
    content:
      "Shading turns flat lines into life. Start with light pressure and build layers. Use hatching for structure, cross-hatching for density, and stippling for texture. Try contour shading to follow form, and blending with tissue for smooth transitions. Reserve pure white for highlights and use kneaded erasers to lift light. With HB for sketching and 2B–6B for depth, your portraits and objects will gain convincing volume.",
    image: "blog3.webp",
    link: "/blog/pencil-shading-techniques",
  },
];

const BlogSection = () => {
  const [activeBlogId, setActiveBlogId] = useState(null);

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12">
      {/* ✅ Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 text-gray-900">
        🎨 Scratch Art Blogs
      </h2>

      {/* ✅ Grid layout */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="border rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition bg-white flex flex-col"
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-44 sm:h-56 object-cover rounded-lg mb-4"
            />

            {/* Title */}
            <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">
              {post.title}
            </h3>

            {/* Summary */}
            <p className="text-gray-600 mt-2 text-sm sm:text-base flex-grow">
              {post.summary}
            </p>

            {/* Button */}
            <button
              onClick={() =>
                setActiveBlogId(activeBlogId === post.id ? null : post.id)
              }
              className="mt-4 text-blue-600 hover:underline font-medium self-start"
            >
              {activeBlogId === post.id ? "Hide Blog" : "Read More"}
            </button>

            {/* Expandable Content with Animation */}
            <AnimatePresence>
              {activeBlogId === post.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 text-gray-700 text-sm sm:text-base border-t pt-4"
                >
                  {post.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
