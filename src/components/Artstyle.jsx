import Artist from "../assets/portfolio/artist.jpg"; // ✅ Update path as per your folder structure

export default function PencilSketchNearMe() {
  return (
    <section className="py-16 bg-black">
      <h4 className="text-center text-sm uppercase tracking-wide text-yellow-400  font-bold mb-2">
        Sketch Artist Near Me
      </h4>
      <h2 className="text-center text-3xl font-serif text-white font-bold mb-10">
        Pencil Sketch Artist Near Me
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Left Image Section */}
        <div className="relative">
          <img
            src={Artist}
            alt="Pencil Sketch Artist Near Me"
            className="rounded-lg shadow-lg border border-gray-200"
          />
        </div>

        {/* Right Text Section */}
        <div className="border border-blue-500 p-6 rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-serif font-bold mb-4">
            Pencil Artist Near Me – Sketch Artist Near Me
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Hello friends! I welcome all of you to my website Sketch Artist. I am a commission portrait artist with many years of experience. I have created many celebrity and live sketch portraits with great detail and passion.
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}