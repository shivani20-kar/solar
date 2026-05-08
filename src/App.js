import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { Routes, Route } from "react-router-dom";
import BlogHeroSection from "./BlogPage/BlogHeroSection";
import BlogSolarSection from "./BlogPage/BlogSolarSection";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        {/* <Route
          path="/"
          element={<h1>Home Page</h1>}
        /> */}

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
