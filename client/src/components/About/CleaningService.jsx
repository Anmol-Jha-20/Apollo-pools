import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Users, Award, Crown, Settings } from "lucide-react";

const CleaningServicesUI = () => {
  const stats = [
    { icon: Users, number: "84", label: "HAPPY CLIENTS" },
    { icon: Award, number: "13", label: "EXPERIENCE" },
    { icon: Crown, number: "45", label: "TEAM MEMBER" },
    { icon: Settings, number: "54", label: "EQUIPMENT" },
  ];

  const progressBars = [
    { label: "Equipment", percentage: 55 },
    { label: "Experience", percentage: 75 },
    { label: "Analysis", percentage: 90 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
    }),
  };

  return (
    <div
      style={{
        backgroundImage: `url(
          "https://abuhamdansmhgroup.com/wp-content/uploads/2024/07/Depositphotos_234107362_L.jpg"
        )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background Image Placeholder */}
      {/* <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-teal-600 to-blue-600 flex items-center justify-center">
          <div className="w-64 h-64 bg-white/20 rounded-2xl flex items-center justify-center">
            <Settings size={80} className="text-white/60" />
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Section */}
          <motion.div
            className="text-white space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                High Quality Cleaning
                <br />
                <span className="text-yellow-400">&</span> Maintenance Services
              </h1>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Mail size={24} className="text-gray-800" />
                </div>
                <span className="text-lg">apollopools0405@gmail.com</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Phone size={24} className="text-gray-800" />
                </div>
                <span className="text-2xl font-semibold">
                  (+91) 82249 26377
                </span>
              </div>
            </motion.div>

            {/* Progress Bars Section */}
            <motion.div className="space-y-6 mt-12" variants={itemVariants}>
              {progressBars.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">{item.label}</span>
                    <span className="text-lg font-bold">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-blue-400 h-2 rounded-full"
                      variants={progressVariants}
                      initial="hidden"
                      animate="visible"
                      custom={item.percentage}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-blue-600/90 backdrop-blur-sm p-8 rounded-2xl text-center text-white hover:bg-blue-500/90 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-400 p-4 rounded-2xl">
                    <stat.icon size={32} className="text-gray-800" />
                  </div>
                </div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm md:text-base font-medium tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-10 w-6 h-6 bg-blue-400 rounded-full opacity-40"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Mobile Responsive Adjustments */}
      <style>{`
        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CleaningServicesUI;
