const services = [
  {
      title: "Colour Pencil Sketch Portrait",
    subtitle: "Sketch Artist Online",
    img: "p1.png",
    rating: 5,
    desc: "Friends, getting a colour pencil portrait is very costly because it takes days and canvas work. It also demands more effort...",
  },
  {
    title: "Pencil Sketch",
    subtitle: "Pencil Sketch Artist Near Me",
    img: "p2.png",
    rating: 5,
    desc: "We make pencil sketches in black and white using cartridge paper with charcoal or color pencil. It’s affordable and quick...",
  },
  {
    title: "Realistic Pencil Portrait Artists",
    subtitle: "Painting Artist Near Me",
    img: "p3.png",
    rating: 4.5,
    desc: "Realism needs patience and detailing. We try to make realistic eyes, nose, hair, and expressions with depth and texture...",
  },
  {
    title: "Acrylic Colour Painting",
    subtitle: "Sketchatist",
    img: "p4.png",
    rating: 5,
    desc: "Acrylic dries fast, making it harder than oil painting. We use bold colors and brushwork to create vibrant, expressive art...",
  },
];
export default function OurServices() {
  return (
    <section className="py-20 bg-black">
      <h4 className="text-center text-sm font-bold uppercase tracking-wide text-yellow-400 mb-2">Art Work</h4>
      <h2 className="text-center text-white text-4xl font-serif font-bold mb-12">Our Services</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 bg-black sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {services.map((service, index) => (
          <div key={index} className="text-center text-white">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-80 object-cover rounded-lg shadow-md mb-4"
            />
            <div className="flex justify-center  mb-2">
              {[...Array(Math.floor(service.rating))].map((_, i) => (
                <span key={i} className="text-orange-400 text-xl">★</span>
              ))}
              {service.rating % 1 !== 0 && <span className="text-orange-400 text-xl">☆</span>}
            </div>
            <p className="text-sm text-gray-500 uppercase mb-1">{service.subtitle}</p>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm mb-3">{service.desc}</p>
            <a href="#" className="text-red-500 text-sm text-white font-medium hover:underline">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
}
