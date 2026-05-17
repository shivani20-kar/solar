// ProductPageRequirement.jsx

import React from "react";
import "../ProductPage/CSS/ProductPageRequirement.css";

const batteryData = [
  {
    system: "3 kW System",
    battery: "8-9 Batteries",
    ah: "(100 AH)",
  },
  {
    system: "5 kW System",
    battery: "10-11 Batteries",
    ah: "(500 AH)",
  },
];

const ProductPageRequirement = () => {
  return (
    <section className="productpagerequirement-section">
      <div className="productpagerequirement-container">
        {/* HEADING */}

        <h2>Battery Requirements</h2>

        <p>Optimized Power Storage Requirements for Each System Size.</p>

        {/* MAIN BOX */}

        <div className="productpagerequirement-box">
          {/* TOP */}

          <div className="productpagerequirement-top">
            <div className="productpagerequirement-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#434343"
              >
                <path d="M320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-80h160v80h80q17 0 28.5 11.5T680-760v640q0 17-11.5 28.5T640-80H320Zm40-320h240v-320H360v320Z" />
              </svg>
            </div>

            <h3>Typical battery setup based on system capacity.</h3>
          </div>

          {/* DIVIDER */}

          <div className="productpagerequirement-divider"></div>

          {/* ROWS */}

          <div className="productpagerequirement-rows">
            {batteryData.map((item, index) => (
              <div className="productpagerequirement-row" key={index}>
                <div className="productpagerequirement-left">
                  <span className="productpagerequirement-dot"></span>

                  <h4>{item.system}</h4>
                </div>

                <div className="productpagerequirement-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="167"
                    height="23"
                    viewBox="0 0 167 23"
                    fill="none"
                  >
                    <path
                      d="M166.061 12.1066C166.646 11.5208 166.646 10.571 166.061 9.98524L156.515 0.439297C155.929 -0.14649 154.979 -0.14649 154.393 0.439297C153.808 1.02508 153.808 1.97483 154.393 2.56062L162.879 11.0459L154.393 19.5312C153.808 20.117 153.808 21.0667 154.393 21.6525C154.979 22.2383 155.929 22.2383 156.515 21.6525L166.061 12.1066ZM0 11.0459V12.5459H165V11.0459V9.5459H0V11.0459Z"
                      fill="black"
                    />
                  </svg>
                </div>

                <div className="productpagerequirement-tag">
                  <strong>{item.battery}</strong>

                  <span>{item.ah}</span>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM */}

          <div className="productpagerequirement-bottom">
            <div className="productpagerequirement-line"></div>

            <p>
              Battery count may vary based on Usage & Backup hours required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPageRequirement;
