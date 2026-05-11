import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

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

function App() {
  const { pathname } = useLocation();

  // AUTO SCROLL TOP
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <Navbar />

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

        {/* BLOG DETAILS ROUTES */}
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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
