// AboutWhatWe.jsx

import React from "react";
import "../AboutPage/Css/AboutWhatWe.css";

import residentialImg from "../AboutPage/Image/residential.png";
import commercialImg from "../AboutPage/Image/commercial.png";
import industrialImg from "../AboutPage/Image/industrial.png";
import governmentImg from "../AboutPage/Image/government.png";

const AboutWhatWe = () => {
  return (
    <section className="aboutwhatwe-section">
      <div className="aboutwhatwe-container">

        {/* HEADING */}

        <div className="aboutwhatwe-heading">

          <span className="aboutwhatwe-line"></span>

          <h2>What We Do</h2>

          <span className="aboutwhatwe-line"></span>

        </div>

        {/* SUB TEXT */}

        <p className="aboutwhatwe-subtext">
          We specialize in complete solar energy solutions across:
        </p>

        {/* CARDS */}

        <div className="aboutwhatwe-cards">

          {/* CARD 1 */}

          <div className="aboutwhatwe-card">
            <img src={residentialImg} alt="Residential Projects" />

            <div className="aboutwhatwe-overlay"></div>

            <h3>
              Residential Projects
            </h3>
          </div>

          {/* CARD 2 */}

          <div className="aboutwhatwe-card">
            <img src={commercialImg} alt="Commercial Installation" />

            <div className="aboutwhatwe-overlay"></div>

            <h3>
              Commercial
              <br />
              Installation
            </h3>
          </div>

          {/* CARD 3 */}

          <div className="aboutwhatwe-card">
            <img src={industrialImg} alt="Industrial EPC Solutions" />

            <div className="aboutwhatwe-overlay"></div>

            <h3>
              Industrial EPC
              <br />
              Solutions.
            </h3>
          </div>

          {/* CARD 4 */}

          <div className="aboutwhatwe-card">
            <img src={governmentImg} alt="Government Projects" />

            <div className="aboutwhatwe-overlay"></div>

            <h3>
              Government Projects
            </h3>
          </div>

        </div>

        {/* BOTTOM TEXT BOX */}

        <div className="aboutwhatwe-bottomtext">
          <p>
            Our expertise includes both rooftop and ground-mounted solar
            systems, designed for performance, durability, and efficiency.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutWhatWe;