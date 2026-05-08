import React from "react";
import "./CSs/HeroSection.css";
import heroImg from "./Images/Gradient.png";

const HeroSection = () => {
  return (
    <section className="solar-hero">
      <img src={heroImg} alt="Solar Hero" className="hero-bg" />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-tag">✦ PREMIUM SOLAR PANELS</span>

        <h1>
          Empowering <br />
          Homes with the <br />
          Power of the Sun
        </h1>

        <p>
          Imagine a world where your energy is clean, affordable, and limitless.
          With our cutting-edge solar solutions, you can harness the power of
          the sun to reduce.
        </p>

        <button className="hero-btn">
          Get Started
          <span>↗</span>
        </button>
      </div>

      <div className="hero-card">
        <div className="card-top">
          <p>Join as Dealership</p>
          <button>↗</button>
        </div>

        <div className="card-stats">
          <div className="stat-box">
            <h2>120+</h2>
            <p>Expert Solution</p>
          </div>

          <div className="stat-box">
            <h2>250+</h2>
            <p>Enterprises to thrive</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;