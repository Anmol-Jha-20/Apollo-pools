import React, { useState, useRef, useEffect } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Search,
  Menu,
  X,
  ChevronDown,
  Minus,
} from "lucide-react";
import Logo from "../../assets/ApolloLogoBlue.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const dropdownRef = useRef(null);

  // Menu data structure - exact same as in image
  const menuItems = {
    SERVICES: {
      categories: [
        "SWIMMING POOL CONSTRUCTION SERVICE",
        "CIVIL  SERVICE",
        "SWIMMING POOL SERVICE",
        "COMMERCIAL BUILDING CONSTRUCTION SERVICE",
      ],
    },
    PROJECTS: {
      categories: [
        "Filtration Equipment",
        "UNDERWATER LIGHT",
        "Maintenance Accessories",
        "Electromechanical Work",
        "Civil Works With Material",
      ],
    },
  };

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileActiveMenu(null);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
      {/* Top Bar */}
      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-blue-600" />
              <span>Call Us 24/7:</span>
              <span className="font-semibold">(+91) 8224926377</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-blue-600" />
              <span>106 1st Floor 169 Anuradha Nagar Bypass Road,</span>
              <span className="font-semibold">Indore (MP) 452020</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <Clock size={16} className="text-blue-600" />
            <span>Mon - Fri: 9.00 - 14.00</span>
            <span className="font-semibold">St - Sun: 9.00 - 16.00</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            {/* <div className="flex items-center">
              <div className="bg-white rounded-lg p-2 mr-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full relative">
                    <div className="absolute inset-1 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <span className="text-white text-xl font-bold">Apollo Pools</span>
            </div> */}
            <img
              src={Logo}
              alt="Logo"
              className="h-12 md:h-14 lg:h-16 w-auto object-contain rounded-full"
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
              >
                HOME
              </a>
              <a
                href="#"
                className="text-white font-semibold hover:text-yellow-300 transition-colors"
              >
                ABOUT
              </a>
              {/* <a
                href="#"
                className="text-white font-semibold hover:text-yellow-300 transition-colors"
              >
                PAGES
              </a> */}

              {/* Services Dropdown */}
              {/* <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("SERVICES")}
                onMouseLeave={handleMouseLeave}
                ref={dropdownRef}
              >
                <a
                  href="#"
                  className="text-white font-semibold hover:text-yellow-300 transition-colors flex items-center"
                >
                  SERVICES
                  <ChevronDown size={16} className="ml-1" />
                </a>

                {activeDropdown === "SERVICES" && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl border border-gray-200">
                    {menuItems.SERVICES.categories.map((category, idx) => (
                      <div
                        key={idx}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <a
                          href="#"
                          className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm font-medium group"
                        >
                          <span className="flex items-center">
                            <Minus
                              size={14}
                              className="mr-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            />
                            {category}
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div> */}

              {/* Projects Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("PROJECTS")}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="text-white font-semibold hover:text-yellow-300 transition-colors flex items-center"
                >
                  PRODUCTS
                  <ChevronDown size={16} className="ml-1" />
                </a>

                {activeDropdown === "PROJECTS" && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl border border-gray-200">
                    {menuItems.PROJECTS.categories.map((category, idx) => (
                      <div
                        key={idx}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <a
                          href="#"
                          className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm font-medium group"
                        >
                          <span className="flex items-center uppercase">
                            <Minus
                              size={14}
                              className="mr-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            />
                            {category}
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#"
                className="text-white font-semibold hover:text-yellow-300 transition-colors"
              >
                GALLERY
              </a>
              <a
                href="#"
                className="text-white font-semibold hover:text-yellow-300 transition-colors"
              >
                CONTACT US
              </a>
            </nav>

            {/* Social Icons and CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Facebook
                  size={18}
                  className="text-white hover:text-yellow-300 cursor-pointer transition-colors"
                />
                <Twitter
                  size={18}
                  className="text-white hover:text-yellow-300 cursor-pointer transition-colors"
                />
                <Linkedin
                  size={18}
                  className="text-white hover:text-yellow-300 cursor-pointer transition-colors"
                />
                <Instagram
                  size={18}
                  className="text-white hover:text-yellow-300 cursor-pointer transition-colors"
                />
              </div>
              <button className="bg-yellow-400 text-black px-6 py-2 font-semibold hover:bg-yellow-300 transition-colors">
                REQUEST A QUOTE
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={toggleMobileMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-600 border-t border-blue-500">
            <div className="px-4 py-2 space-y-1">
              <a href="#" className="block text-yellow-400 font-semibold py-2">
                HOME
              </a>
              {/* <a href="#" className="block text-white font-semibold py-2">
                PAGES
              </a> */}

              {/* Mobile Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white font-semibold py-2"
                  onClick={() => toggleMobileDropdown("SERVICES")}
                >
                  SERVICES
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileActiveMenu === "SERVICES" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileActiveMenu === "SERVICES" && (
                  <div className="pl-4 space-y-1">
                    {menuItems.SERVICES.categories.map((category, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="flex items-center text-blue-200 py-1 text-sm hover:text-white transition-colors"
                      >
                        {/* <Minus size={12} className="mr-2" /> */}
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Projects */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white font-semibold py-2"
                  onClick={() => toggleMobileDropdown("PROJECTS")}
                >
                  PRODUCTS
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileActiveMenu === "PROJECTS" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileActiveMenu === "PROJECTS" && (
                  <div className="pl-4 space-y-1">
                    {menuItems.PROJECTS.categories.map((category, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="flex items-center text-blue-200 py-1 text-sm hover:text-white transition-colors"
                      >
                        {/* <Minus size={12} className="mr-2" /> */}
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="block text-white font-semibold py-2">
                GALLERY
              </a>
              <a href="#" className="block text-white font-semibold py-2">
                CONTACT US
              </a>

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 py-3">
                <Facebook size={18} className="text-white" />
                <Twitter size={18} className="text-white" />
                <Linkedin size={18} className="text-white" />
                <Instagram size={18} className="text-white" />
                <Search size={18} className="text-white" />
              </div>

              <button className="w-full bg-yellow-400 text-black py-2 font-semibold mt-3">
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
