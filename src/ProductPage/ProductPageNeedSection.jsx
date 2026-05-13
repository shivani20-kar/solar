// ProductPageNeedSection.jsx

import React, { useState } from "react";
import "../ProductPage/CSS/ProductPageNeedSection.css";

import img1 from "../ProductPage/Images/need1.png";
import img2 from "../ProductPage/Images/need2.png";
import img3 from "../ProductPage/Images/need3.png";

const cards = [
  {
    id: 1,
    title: "Remote Locations",
    description:
      "Perfect for areas with no access to the main electricity grid, ensuring complete energy independence.",
    image: img1,
  },

  {
    id: 2,
    title: "Frequent Power Cuts",
    description:
      "Get uninterrupted electricity even during long power outages with battery backup support.",
    image: img2,
  },

  {
    id: 3,
    title: "Unreliable Electricity Supply",
    description:
      "Ideal for places where voltage fluctuations and unstable electricity are common.",
    image: img3,
  },
];

const ProductPageNeedSection = () => {

  // FIRST CARD DEFAULT OPEN

  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="productpageneed-section">

      <div className="productpageneed-container">

        <h2>When Do You Need Off-Grid Solar?</h2>

        <div className="productpageneed-cards">

          {cards.map((card) => (

            <div
              key={card.id}
              className={`productpageneed-card ${
                activeCard === card.id ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${card.image})`,
              }}
              onClick={() => setActiveCard(card.id)}
            >

              <div className="productpageneed-overlay"></div>

              <div className="productpageneed-content">

                <h3>{card.title}</h3>

                {activeCard === card.id && (
                  <p>{card.description}</p>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductPageNeedSection;