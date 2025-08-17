import React from 'react';
import { PenTool, Monitor, UserCheck } from 'react-feather'; // Feather icons

const Services = () => {
  const services = [
    {
      icon: <PenTool size={40} strokeWidth={1.5} className="text-white mb-6 mx-auto icon-glow" />,
      title: "GRAPHIC DESIGN",
      subtitle: "Starting from the concept up to the Final Result",
      desc: "Proin tempor nulla eget turpis blandit vulputate. Donec vitae libero justo. Cras ut est nec orci ultrices volutpat.",
      link: "#",
      linkLabel: "SEE GRAPHICS",
    },
    {
      icon: <Monitor size={40} strokeWidth={1.5} className="text-white mb-6 mx-auto icon-glow" />,
      title: "WEB DESIGN",
      subtitle: "Creating Websites that focused on Clients Needs",
      desc: "Proin tempor nulla eget turpis blandit vulputate. Donec vitae libero justo. Cras ut est nec orci ultrices volutpat.",
      link: "#",
      linkLabel: "SEE WEBSITES",
    },
    {
      icon: <UserCheck size={40} strokeWidth={1.5} className="text-white mb-6 mx-auto icon-glow" />,
      title: "USER EXPERIENCE",
      subtitle: "We analyze experience and <span class='text-yellow-400 font-semibold'>Achieve Results.</span>",
      desc: "Proin tempor nulla eget turpis blandit vulputate. Donec vitae libero justo. Cras ut est nec orci ultrices volutpat.",
      link: "#",
      linkLabel: "SEE PROJECTS",
    },
  ];

  return (
    <section
      className="bg-black text-white py-20"
      style={{
        backgroundImage: "url(https://promo-theme.com/luxa/wp-content/uploads/2019/03/bg-services.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black p-8 rounded-lg text-center border border-gray-800 hover:border-yellow-400 transition duration-300"
            >
              {/* Top Icon */}
              <div>{service.icon}</div>

              {/* Title */}
              <div className="uppercase text-sm tracking-widest text-yellow-400 font-semibold mb-2">
                {service.title}
              </div>

              {/* Subtitle */}
              <h5
                className="text-lg font-bold leading-snug mb-4"
                dangerouslySetInnerHTML={{ __html: service.subtitle }}
              ></h5>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-6">
                {service.desc}
              </p>

              {/* Link */}
              <a
                href={service.link}
                className="uppercase text-xs text-white underline hover:text-yellow-400 transition"
              >
                {service.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;