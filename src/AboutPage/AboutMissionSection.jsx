// AboutMissionSection.jsx

import React from "react";
import "../AboutPage/Css/AboutMissionSection.css";
import missionImg from "../AboutPage/Image/mission.png";

const AboutMissionSection = () => {
  return (
    <section className="aboutmission-section">
      {/* ========================= */}
      {/* PNG CORNER IMAGES */}
      {/* ========================= */}

      <div className="aboutmission-corner-top-left">
        <img src={missionImg} alt="corner design" />
      </div>

      <div className="aboutmission-corner-top-right">
        <img src={missionImg} alt="corner design" />
      </div>

      <div className="aboutmission-corner-bottom-left">
        <img src={missionImg} alt="corner design" />
      </div>

      <div className="aboutmission-corner-bottom-right">
        <img src={missionImg} alt="corner design" />
      </div>

      {/* ========================= */}
      {/* DECORATIVE CIRCLES */}
      {/* ========================= */}

      <div className="aboutmission-circle-top"></div>
      <div className="aboutmission-circle-bottom"></div>

      {/* ========================= */}
      {/* MAIN CONTAINER */}
      {/* ========================= */}

      <div className="aboutmission-container">
        <h2 className="aboutmission-heading">Our Missions & Visions</h2>

        {/* ========================= */}
        {/* MISSION CARD */}
        {/* ========================= */}

        <div className="aboutmission-card">
          <div className="aboutmission-card-title">
            {/* TARGET SVG */}

            <div className="aboutmission-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="48"
                viewBox="0 0 50 48"
                fill="none"
              >
                <g clip-path="url(#clip0_788_352)">
                  <path
                    d="M35.4167 11.18V6L41.6667 0V8H50L43.75 14H38.3542L29 22.98C29.0833 23.3 29.1458 23.64 29.1458 24C29.1458 26.2 27.2708 28 24.9792 28C22.6875 28 20.8125 26.2 20.8125 24C20.8125 21.8 22.6875 20 24.9792 20C25.3542 20 25.7083 20.06 26.0417 20.14L35.3958 11.16L35.4167 11.18ZM45.4792 18H42.6875C43.3542 19.86 43.75 21.84 43.75 23.92C42.8125 47.84 7.1875 47.84 6.25 23.92C6.25 13.96 14.6667 5.86 25 5.86C27.1875 5.86 29.2917 6.24 31.25 6.92V4.34L34.1458 1.56C19.7917 -3.54 0.791667 3.9 0 23.92C0 37.2 11.2083 48 25 48C38.7917 48 50 37.2 50 23.92C49.875 20.72 49.2708 17.84 48.2917 15.28L45.4792 17.98V18ZM24.5625 15.94L30 10.72C28.5208 10.22 26.8542 9.92 25 9.88C5.72917 10.46 5.72917 37.38 25 37.98C36.8125 37.62 41.375 27.36 38.7083 19.34L33.1875 24.64C32.875 28.34 30.1667 31.82 25 31.96C13.8125 31.72 12.8333 16.72 24.5417 15.96L24.5625 15.94Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_788_352">
                    <rect width="50" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h3>Our Missions</h3>
          </div>

          <div className="aboutmission-yellow-line"></div>

          <p>
            To accelerate the adoption of renewable energy by manufacturing
            world-class solar products and building a robust nationwide
            distribution network that ensures every home, business, industrial,
            and community in India can access clean, sustainable power.
          </p>
        </div>

        {/* ========================= */}
        {/* VISION CARD */}
        {/* ========================= */}

        <div className="aboutmission-card">
          <div className="aboutmission-card-title">
            {/* EYE SVG */}

            <div className="aboutmission-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M49.6268 23.2937C47.7976 19.2937 40.6247 6.25 24.9997 6.25C9.37473 6.25 2.20182 19.2937 0.372648 23.2937C0.127103 23.8298 0 24.4125 0 25.0021C0 25.5917 0.127103 26.1744 0.372648 26.7104C2.20182 30.7062 9.37473 43.75 24.9997 43.75C40.6247 43.75 47.7976 30.7062 49.6268 26.7062C49.8719 26.1708 49.9987 25.5889 49.9987 25C49.9987 24.4111 49.8719 23.8292 49.6268 23.2937ZM24.9997 37.5C22.5275 37.5 20.1107 36.7669 18.0551 35.3934C15.9995 34.0198 14.3973 32.0676 13.4512 29.7835C12.5051 27.4995 12.2576 24.9861 12.7399 22.5614C13.2222 20.1366 14.4127 17.9093 16.1609 16.1612C17.9091 14.413 20.1363 13.2225 22.5611 12.7402C24.9859 12.2579 27.4992 12.5054 29.7833 13.4515C32.0674 14.3976 34.0196 15.9998 35.3931 18.0554C36.7666 20.111 37.4997 22.5277 37.4997 25C37.4964 28.3142 36.1784 31.4917 33.8349 33.8352C31.4914 36.1787 28.3139 37.4967 24.9997 37.5Z"
                  fill="black"
                />
                <path
                  d="M25.0003 33.3337C29.6027 33.3337 33.3337 29.6027 33.3337 25.0003C33.3337 20.398 29.6027 16.667 25.0003 16.667C20.398 16.667 16.667 20.398 16.667 25.0003C16.667 29.6027 20.398 33.3337 25.0003 33.3337Z"
                  fill="black"
                />
              </svg>
            </div>

            <h3>Our Visions</h3>
          </div>

          <div className="aboutmission-yellow-line small"></div>

          <p>
            To Become India’s most trusted and widespread solar brand, driving
            the country toward energy independence and environmental
            sustainability through innovation, integrity, and inclusive growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
