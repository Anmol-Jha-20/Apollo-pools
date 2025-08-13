import React from "react";
import { motion } from "framer-motion";

const SwimmingPoolInterface = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left Side - Years of Experience Badge */}
          <motion.div className="flex-shrink-0" {...fadeInLeft}>
            <div className="hidden bg-blue-500 text-white p-6 lg:p-8 rounded-lg shadow-lg h-full md:flex lg:flex flex-col justify-center items-center text-center lg:w-48">
              <div className="transform -rotate-90 lg:rotate-0">
                <p className="text-sm lg:text-base font-medium tracking-widest mb-2 lg:mb-4">
                  YEARS OF EXPERIENCE
                </p>
                <p className="text-5xl lg:text-7xl font-bold">13</p>
              </div>
            </div>
          </motion.div>

          {/* Center - Main Images */}
          <motion.div className="flex-grow" {...fadeInUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              {/* Top Image - Pool Worker */}
              <div className="md:col-span-2 h-64 md:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Pool maintenance worker installing tiles"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bottom Left - Pool Cleaning */}
              <div className="h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://img.freepik.com/free-photo/pool_1308-5003.jpg?t=st=1755082252~exp=1755085852~hmac=4184b9a9c3ecbd8f388ed00532312585c3e25a06c3b7852ab41d8f274e6344f8&w=1060"
                  alt="Swimming pool cleaning equipment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bottom Right - Dark placeholder */}
              <div className="h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://img.freepik.com/free-photo/photo-modern-indoor-swimming-pool_23-2148326873.jpg?t=st=1755082442~exp=1755086042~hmac=faaefd406c692b91bb1c9751bd3554cac616bc1a49bf48d4bd3dc322ab770d12&w=1060"
                  alt="Swimming pool cleaning equipment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div className="flex-shrink-0 lg:w-96" {...fadeInRight}>
            <div className="space-y-6">
              {/* About Us Header */}
              <div>
                <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-2">
                  ABOUT US
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  We Are Swimming Pool Service Experts
                </h1>
                <div className="w-16 h-1 bg-blue-500 mt-4"></div>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Established in 2012, Apollo Pools has emerged as a trusted
                  name in the swimming pool industry, known for delivering
                  excellence in both products and services. As a dedicated
                  service provider and wholesaler, we specialize in a wide range
                  of premium-quality offerings including mosaic tiles, swimming
                  pool sand filters, and other essential pool equipment.
                </p>

                <p>
                  With over a decade of industry experience, we combine
                  technical expertise, reliable service, and top-grade materials
                  to meet the evolving needs of residential, commercial, and
                  recreational pool projects. Our commitment to quality,
                  innovation, and customer satisfaction has positioned us as a
                  preferred partner for pool construction, renovation, and
                  maintenance across the region.
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* <motion.div
        className="bg-gray-50 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pool Cleaning",
                desc: "Professional pool cleaning services",
              },
              {
                title: "Maintenance",
                desc: "Regular pool maintenance and care",
              },
              { title: "Repairs", desc: "Expert pool repair solutions" },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default SwimmingPoolInterface;
