// ProductPageEstimated.jsx

import React from "react";
import "../ProductPage/CSS/ProductPageEstimated.css";

const pricingData = [
  {
    capacity: "1 kW",
    price: "₹85,000- ₹1,00,000",
  },
  {
    capacity: "2 kW",
    price: "₹1,70,000- ₹2,00,000",
  },
  {
    capacity: "3 kW",
    price: "₹2,55,000- ₹3,00,000",
  },
  {
    capacity: "4 kW",
    price: "₹3,40,000- ₹4,00,000",
  },
  {
    capacity: "5 kW",
    price: "₹4,25,000- ₹5,00,000",
  },
];

const ProductPageEstimated = () => {
  return (
    <section className="productpageestimated-section">
      <div className="productpageestimated-container">
        {/* HEADING */}
        <h2>Estimated Pricing</h2>

        <p>
          Explore indicative pricing ranges tailored to different system
          capacities
        </p>

        {/* MAIN BOX */}
        <div className="productpageestimated-box">
          <h3>Indicative price range for Off-Grid Solar Systems</h3>

          {/* TABLE */}
          <div className="productpageestimated-table">
            {/* HEADER */}
            <div className="productpageestimated-header">
              <span>CAPACITY</span>
              <span>PRICE RANGE</span>
            </div>

            {/* ROWS */}
            <div className="productpageestimated-rows">
              {pricingData.map((item, index) => (
                <div className="productpageestimated-row" key={index}>
                  <div className="productpageestimated-tag">
                    {item.capacity}
                  </div>

                  <h4>{item.price}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM NOTE */}
          <div className="productpageestimated-note">
            <span></span>

            <p>
              Final costs is depend on location, battery & installations
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPageEstimated;