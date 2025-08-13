// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       title: "We Are The Best Swimming Pool Provider",
//       subtitle: "YOUR DREAM SWIMMING POOL",
//       buttonText: "READ MORE",
//       image:
//         "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//       alt: "Family enjoying swimming pool with children",
//     },
//     {
//       id: 2,
//       title: "Premium Pool Design & Installation",
//       subtitle: "LUXURY SWIMMING SOLUTIONS",
//       buttonText: "READ MORE",
//       image:
//         "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//       alt: "Modern luxury swimming pool with contemporary architecture",
//     },
//     {
//       id: 3,
//       title: "Transform Your Backyard Today",
//       subtitle: "PROFESSIONAL POOL SERVICES",
//       buttonText: "READ MORE",
//       image:
//         "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//       alt: "Beautiful residential swimming pool with landscaping",
//     },
//     {
//       id: 4,
//       title: "Create Memories That Last Forever",
//       subtitle: "FAMILY SWIMMING PARADISE",
//       buttonText: "READ MORE",
//       image:
//         "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//       alt: "Children playing in swimming pool with family",
//     },
//   ];

//   // Auto-play functionality
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   // Animation variants
//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//   };

//   const textVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         staggerChildren: 0.2,
//       },
//     },
//     exit: {
//       opacity: 0,
//       y: -50,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const childVariants = {
//     hidden: {
//       opacity: 0,
//       y: 30,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Images with Animation */}
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={currentSlide}
//           className="absolute inset-0 z-0"
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="relative h-full w-full">
//             <img
//               src={slides[currentSlide].image}
//               alt={slides[currentSlide].alt}
//               className="h-full w-full object-cover"
//               loading="lazy"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0"></div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Content */}
//       <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl text-center text-white">
//           <AnimatePresence mode="sync">
//             <motion.div
//               key={currentSlide}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="space-y-6"
//             >
//               {/* Subtitle */}
//               <motion.div variants={childVariants}>
//                 <span className="inline-block rounded-full bg-blue-500 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white sm:text-base">
//                   {slides[currentSlide].subtitle}
//                 </span>
//               </motion.div>

//               {/* Main Title */}
//               <motion.h1
//                 variants={childVariants}
//                 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
//               >
//                 {slides[currentSlide].title}
//               </motion.h1>

//               {/* CTA Button */}
//               <motion.div variants={childVariants} className="pt-4">
//                 <button className="group relative overflow-hidden bg-yellow-400 px-8 py-4 font-bold text-black transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-yellow-300">
//                   <span className="relative z-10">
//                     {slides[currentSlide].buttonText}
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//                 </button>
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white bg-opacity-20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 sm:left-6 lg:left-8"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white bg-opacity-20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 sm:right-6 lg:right-8"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-3 sm:bottom-8">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 sm:h-4 sm:w-4 ${
//               index === currentSlide
//                 ? "bg-white scale-125"
//                 : "bg-white bg-opacity-50 hover:bg-opacity-75"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Progress Bar */}
//       {/* <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-white bg-opacity-20">
//         <motion.div
//           className="h-full bg-yellow-400"
//           initial={{ width: "0%" }}
//           animate={{ width: "100%" }}
//           key={currentSlide}
//           transition={{
//             duration: 5,
//             ease: "linear",
//           }}
//         />
//       </div> */}
//     </div>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "We Are The Best Swimming Pool Provider",
      subtitle: "YOUR DREAM SWIMMING POOL",
      buttonText: "READ MORE",
      image:
        "https://img.freepik.com/free-photo/umbrella-chair_74190-2092.jpg?t=st=1755067204~exp=1755070804~hmac=a9b68375ba36fb0cba4e4f948fc2ddbfdb982af21d4cecf625c353789a196c1c&w=1060",
      alt: "Family enjoying swimming pool with children",
    },
    {
      id: 2,
      title: "Premium Pool Design & Installation",
      subtitle: "LUXURY SWIMMING SOLUTIONS",
      buttonText: "READ MORE",
      image:
        "https://img.freepik.com/free-photo/umbrella-pool-chair_74190-1704.jpg?t=st=1755067401~exp=1755071001~hmac=baac2fbab05c6cfd2491b16671088c1480da9d96296a29b15e5b5d12801171f7&w=1060",
      alt: "Modern luxury swimming pool with contemporary architecture",
    },
    {
      id: 3,
      title: "Transform Your Backyard Today",
      subtitle: "PROFESSIONAL POOL SERVICES",
      buttonText: "READ MORE",
      image:
        "https://img.freepik.com/free-photo/stair-swimming-pool-beautiful-luxury-hotel-pool-resort_1339-5455.jpg?t=st=1755067740~exp=1755071340~hmac=ddc84cfa280c9c2b96f6d6e239f79e00f6b3d170a2863f5ad22f4d923a6e2d32&w=1060",
      alt: "Beautiful residential swimming pool with landscaping",
    },
    {
      id: 4,
      title: "Create Memories That Last Forever",
      subtitle: "FAMILY SWIMMING PARADISE",
      buttonText: "READ MORE",
      image:
        "https://img.freepik.com/free-photo/umbrella-chair_1203-2579.jpg?ga=GA1.1.1470667879.1752126349&semt=ais_hybrid&w=740&q=80",
      alt: "Children playing in swimming pool with family",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Animation variants
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.9,
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Animation */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-0"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          <div className="relative h-full w-full">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center text-white">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              {/* Subtitle */}
              <motion.div variants={childVariants}>
                <span className="inline-block rounded-full bg-blue-500 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white sm:text-base">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                variants={childVariants}
                className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* CTA Button */}
              <motion.div variants={childVariants} className="pt-4">
                <button className="group relative overflow-hidden bg-yellow-400 px-8 py-4 font-bold text-black transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-yellow-300">
                  <span className="relative z-10">
                    {slides[currentSlide].buttonText}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white bg-opacity-20 p-3 text-black backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 sm:left-6 lg:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white bg-opacity-20 p-3 text-black backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 sm:right-6 lg:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-3 sm:bottom-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 sm:h-4 sm:w-4 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-white bg-opacity-20">
        <motion.div
          className="h-full bg-yellow-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          key={currentSlide}
          transition={{
            duration: 5,
            ease: "linear",
          }}
        />
      </div> */}
    </div>
  );
};

export default HeroSection;
