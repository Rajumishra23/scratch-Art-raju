import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Magic of Scratch Art",
    summary: "How scratch art reveals hidden beauty with simple contrasts.",
    content:
      "Scratch art is a fascinating technique where dark surfaces are scratched away to reveal bright colors beneath. This simple yet powerful form of art plays with contrast, light, and negative space. Artists often use it to create dramatic landscapes, portraits, or abstract pieces. The beauty of scratch art lies in its ability to surprise — every stroke reveals something unexpected, making it feel alive.",
    image: "G1.png",
    link: "/blog/scratch-art",
  },
  {
    id: 2,
    title: "Pencil Art: The Power of Shades",
    summary: "Why pencil sketches remain timeless in the digital era.",
    content:
      "Pencil art is considered the foundation of drawing. From soft shading to bold strokes, pencils allow artists to express depth, mood, and fine details with ease. Whether it’s hyper-realistic portraits or simple line sketches, pencil art connects directly with emotions. The raw texture of graphite on paper creates a sense of authenticity that no digital medium can fully replicate.",
    image: "G2.png",
    link: "/blog/pencil-art",
  },
  {
    id: 3,
    title: "Scratch vs Pencil: Two Worlds of Expression",
    summary: "Comparing the bold surprises of scratch art with the subtlety of pencil sketches.",
    content:
      "Scratch art and pencil art might seem opposite, but both are rooted in contrast and expression. Scratch art is bold, dramatic, and high in visual impact, while pencil art is soft, detailed, and layered with emotions. Together, they show how artists use different mediums to express similar ideas — light, shadow, and storytelling.",
    image: "G3.png",
    link: "/blog/scratch-vs-pencil",
  },
    {
    id: 4,
    title: "Mastering Shading: 7 Pencil Techniques",
    summary: "From hatching to burnishing — learn the secrets to depth and realism.",
    content:
      "Shading turns flat lines into life. Start with light pressure and build layers. Use hatching for structure, cross-hatching for density, and stippling for texture. Try contour shading to follow form, and blending with tissue for smooth transitions. Reserve pure white for highlights and use kneaded erasers to lift light. With HB for sketching and 2B–6B for depth, your portraits and objects will gain convincing volume.",
    image: "G5.png",
    link: "/blog/pencil-shading-techniques",
  },
];

const BlogSection = () => {
  const [activeBlogId, setActiveBlogId] = useState(null);

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">🎨 Scratch Art Blogs</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              {post.title}
            </h3>
            <p className="text-gray-600 mt-2">{post.summary}</p>

            <button
              onClick={() =>
                setActiveBlogId(activeBlogId === post.id ? null : post.id)
              }
              className="mt-4 text-blue-600 hover:underline font-medium"
            >
              {activeBlogId === post.id ? "Hide Blog" : "Read More"}
            </button>

            {activeBlogId === post.id && (
              <div className="mt-6 text-gray-700 border-t pt-4">
                {post.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
