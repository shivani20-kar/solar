import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { Routes, Route } from "react-router-dom";
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
import Testimonials from "./HomePage/Testimonial";
import TeamSection from "./HomePage/OurTeam";

function App() {
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
              <Testimonials/>
              <TeamSection/>
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
