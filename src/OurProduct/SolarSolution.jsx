// SolarSolutions.jsx
import React from "react";
import "./CSS/SolarSolution.css";
import {
  FaUsers,
  FaBolt,
  FaBatteryHalf,
  FaLeaf,
  FaHome,
} from "react-icons/fa";

const SolarSolutions = () => {
  return (
    <div className="solar-container">
      <div className="solar-overlay"></div>

      <div className="solar-content">
        {/* Left Content */}
        <div className="left-section">
          <button className="top-btn">
            OUR PRODUCTS & SOLUTIONS
          </button>

          <h1>
            Complete Solar <br />
            Solutions for Every <br />
            Need.
          </h1>

          <p>
            From smart solar systems to advanced safety and lighting
            solutions, we offer products that power homes,
            businesses, industries, and communities sustainably.
          </p>
        </div>

        {/* Right Card */}
        <div className="trusted-card">
          <div className="trusted-icon">
            <FaUsers />
          </div>

          <h2>Trusted by</h2>

          <h3>10,000 +</h3>

          <p>Home & Business Across India</p>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="feature-box">
        <div className="feature-item">
          <FaBolt className="feature-icon" />
          <div>
            <h4>Up to 90%</h4>
            <p>Energy Savings.</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="feature-item">
          <FaBatteryHalf className="feature-icon" />
          <div>
            <h4>Smart</h4>
            <p>Battery Backup</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="feature-item">
          <FaLeaf className="feature-icon" />
          <div>
            <h4>100%</h4>
            <p>Clean Energy</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="feature-item">
          <FaHome className="feature-icon" />
          <div>
            <h4>Designed for</h4>
            <p>Homes & Businesses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSolutions;