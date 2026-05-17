import React from "react";
import "../ProductPage/CSS/ProductPageWork.css";
import solarImg from "./Images/Solar-work.png"
import controllerImg from "./Images/Controller-work.png";
import batteryImg from "./Images/Battery-work.png";
import distributionImg from "./Images/Distribution-work.png";
import inverterImg from "./Images/Inverter-work.png";

const cards = [
  {
    id: 1,
    title: "Solar Energy Generation",
    description: "Sunlight hits the Solar Panels generates DC power.",
    image: solarImg,
  },
  {
    id: 2,
    title: "Energy Regulation & Control",
    description: "Charge controller regulates energy flow.",
    image: controllerImg,
  },
  {
    id: 3,
    title: "Energy Storage System",
    description: "Batteries Store excess electricity.",
    image: batteryImg,
  },
  {
    id: 4,
    title: "Home Power Distribution",
    description: "Electricity powers your home.",
    image: distributionImg,
  },
  {
    id: 5,
    title: "Power Conversion Unit",
    description: "Inverter converts power to AC.",
    image: inverterImg,
  },
];

export default function ProductPageWork() {
  return (
    <section className="productpagework-section">
      <div className="productpagework-container">
        <h2>How Off-Grid Systems Work</h2>

        <div className="productpagework-top-row">
          {cards.slice(0, 3).map((card) => (
            <div className="productpagework-card" key={card.id}>
              <img src={card.image} alt={card.title} />

              <div className="productpagework-overlay"></div>

              <div className="productpagework-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="productpagework-bottom-row">
          {cards.slice(3, 5).map((card) => (
            <div className="productpagework-card" key={card.id}>
              <img src={card.image} alt={card.title} />

              <div className="productpagework-overlay"></div>

              <div className="productpagework-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}