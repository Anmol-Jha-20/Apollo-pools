import React from "react";
import Header from "../components/Header/Header.jsx";
import HeroSection from "../components/Hero/Hero.jsx";
import SwimmingServices from "../components/About/About.jsx";
import SwimmingPoolInterface from "../components/About/HighQuality.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CleaningServicesUI from "../components/About/CleaningService.jsx";
import HowItWorks from "../components/About/Process.jsx";
import ServicesSection from "../components/OurServices/OurServices.jsx";
import PoolMaintenanceSection from "../components/Footer/ContactSection.jsx";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SwimmingServices />
      <SwimmingPoolInterface />
      <CleaningServicesUI />
      <HowItWorks />
      <ServicesSection />
      {/* <PoolMaintenanceSection /> */}
      <Footer />
    </>
  );
}

export default Home;
