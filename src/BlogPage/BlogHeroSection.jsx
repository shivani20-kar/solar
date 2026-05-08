import React from "react";
import "./BlogHeroSection.css";
import heroImg from "../BlogPage/Blogherosectionimg.png"; // your image

const BlogHeroSection = () => {
  return (
    <section className="blog-hero-section">
      <img src={heroImg} alt="Solar Banner" className="blog-hero-bg" />

      <div className="blog-hero-overlay"></div>

      <div className="blog-hero-content">
        <h1>
          Insights to Power <br />
          Smarter Solar <br />
          Decisions
        </h1>

        <p>
          Explore expert guides, smart tips, and real stories to help you
          switch to solar with confidence.
        </p>
      </div>
    </section>
  );
};
export default BlogHeroSection;