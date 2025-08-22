import React from 'react';

const Stats = () => {
  const stats = [
    { icon: "fas fa-file-alt", number: 3200, title: "Analyzed Scripts" },
    { icon: "fas fa-handshake", number: 280, title: "Realized Projects" },
    { icon: "fas fa-users", number: 120, title: "Loyal Customers" },
    { icon: "fas fa-object-group", number: 160, title: "Designed Brands" },
  ];

  return (
    <section className="bg-[#fefcf9] py-16 border-t border-b border-gray-200 text-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border border-gray-100 rounded-xl py-8 shadow-sm hover:shadow-md transition"
            >
              <i className={`${stat.icon} text-4xl text-yellow-500 mb-4`}></i>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <h6 className="text-lg font-medium text-gray-700">{stat.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;