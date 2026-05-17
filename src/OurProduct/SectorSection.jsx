// SectorSection.jsx
import React from "react";
import "./CSS/SectorSection.css";

import residentialImg from "./Images/Rectangle52.png";
import commercialImg from "./Images/Rectangle53.png";
import industrialImg from "./Images/Rectangle3158.png";

const sectorData = [
  {
    title: "Residential",
    description: "Save more. Live sustainably.",
    image: residentialImg,
  },
  {
    title: "Commercial",
    description: "Cut costs. Boost efficiency.",
    image: commercialImg,
  },
  {
    title: "Industrial",
    description: "High performance. Maximum output.",
    image: industrialImg,
  },
];

const SectorSection = () => {
  return (
    <div className="sector-wrapper">
      {/* Heading */}
      <div className="sector-heading">
        <div className="line"><svg xmlns="http://www.w3.org/2000/svg" width="204" height="29" viewBox="0 0 374 5" fill="none">
  <path d="M2.5 2.5H110.034H191H262.874H371.5" stroke="#FFD700" stroke-width="5" stroke-linecap="round"/>
</svg></div>
        <h2>One Solution. Every Sector.</h2>

        <div className="arrow-line">
          <div className="line"><svg xmlns="http://www.w3.org/2000/svg" width="250" height="29" viewBox="0 0 372 29" fill="none">
  <path d="M2.5 11.9337C1.11929 11.9337 0 13.053 0 14.4337C0 15.8144 1.11929 16.9337 2.5 16.9337V14.4337V11.9337ZM371.5 14.4337L346.5 -4.1008e-05V28.8675L371.5 14.4337ZM2.5 14.4337V16.9337H108.942V14.4337V11.9337H2.5V14.4337ZM108.942 14.4337V16.9337H188V14.4337V11.9337H108.942V14.4337ZM188 14.4337V16.9337H256.5V14.4337V11.9337H188V14.4337ZM256.5 14.4337V16.9337H349V14.4337V11.9337H256.5V14.4337Z" fill="#FFD700"/>
</svg></div>
         
        </div>
      </div>

      {/* Cards */}
      <div className="sector-cards">
        {sectorData.map((item, index) => (
          <div
            className="sector-card"
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="sector-overlay">
              <h3>{item.title}</h3>
              <div className="yellow-underline"></div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorSection;