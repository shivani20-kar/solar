// SafetyLightning.jsx
import React from "react";
import "./CSS/SafetyLighting.css";

import purifierImg from "./Images/image 4.png";
import bulbImg from "./Images/image 5.png";

const solutionData = [
  {
    id: 1,
    title: "Water Purifier",
    description:
      "A wide range of Advanced water purifiers for clean, pure, and healthy living.",
    image: purifierImg,
  },
  {
    id: 2,
    title: "Led Bulbs",
    description:
      "High-quality and energy-efficient LED lights for every space and need.",
    image: bulbImg,
  },
];

const SafetyLightning = ({ openContactPopup }) => {
  return (
    <section className="safety-section">
      {/* Heading */}
      <div className="section-heading">
        <div className="heading-line"></div>

        <h2>Safety & Lightning Solutions</h2>

        <div className="heading-line"></div>
      </div>

      {/* Cards */}
      <div className="safe-solution-container">
        {solutionData.map((item) => (
          <div className="safe-solution-card" key={item.id}>
            <div className="safe-card-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="safe-card-content">
              <h3>{item.title}</h3>

              <div className="safe-title-line"></div>

              <p>{item.description}</p>

              <button className="safe-book-btn" onClick={openContactPopup}>
                Book Now <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                        </svg></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafetyLightning;