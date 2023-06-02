import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import ContactForm from "../components/ContactForm";
import ProductCarousel from "../components/ProductCarousel";
import FruitCarousal from "../components/ProductCarousel/FruitCarousal.jsx";

import "../components/ProductCarousel/indexElements.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <div>
        {/* <div style={{ background: "#077E8B", height: "100%" }}>
          <h1 className="ProdductHeading ">Our products</h1>
        </div> */}
        <ProductCarousel />
        <FruitCarousal />
      </div>

      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
