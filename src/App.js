import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import BlogHeroSection from "./BlogPage/BlogHeroSection";
import BlogSolarSection from "./BlogPage/BlogSolarSection";
import HeroSection from "./HomePage/HeroSection";

import AboutSolar from "./HomePage/AboutSolar";
import Services from "./HomePage/Services";
import WhyChooseUs from "./HomePage/WhyChooseUs";
import ProjectsSection from "./HomePage/Projects";

import AboutHeroSection from "./AboutPage/AboutHeroSection";
import AboutPartnersSection from "./AboutPage/AboutPartnersSection";
import AboutWhatWe from "./AboutPage/AboutWhatWe";
import AboutProduct from "./AboutPage/AboutProduct";
import AboutMissionSection from "./AboutPage/AboutMissionSection";
import AboutDetailSection from "./AboutPage/AboutDetailSection";

import BlogOne from "./BlogPage/BlogOne";
import Testimonials from "./HomePage/Testimonial";
import TeamSection from "./HomePage/OurTeam";
import FAQ from "./HomePage/FAQ";
import BlogSection from "./HomePage/BlogSection";

import Consultation from "./HomePage/Consultation;";
import DealershipPopup from "./HomePage/DealershipPopup";

import SolarSolutions from "./OurProduct/SolarSolution";

import ProductPageHeroSection from "./ProductPage/ProductPageHeroSection";
import ProductPageOffGrid from "./ProductPage/ProductPageOffGrid";
import ProductPageNeedSection from "./ProductPage/ProductPageNeedSection";
import SolarSystemProductPageComponent from "./ProductPage/SolarSystemProductPageComponent";

function App() {
  const { pathname } = useLocation();

  // Popup State
  const [showPopup, setShowPopup] = useState(false);

  // Auto Scroll Top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // Open Popup
  const openPopup = () => {
    setShowPopup(true);
  };

  // Close Popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Navbar />

      {/* Popup Open Button */}
      <button onClick={openPopup}>
        Open Dealership Popup
      </button>

      {/* Popup */}
      {showPopup && (
        <DealershipPopup closePopup={closePopup} />
      )}

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSolar />
              <Services />
              <WhyChooseUs />
              <ProjectsSection />
              <Testimonials />
              <TeamSection />
              <FAQ />
              <BlogSection />
              <Consultation />
            </>
          }
        />

        {/* BLOG PAGE */}
        <Route
          path="/blogs"
          element={
            <>
              <BlogHeroSection />
              <BlogSolarSection />
            </>
          }
        />

        {/* BLOG DETAILS */}
        <Route path="/blog-one" element={<BlogOne />} />

        {/* ABOUT */}
        <Route
          path="/about"
          element={
            <>
              <AboutHeroSection />
              <AboutPartnersSection />
              <AboutWhatWe />
              <AboutProduct />
              <AboutMissionSection />
              <AboutDetailSection />
            </>
          }
        />

        {/* SERVICES */}
        <Route
          path="/off-grid-solar"
          element={
            <>
              <ProductPageHeroSection />
              <ProductPageOffGrid />
              <ProductPageNeedSection />
              <SolarSystemProductPageComponent />
            </>
          }
        />

        {/* PRODUCTS */}
        <Route path="/products" element={<SolarSolutions />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;