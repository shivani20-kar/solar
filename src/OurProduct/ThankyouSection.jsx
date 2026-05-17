// ThankYouSection.jsx
import React from "react";
import "./CSS/ThankYpurSection.css";
import houseImg from "./Images/unsplash_TiVPTYCG_3E.png";

const features = [
  {
    title: "Trusted Quality",
    desc: "Premium & Certified products.",
  },
  {
    title: "Customer First",
    desc: "Support You Can Always Rely On.",
  },
  {
    title: "Clean Energy",
    desc: "Powering a sustainable Future.",
  },
  {
    title: "Reliable Support",
    desc: "Always Here for You",
  },
];

const ThankYouSection = () => {
  return (
    <section className="thankyou-wrapper">
      <div className="thankyou-container">
        
        {/* Left Content */}
        <div className="thankyou-left">
          
          <div className="heart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="none">
  <path d="M24.9998 43.7502L21.979 41.0418C18.4721 37.8821 15.5728 35.1564 13.2811 32.8647C10.9894 30.5731 9.1665 28.5158 7.81234 26.6929C6.45817 24.87 5.51199 23.1946 4.9738 21.6668C4.4356 20.1391 4.1665 18.5766 4.1665 16.9793C4.1665 13.7154 5.26025 10.9897 7.44775 8.80225C9.63525 6.61475 12.3609 5.521 15.6248 5.521C17.4304 5.521 19.1491 5.90294 20.7811 6.66683C22.413 7.43072 23.8193 8.50711 24.9998 9.896C26.1804 8.50711 27.5866 7.43072 29.2186 6.66683C30.8505 5.90294 32.5693 5.521 34.3748 5.521C37.6387 5.521 40.3644 6.61475 42.5519 8.80225C44.7394 10.9897 45.8332 13.7154 45.8332 16.9793C45.8332 18.5766 45.5641 20.1391 45.0259 21.6668C44.4877 23.1946 43.5415 24.87 42.1873 26.6929C40.8332 28.5158 39.0103 30.5731 36.7186 32.8647C34.4269 35.1564 31.5276 37.8821 28.0207 41.0418L24.9998 43.7502ZM24.9998 38.1252C28.3332 35.1391 31.0762 32.5783 33.229 30.4429C35.3818 28.3075 37.0832 26.4498 38.3332 24.87C39.5832 23.2901 40.4512 21.8838 40.9373 20.6512C41.4235 19.4186 41.6665 18.1946 41.6665 16.9793C41.6665 14.896 40.9721 13.1599 39.5832 11.771C38.1943 10.3821 36.4582 9.68766 34.3748 9.68766C32.7429 9.68766 31.2325 10.1477 29.8436 11.0679C28.4547 11.988 27.4998 13.1599 26.979 14.5835H23.0207C22.4998 13.1599 21.545 11.988 20.1561 11.0679C18.7672 10.1477 17.2568 9.68766 15.6248 9.68766C13.5415 9.68766 11.8054 10.3821 10.4165 11.771C9.02762 13.1599 8.33317 14.896 8.33317 16.9793C8.33317 18.1946 8.57623 19.4186 9.06234 20.6512C9.54845 21.8838 10.4165 23.2901 11.6665 24.87C12.9165 26.4498 14.6179 28.3075 16.7707 30.4429C18.9234 32.5783 21.6665 35.1391 24.9998 38.1252Z" fill="#E3E3E3"/>
</svg>
          </div>

          <h2>
            Thanks You for choosing
            <span> Pournima solar.</span>
          </h2>

          <p className="thankyou-text">
            Your trust inspires us to delivers the best in quality,
            innovation, and clean energy solutions.
          </p>

          <p className="thankyou-subtext">
            Together let’s build a brighter & greener tomorrow.
          </p>

          <div className="thankyou-features-grid">
            {features.map((item, index) => (
              <div className="thankyou-feature-box" key={index}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="thankyou-right">
          <img src={houseImg} alt="house" />

          <div className="glass-card">
            <span className="quote">❝</span>

            <p>
              We don’t just sell products,
              <br />
              We build long-term relationship.
            </p>

            <h3>Thank You!</h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThankYouSection;