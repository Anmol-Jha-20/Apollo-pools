import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import FiltrationEquipmentImage from "../../assets/filtrationEquipmentOne.png";
import UnderwaterLightImage from "../../assets/underwaterlightone.png";
import SuctionHeadImage from "../../assets/suctionheadone.png";
import ElectromechanicalWork from "../../assets/electromechanicalworktwo.png";
import civilworksimage from "../../assets/civilworkstwo.png";

const ServicesSection = () => {
  const services = [
    {
      image: FiltrationEquipmentImage,
      title: "Filtration Equipment",
      description:
        "Established in 2012, Apollo Pools has emerged as a trusted name in the swimming pool industry, offering end-to-end solutions with a focus on quality, innovation, and customer satisfaction. Among our core offerings, filtration equipment stands out as a hallmark of our commitment to excellence.",
      features: [
        "Timely Delivery",
        "Quality Materials",
        "Expert Maintenance",
        "Custom Designs",
      ],
      color: "white",
    },
    {
      image: UnderwaterLightImage,
      title: "Underwater Light",
      description:
        "At Apollo Pools, we understand that lighting is not just a feature—it's an experience. Our range of underwater lights is designed to elevate the ambiance, safety, and aesthetic appeal of swimming pools, water features, and fountains. Crafted with cutting-edge LED technology and superior waterproofing standards, our underwater lights offer vibrant illumination, energy efficiency, and long-lasting performance.",
      features: [
        "Structural Integrity",
        "On-Time Delivery",
        "Quality Craftsmanship",
        "Affordable Solutions",
      ],
      color: "white",
    },
    {
      image: SuctionHeadImage,
      title: "Maintenance Accessories",
      description:
        "At Apollo Pools, we provide a comprehensive range of maintenance accessories designed to keep your pool clean, safe, and operating at peak performance all year round. Our products are selected to meet the highest standards of quality, durability, and ease of use—ensuring hassle-free pool care for both residential and commercial settings.",
      features: [
        "Premium Construction",
        "Modern Design",
        "Waterproof Finish",
        "Efficient Heating",
      ],
      color: "white",
    },
    {
      image: ElectromechanicalWork,
      title: "Electromechanical Work",
      description:
        "At Apollo Pools, we specialize in delivering high-quality electromechanical solutions that form the backbone of every efficient and long-lasting swimming pool system. Our services cover the complete supply, installation, and commissioning of pumps, filtration systems, piping, electrical panels, underwater lighting, and automation systems.",
      features: [
        "Robust Structures",
        "Timely Execution",
        "Cost-Effective",
        "End-to-End Solutions",
      ],
      color: "white",
    },
    {
      image: civilworksimage,
      title: "Civil Works With Material",
      description:
        "Apollo Pools offers complete civil construction services with material, tailored to the structural and aesthetic needs of each pool project. Our scope includes excavation, RCC structure, tiling, coping, waterproofing, and decking—all executed using high-quality materials and skilled workmanship. We handle every stage of construction with a focus on durability, safety, and design appeal, ensuring the pool structure not only looks stunning but also withstands time and usage.",
      features: [
        "Robust Structures",
        "Timely Execution",
        "Cost-Effective",
        "End-to-End Solutions",
      ],
      color: "white",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-yellow-100 text-blue-800 text-sm font-semibold rounded-full mb-4 shadow-sm">
              What We Offer
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Explore Our
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover comprehensive solutions designed to elevate your business
            and drive sustainable growth through innovation and expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full relative">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                  {/* Service Image */}
                  <div className="relative md:h-96 h-56 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=${encodeURIComponent(
                          service.title
                        )}`;
                      }}
                    />
                    {/* Gradient overlay on image */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/button"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg group"
          >
            Get Started Today
            <motion.div whileHover={{ x: 5 }} className="ml-2">
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>

        </motion.div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
