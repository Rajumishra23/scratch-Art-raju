import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Dynamic cart count

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const menuItems = [
    {
      title: "Home",
      subItems: [
        { title: "Creative Studio", link: "#" },
        { title: "Design Agency", link: "/design-agency" },
        { title: "Photographer", link: "/photographer" },
        { title: "Product Page", link: "/product-page" },
        { title: "Portfolio Carousel", link: "/portfolio-carousel" },
        { title: "Freelancer", link: "/freelancer" },
        { title: "Shop One Screen", link: "/shop-one-screen" },
        { title: "Categories", link: "/categories" },
        { title: "Split Screen", link: "/split-screen" },
        { title: "Packery Portfolio", link: "/packery-portfolio" },
        { title: "Left Menu Portfolio", link: "/left-menu-portfolio" },
        { title: "Grid Portfolio", link: "/grid-portfolio" },
      ],
    },
    {
      title: "Pages",
      subItems: [
        { title: "404 Page", link: "/404-page" },
        { title: "About Me", link: "/about-me" },
        { title: "About Us", link: "/about-us" },
        { title: "Coming Soon", link: "/coming-soon" },
        { title: "Services", link: "/services" },
      ],
    },
    {
      title: "Gallery",
      subItems: [
        { title: "Carousel", link: "/gallery/carousel" },
        {
          title: "Grid",
          subItems: [
            { title: "Col 2", link: "/gallery/grid/col-2" },
            { title: "Col 3", link: "/gallery/grid/col-3" },
            { title: "Col 4", link: "/gallery/grid/col-4" },
          ],
        },
        { title: "Grid Type 2", link: "/gallery/grid-type-2" },
        {
          title: "Masonry",
          subItems: [
            { title: "Col 2", link: "/gallery/masonry/col-2" },
            { title: "Col 3", link: "/gallery/masonry/col-3" },
            { title: "Col 4", link: "/gallery/masonry/col-4" },
          ],
        },
        { title: "Left Menu Portfolio", link: "/left-menu-portfolio" },
        { title: "Packery Portfolio", link: "/packery-portfolio" },
        { title: "Slider", link: "/gallery/slider" },
        { title: "Split Screen", link: "/split-screen" },
        {
          title: "Project Pages",
          subItems: [
            { title: "Packery", link: "/project/heres-what-industry-insiders-say-about-business-cards" },
            { title: "Grid", link: "/project/master-the-skills-of-flower-and-be-successful" },
            { title: "Masonry", link: "/project/five-brilliant-ways-to-advertise-house" },
            { title: "Slider", link: "/project/brand-strategy" },
          ],
        },
      ],
    },
    {
      title: "Blog",
      subItems: [
        { title: "Blog Grid", link: "/blog-grid" },
        { title: "Blog Horizontal", link: "/blog-horizontal" },
        { title: "Blog Masonry", link: "/blog-masonry" },
      ],
    },
    {
      title: "Shop",
      subItems: [
        { title: "Cart", link: "/cart" },
        { title: "Checkout", link: "/checkout" },
        { title: "My Account", link: "/my-account" },
        { title: "Product List", link: "/shop" },
      ],
    },
    {
      title: "Contacts",
      subItems: [
        { title: "Contacts", link: "/contacts" },
        { title: "Contacts 2", link: "/contacts-2" },
      ],
    },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-blue-400">
          Scratch Art
        </Link>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Navigation */}
          <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <span className="cursor-pointer hover:text-blue-400">{item.title}</span>
                  {item.subItems && (
                    <ul className="absolute hidden group-hover:block bg-gray-900 text-white p-4 rounded shadow-lg z-50 min-w-[200px]">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="relative">
                          {subItem.subItems ? (
                            <>
                              <span className="block py-2 hover:text-blue-400">{subItem.title}</span>
                              <ul className="ml-4 mt-2 space-y-1">
                                {subItem.subItems.map((nestedItem, nestedIndex) => (
                                  <li key={nestedIndex}>
                                    <Link to={nestedItem.link} className="block py-1 hover:text-blue-400">
                                      {nestedItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link to={subItem.link} className="block py-2 hover:text-blue-400">
                              {subItem.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Cart + Search Combined */}
          <div className="flex items-center space-x-4 cursor-pointer hover:text-blue-400">
            {/* Cart Icon with Badge */}
            <div className="relative">
              <span className="text-xl">🛒</span>
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            </div>

            {/* Search Icon */}
            <span onClick={() => setIsSearchOpen(true)} className="text-xl">🔍</span>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer hover:text-blue-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </div>
        </div>
      </div>

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded shadow-lg w-full max-w-md animate-fade-in">
            <button className="absolute top-2 right-2 text-black" onClick={() => setIsSearchOpen(false)}>
              ❌
            </button>
            <input
              type="text"
              placeholder="Type and hit enter"
              className="w-full p-3 border rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;