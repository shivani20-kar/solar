import React, { useState } from "react";
import "./CSs/HeroSection.css";
import heroImg from "./Images/Gradient.png";
import DealershipPopup from "./DealershipPopup";

const HeroSection = () => {
   const [showPopup, setShowPopup] = useState(false);
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                </button>
            </div>

            <div className="hero-card">
                <div className="stat-box-hero small-card">
                    <h2>120+</h2>
                    <p>Expert Solution</p>
                </div>

                <div className="stat-box-hero big-card">
                    <div className="card-top-hero">
                        <p>Join as Dealership</p>
                        <button className="svg-button" onClick={() => setShowPopup(true)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                        </svg></button>
                         {/* Popup */}

                    </div>
                    <h2>250+</h2>
                    <p>Enterprises to thrive</p>
                </div>
                {showPopup && (
  <DealershipPopup closePopup={() => setShowPopup(false)} />
)}


            </div>
        </section>
    );
};

export default HeroSection;