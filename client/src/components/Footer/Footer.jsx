import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full">
      {/* Newsletter Section */}
      <div className="bg-blue-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-white" />
              <h2 className="text-xl font-semibold">
                Sign Up to get Latest Updates
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded text-gray-700 bg-white placeholder-gray-500 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded whitespace-nowrap transition-colors">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-2 bg-yellow-400 rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Apollo Pools
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Established in 2012, Apollo Pools has emerged as a trusted name
                in the swimming pool industry, known for delivering excellence
                in both products and services.
              </p>
              <p className="text-gray-500 text-sm">
                Copyright © 2025 Apollo Pools. All rights reserved.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">
                Useful Link
                <div className="w-8 h-0.5 bg-teal-400 mt-2"></div>
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">›</span> HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">›</span> Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">›</span> Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">›</span> Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">›</span> Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">
                Services
                <div className="w-8 h-0.5 bg-teal-400 mt-2"></div>
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">›</span> SWIMMING POOL
                    CONSTRUCTION SERVICE
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">›</span> CIVIL SERVICE
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">›</span> SWIMMING POOL
                    SERVICE
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">›</span> COMMERCIAL BUILDING
                    CONSTRUCTION SERVICE
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">›</span> Cleaner
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">›</span> Service Experts
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">
                Contact Us
                <div className="w-8 h-0.5 bg-teal-400 mt-2"></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <div className="text-gray-600">
                    <p> 106 1st Floor 169 Anuradha Nagar Bypass Road,</p>
                    <p>Indore (MP) 452020</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <a
                    href="mailto:name@yourmail.com"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    apollopools0405@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <a
                    href="tel:+918224926377"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    +91 82249 26377{" "}
                    <span className="block">+91 98988 08051</span>
                  </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-2 pt-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Facebook className="w-5 h-5 text-black" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Twitter className="w-5 h-5 text-black" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-black" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Instagram className="w-5 h-5 text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
