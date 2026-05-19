import React, { useState } from "react";
import "./CSs/OurTeam.css";
import img from "./Images/image 1 1 1.png";
import ContactPopup from "../HomePage/ContactPopup";

const TeamSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
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
              Growing our community every single day!
            </p>

            <button
              className="contact-btn"
              onClick={() => setShowPopup(true)}
            >
              Contact Us

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Right Map */}
          <div className="map-wrapper">
            <img src={img} alt="team-map" />
          </div>
        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <ContactPopup closePopup={() => setShowPopup(false)} />
      )}
    </>
  );
};

export default TeamSection;