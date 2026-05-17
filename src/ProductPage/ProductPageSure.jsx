import React, { useState } from "react";
import "../ProductPage/CSS/ProductPageSure.css";

import questionIcon from "../ProductPage/Images/questionIcon.png";

const ProductPageSure = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="ProductPageSure-section">
      <div className="ProductPageSure-container">
        {/* Top */}
        <div className="ProductPageSure-top">
          {/* Icon */}
          <div className="ProductPageSure-icon">
            <img src={questionIcon} alt="question-icon" />
          </div>

          {/* Content */}
          <div className="ProductPageSure-content">
            <h2 className="ProductPageSure-title">
              Not Sure If <span>Off-Grid</span>
              <br />
              Solar Is Right for You?
            </h2>

            <p className="ProductPageSure-text">
              Get expert advice tailored to your home and energy needs.
            </p>

            {/* Contact Button */}
            <button
              className="ProductPageSure-btn"
              onClick={() => setShowPopup(true)}
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="ProductPageSure-features">
          <div className="ProductPageSure-feature">
            <div className="ProductPageSure-check">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p>Free Consultation</p>
          </div>

          <div className="ProductPageSure-feature">
            <div className="ProductPageSure-check">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p>No Hidden Charges</p>
          </div>

          <div className="ProductPageSure-feature">
            <div className="ProductPageSure-check">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p>Fast Response</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPageSure;
