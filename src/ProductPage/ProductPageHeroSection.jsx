// ProductPageSection.jsx

import React from "react";
import "../ProductPage/CSS/ProductPageHeroSection.css";

import heroImg from "../ProductPage/Images/ProductPageBackgroundImg.png";

const ProductPageHeroSection = () => {
  return (
    <section
      className="productpage-section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* OVERLAY */}

      <div className="productpage-overlay"></div>

      {/* CONTENT */}

      <div className="productpage-container">
        <div className="productpage-left">
          <h1>
            Reliable Power.
            <br />
            Anywhere You
            <br />
            Need It.
          </h1>

          <p>
            Off-grid Solar System designed for uninterrupted energy - day and
            night.
          </p>

          {/* FEATURES */}

          <div className="productpage-features">
            <div className="productpage-feature-card">
              <div className="productpage-check">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M13.6918 21.4416L22.7981 12.3354L20.9897 10.5271L13.6918 17.825L10.0106 14.1437L8.20225 15.9521L13.6918 21.4416ZM15.5002 28.4166C13.7134 28.4166 12.0342 28.0776 10.4627 27.3995C8.89114 26.7213 7.52412 25.801 6.36162 24.6385C5.19912 23.476 4.27881 22.109 3.60068 20.5375C2.92256 18.966 2.5835 17.2868 2.5835 15.5C2.5835 13.7132 2.92256 12.034 3.60068 10.4625C4.27881 8.89095 5.19912 7.52394 6.36162 6.36144C7.52412 5.19894 8.89114 4.27863 10.4627 3.6005C12.0342 2.92238 13.7134 2.58331 15.5002 2.58331C17.287 2.58331 18.9661 2.92238 20.5377 3.6005C22.1092 4.27863 23.4762 5.19894 24.6387 6.36144C25.8012 7.52394 26.7215 8.89095 27.3996 10.4625C28.0778 12.034 28.4168 13.7132 28.4168 15.5C28.4168 17.2868 28.0778 18.966 27.3996 20.5375C26.7215 22.109 25.8012 23.476 24.6387 24.6385C23.4762 25.801 22.1092 26.7213 20.5377 27.3995C18.9661 28.0776 17.287 28.4166 15.5002 28.4166ZM15.5002 25.8333C18.3849 25.8333 20.8283 24.8323 22.8304 22.8302C24.8325 20.8281 25.8335 18.3847 25.8335 15.5C25.8335 12.6153 24.8325 10.1719 22.8304 8.16977C20.8283 6.16769 18.3849 5.16665 15.5002 5.16665C12.6154 5.16665 10.172 6.16769 8.16995 8.16977C6.16787 10.1719 5.16683 12.6153 5.16683 15.5C5.16683 18.3847 6.16787 20.8281 8.16995 22.8302C10.172 24.8323 12.6154 25.8333 15.5002 25.8333Z"
                    fill="#00B552"
                  />
                </svg>
              </div>

              <span>
                100% Grid
                <br />
                Independent
              </span>
            </div>

            <div className="productpage-feature-card">
              <div className="productpage-check">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <circle
                    cx="13"
                    cy="13"
                    r="12"
                    stroke="#00D26A"
                    strokeWidth="2"
                  />

                  <path
                    d="M8 13.5L11.2 16.5L18 9.5"
                    stroke="#00D26A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span>
                Clean &
                <br />
                Renewable
              </span>
            </div>
          </div>

          {/* THIRD CARD */}

          <div className="productpage-feature-bottom">
            <div className="productpage-feature-card">
              <div className="productpage-check">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <circle
                    cx="13"
                    cy="13"
                    r="12"
                    stroke="#00D26A"
                    strokeWidth="2"
                  />

                  <path
                    d="M8 13.5L11.2 16.5L18 9.5"
                    stroke="#00D26A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span>
                Ideal for Remote
                <br />
                Living
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY BUTTON */}

      <div className="productpage-sticky-button">
        <button>
          Book Now
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductPageHeroSection;
