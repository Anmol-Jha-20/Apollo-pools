import React, { useState } from "react";
import { Play } from "lucide-react";

export default function PoolMaintenanceSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        {/* Background image placeholder - simulating pool scene */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3ClinearGradient id="poolGradient" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23003d82"%3E%3C/stop%3E%3Cstop offset="50%25" style="stop-color:%230066cc"%3E%3C/stop%3E%3Cstop offset="100%25" style="stop-color:%2300a6d6"%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23poolGradient)"%3E%3C/rect%3E%3Cpath d="M800 400 Q900 350 1000 400 T1200 400 V800 H800 Z" fill="%23e6f3ff" opacity="0.3"%3E%3C/path%3E%3Ccircle cx="900" cy="200" r="50" fill="%23ffffff" opacity="0.1"%3E%3C/circle%3E%3Ccircle cx="1000" cy="150" r="30" fill="%23ffffff" opacity="0.1"%3E%3C/circle%3E%3C/svg%3E')`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
          {/* Play Button */}
          <div className="mb-8">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-full p-6 group">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </button>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl font-medium mb-4 tracking-wide">
            WE BUILD THE BEST POOLS
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Swimming Pool Maintenance & Cleaning
            <br />
            <span className="text-yellow-400">Get in Touch!</span>
          </h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Form */}
            <div>
              <div className="mb-6">
                <p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-2">
                  CONTACT US
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  Get a Free Quote
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-500 resize-vertical"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 uppercase tracking-wide"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column - Image and Stats */}
            <div className="space-y-8">
              {/* Pool Cleaner Image */}
              <div className="relative">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-80 sm:h-96">
                  {/* Placeholder image of pool cleaner */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Cdefs%3E%3ClinearGradient id="bg" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23f0f8ff"%3E%3C/stop%3E%3Cstop offset="100%25" style="stop-color:%23e6f3ff"%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="400" height="300" fill="url(%23bg)"%3E%3C/rect%3E%3Crect x="150" y="80" width="100" height="140" fill="%23333" rx="10"%3E%3C/rect%3E%3Ccircle cx="200" cy="120" r="25" fill="%23ffc107"%3E%3C/circle%3E%3Crect x="170" y="160" width="60" height="8" fill="%2300a6d6" rx="4"%3E%3C/rect%3E%3Crect x="280" y="180" width="80" height="6" fill="%23ff4757" rx="3"%3E%3C/rect%3E%3Ctext x="200" y="250" text-anchor="middle" fill="%23666" font-family="Arial" font-size="12"%3EPool Maintenance%3C/text%3E%3C/svg%3E')`,
                    }}
                  >
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-gray-600">
                        <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-full"></div>
                        </div>
                        <p className="font-medium">Professional Pool Cleaner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  We are trusted by more than
                  <br />
                  8900 clients
                </h3>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 uppercase tracking-wide underline">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
