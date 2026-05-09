// AboutPartnersSection.jsx

import React from "react";
import "../AboutPage/Css/AboutPartnersSection.css";

import adani from "../AboutPage/Image/adani.png";
import waaree from "../AboutPage/Image/waaree.png";
import renew from "../AboutPage/Image/renew.png";
import renewsys from "../AboutPage/Image/renewsys.png";

import gautam from "../AboutPage/Image/gautam.png";
import premier from "../AboutPage/Image/premier.png";
import rayzon from "../AboutPage/Image/rayzon.png";

const AboutPartnersSection = () => {
  return (
    <section className="aboutpartners-section">
      <div className="aboutpartners-container">

        {/* HEADING */}

        <div className="aboutpartners-heading">
          <span className="aboutpartners-line"></span>

          <h2>Our Trusted Partners</h2>

          <span className="aboutpartners-line"></span>
        </div>

        {/* LOGOS */}

        <div className="aboutpartners-logos">

          {/* FIRST ROW */}

          <div className="aboutpartners-row1">

            <div className="aboutpartners-item">
              <img src={adani} alt="Adani Solar" />
            </div>

            <div className="aboutpartners-item">
              <img src={waaree} alt="Waaree" />
            </div>

            <div className="aboutpartners-item">
              <img src={renew} alt="Renew Power" />
            </div>

            <div className="aboutpartners-item">
              <img src={renewsys} alt="RenewSys" />
            </div>

          </div>

          {/* SECOND ROW */}

          <div className="aboutpartners-row2">

            <div className="aboutpartners-item">
              <img src={gautam} alt="Gautam Solar" />
            </div>

            <div className="aboutpartners-item">
              <img src={premier} alt="Premier Energies" />
            </div>

            <div className="aboutpartners-item">
              <img src={rayzon} alt="Rayzon Solar" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPartnersSection;