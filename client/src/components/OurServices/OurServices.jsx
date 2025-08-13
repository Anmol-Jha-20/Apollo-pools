// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Lightbulb,
//   Rocket,
//   Shield,
//   Users,
//   Zap,
//   Target,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: Lightbulb,
//       title: "Creative Solutions",
//       description:
//         "Innovative designs and strategies that bring your vision to life with cutting-edge creativity.",
//       features: ["Custom Design", "Brand Strategy", "Creative Consulting"],
//       color: "from-blue-500 to-blue-600",
//     },
//     {
//       icon: Rocket,
//       title: "Digital Marketing",
//       description:
//         "Accelerate your growth with data-driven marketing campaigns that deliver measurable results.",
//       features: ["SEO Optimization", "Social Media", "PPC Campaigns"],
//       color: "from-yellow-400 to-yellow-500",
//     },
//     {
//       icon: Shield,
//       title: "Web Development",
//       description:
//         "Robust, secure, and scalable web solutions built with the latest technologies and best practices.",
//       features: ["Responsive Design", "E-commerce", "Custom Development"],
//       color: "from-blue-600 to-blue-700",
//     },
//     {
//       icon: Users,
//       title: "Consulting Services",
//       description:
//         "Expert guidance and strategic insights to help your business navigate challenges and opportunities.",
//       features: ["Business Strategy", "Process Optimization", "Team Training"],
//       color: "from-yellow-500 to-yellow-600",
//     },
//     {
//       icon: Zap,
//       title: "Performance Optimization",
//       description:
//         "Maximize efficiency and speed with our comprehensive performance enhancement solutions.",
//       features: ["Speed Optimization", "Analytics", "Conversion Rate"],
//       color: "from-blue-500 to-blue-700",
//     },
//     {
//       icon: Target,
//       title: "Strategic Planning",
//       description:
//         "Comprehensive planning services that align your goals with actionable strategies for success.",
//       features: ["Market Analysis", "Goal Setting", "Implementation"],
//       color: "from-yellow-400 to-yellow-600",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 30,
//       scale: 0.95,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           variants={titleVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="inline-block"
//           >
//             <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-yellow-100 text-blue-800 text-sm font-semibold rounded-full mb-4 shadow-sm">
//               What We Offer
//             </span>
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             Explore Our
//             <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 bg-clip-text text-transparent">
//               Services
//             </span>
//           </h2>

//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Discover comprehensive solutions designed to elevate your business
//             and drive sustainable growth through innovation and expertise.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
//         >
//           {services.map((service, index) => {
//             const IconComponent = service.icon;
//             return (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{
//                   y: -10,
//                   transition: { duration: 0.3 },
//                 }}
//                 className="group relative"
//               >
//                 <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full relative overflow-hidden">
//                   {/* Hover gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

//                   {/* Content */}
//                   <div className="relative z-10">
//                     {/* Icon */}
//                     <div
//                       className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       <IconComponent className="w-8 h-8 text-white" />
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
//                       {service.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {service.description}
//                     </p>

//                     {/* Features */}
//                     <ul className="space-y-3 mb-6">
//                       {service.features.map((feature, featureIndex) => (
//                         <li
//                           key={featureIndex}
//                           className="flex items-center text-sm text-gray-600"
//                         >
//                           <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>

//                     {/* CTA Button */}
//                     <motion.button
//                       whileHover={{ x: 5 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/button"
//                     >
//                       Learn More
//                       <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="text-center mt-16"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg group"
//           >
//             Get Started Today
//             <motion.div whileHover={{ x: 5 }} className="ml-2">
//               <ArrowRight className="w-5 h-5" />
//             </motion.div>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/7/526852103/SC/AE/DD/66407342/swimming-pool-construction-in-indore-500x500.jpg",
      title: "Swimming Pool Construction Service",
      description:
        "Providing you the best range of Swimming Pool Maintenance Services in Indore, Swimming Pool Gratings, Trichloroisocyanuric Acid Tablet, Pool Accessory and Swimming Pool Chemicals with effective & timely delivery.",
      features: [
        "Timely Delivery",
        "Quality Materials",
        "Expert Maintenance",
        "Custom Designs",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/2/RW/YW/PD/66407342/civil-construction-service-500x500.jpeg",
      title: "Civil Construction Services",
      description:
        "At Apollo Pools, we specialize in delivering reliable and high-quality Civil Construction Services tailored to meet residential, commercial, and agricultural needs. Based in Indore, we offer a wide range of solutions including 1 BHK flat construction, farmhouse construction, and full-scale civil project execution.",
      features: [
        "Structural Integrity",
        "On-Time Delivery",
        "Quality Craftsmanship",
        "Affordable Solutions",
      ],
      color: "from-yellow-400 to-yellow-500",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/7/526863102/EO/WI/ZA/66407342/swimming-pool-cleaners-in-indore-500x500.webp",
      title: "Swimming Pool",
      description:
        "Our service range includes a wide range of Swimming Pool Construction in indore, Swimming Pool Steps in indore, Swimming Pool Cleaners in indore, Swimming Pool Waterproofing Services in indore, Swimming Pool Renovation in indore and Swimming Pool Heaters.",
      features: [
        "Premium Construction",
        "Modern Design",
        "Waterproof Finish",
        "Efficient Heating",
      ],
      color: "from-blue-600 to-blue-700",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/295033477/BR/QR/YP/66407342/bunglows-construction-services-500x500.jpeg",
      title: "Commercial Building Construction Service",
      description:
        "At Apollo Pools, we offer comprehensive Commercial Building Construction Services in Indore, tailored to meet the specific needs of businesses, institutions, and developers. Our expertise spans across a variety of projects, including school buildings, offices, and multi-storey commercial complexes. ",
      features: [
        "Robust Structures",
        "Timely Execution",
        "Cost-Effective",
        "End-to-End Solutions",
      ],
      color: "from-yellow-500 to-yellow-600",
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
              Services
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
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
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
