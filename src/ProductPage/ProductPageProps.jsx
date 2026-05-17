// ProductPageProps.jsx

import React from "react";
import "../ProductPage/CSS/ProductPageProps.css";

const advantages = [
  "Works without grid connection.",
  "Clean, renewable energy source.",
  "Ideal for rural & remote areas.",
];

const limitations = [
  "Higher costs due to batteries.",
  "Requires periodic maintenance.",
  "No government subsidy available.",
];

const ProductPageProps = () => {
  return (
    <section className="productpageprops-section">
      <div className="productpageprops-container">
        {/* HEADING */}

        <h2>Pros & Considerations.</h2>

        {/* CARDS */}

        <div className="productpageprops-cards">
          {/* ADVANTAGES */}

          <div className="productpageprops-card">
            <div className="productpageprops-top">
              <div className="productpageprops-titlewrap">
                <div className="productpageprops-icon productpageprops-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#00B552"
                      strokeWidth="2.5"
                    />

                    <path
                      d="M8 12L10.8 14.8L16 9.5"
                      stroke="#00B552"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3>Advantages</h3>
              </div>

              <div className="productpageprops-divider"></div>
            </div>

            <div className="productpageprops-list">
              {advantages.map((item, index) => (
                <div className="productpageprops-item" key={index}>
                  <div className="productpageprops-smallicon productpageprops-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 12L10.5 15.5L17 9"
                        stroke="#00B552"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LIMITATIONS */}

          <div className="productpageprops-card">
            <div className="productpageprops-top">
              <div className="productpageprops-titlewrap">
                <div className="productpageprops-icon productpageprops-red">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#FF4545"
                      strokeWidth="2.5"
                    />

                    <path
                      d="M9 9L15 15"
                      stroke="#FF4545"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M15 9L9 15"
                      stroke="#FF4545"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h3>Limitations</h3>
              </div>

              <div className="productpageprops-divider"></div>
            </div>

            <div className="productpageprops-list">
              {limitations.map((item, index) => (
                <div className="productpageprops-item" key={index}>
                  <div className="productpageprops-smallicon productpageprops-red">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8 8L16 16"
                        stroke="#FF4545"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      <path
                        d="M16 8L8 16"
                        stroke="#F4545F"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPageProps;
