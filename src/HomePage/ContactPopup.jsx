import React, { useState } from "react";
import "./CSs/ContactPopup.css";

const ContactPopup = ({ closePopup }) => {
  const [propertyType, setPropertyType] = useState("");
  const [installationType, setInstallationType] = useState("");

  const interests = [
    "Off-Grid",
    "Hybrid Solar",
    "Street Light",
    "Water Heater",
    "Emergency Light",
    "High Mist",
    "CCTV",
    "Water Purifier",
    "LED Bulbs",
  ];

  const [selectedInterest, setSelectedInterest] = useState("Off-Grid");

  return (
    <>
      <div className="popup-overlay">
        <div className="popup-container">

          {/* Close Button */}
          <button className="close-btn" onClick={closePopup}>
            ✕
          </button>

          {/* LEFT SECTION */}
          <div className="left-sections">

            <h1>Get a Free Consultation</h1>

            <p>
              Tell us your requirements and our experts
              <br />
              will get in touch shortly.
            </p>

            {/* MOBILE / TABLET RIGHT SECTION */}
            <div className="mobile-right-section">
              <div className="right-section">
                <h3>Project Requirements:</h3>

                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Choose Property Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Government">Government</option>
                </select>

                <select
                  value={installationType}
                  onChange={(e) => setInstallationType(e.target.value)}
                >
                  <option value="">Installation Type</option>
                  <option value="On Grid">New Installation</option>
                  <option value="Off Grid">Replacement</option>
                  <option value="Hybrid">Upgrade</option>
                </select>

                <div className="checkbox-section">
                  <input type="checkbox" />
                  <label>
                    I agree to be contacted regarding my inquiry.
                  </label>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form className="consult-form">

              <div className="interest-box">
                <span>I’m interested in...</span>

                <div className="interest-buttons">
                  {interests.map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      className={
                        selectedInterest === item
                          ? "interest-btn active"
                          : "interest-btn"
                      }
                      onClick={() => setSelectedInterest(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <input type="text" placeholder="Phone no." />
              <input type="text" placeholder="Your Address" />

              <textarea placeholder="Your message"></textarea>

              <div className="form-buttons">

                <button
                  type="button"
                  className="home-btnn"
                  onClick={closePopup}
                >
                  Go to Home
                </button>

                <button type="submit" className="submit-btnn">
                  Submit Now

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                  </svg>
                </button>

              </div>
            </form>
          </div>

          {/* DESKTOP RIGHT SECTION */}
          <div className="desktop-right-section">
            <div className="right-section">

              <h3>Project Requirements:</h3>

              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Choose Property Type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Government">Government</option>
              </select>

              <select
                value={installationType}
                onChange={(e) => setInstallationType(e.target.value)}
              >
                <option value="">Installation Type</option>
                <option value="On Grid">New Installation</option>
                <option value="Off Grid">Replacement</option>
                <option value="Hybrid">Upgrade</option>
              </select>

              <div className="checkbox-section">
                <input type="checkbox" />
                <label>
                  I agree to be contacted regarding my inquiry.
                </label>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPopup;