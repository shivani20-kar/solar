import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { Routes, Route } from "react-router-dom";
import BlogHeroSection from "./BlogPage/BlogHeroSection";
import BlogSolarSection from "./BlogPage/BlogSolarSection";
import HeroSection from "./HomePage/HeroSection";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/"
          element={<HeroSection/>} />

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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
