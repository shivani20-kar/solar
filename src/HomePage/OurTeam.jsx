import React from "react";
import "./CSs/OurTeam.css";
import img from "./Images/image 1 1 1.png"

const districts = [
  { id: 1, path: "M120 40 L180 30 L210 70 L180 100 L130 90 Z", dark: false },
  { id: 2, path: "M80 90 L130 90 L180 100 L160 150 L100 145 Z", dark: true },
  { id: 3, path: "M180 100 L240 95 L260 145 L210 170 L160 150 Z", dark: false },
  { id: 4, path: "M100 145 L160 150 L170 210 L110 230 L80 190 Z", dark: false },
  { id: 5, path: "M170 210 L230 190 L260 250 L200 280 L150 250 Z", dark: true },
  { id: 6, path: "M110 230 L150 250 L140 320 L90 350 L70 280 Z", dark: false },
  { id: 7, path: "M200 280 L250 300 L240 380 L180 390 L140 320 Z", dark: true },
  { id: 8, path: "M250 300 L300 260 L330 330 L290 410 L240 380 Z", dark: false },
  { id: 9, path: "M290 410 L310 500 L260 560 L220 500 L240 380 Z", dark: true },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        {/* Left Content */}
        <div className="team-content">
          <span className="team-badge">✦ OUR TEAM</span>

          <h1>
            Building a Sustainable <br />
            Future Together
          </h1>

          <p>
            Proudly serving 20+ cities across Maharashtra.
            <br />
            Growing our community every single day!"
          </p>

          <button className="contact-btn">
            Contact Us <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                        </svg></span>
          </button>
        </div>

        {/* Right Map */}
        <div className="map-wrapper">
       <img src={img}/>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;