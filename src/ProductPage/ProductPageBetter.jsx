import React from "react";
import "../ProductPage/CSS/ProductPageBetter.css";
/* top la import kara */
import bulbIcon from "../ProductPage/Images/light-bulb.png";

const ProductPageBetter = () => {
  return (
    <section className="ProductPageBetter-section">
      <div className="ProductPageBetter-container">
        {/* Title */}
        <h2 className="ProductPageBetter__title">
          <span className="ProductPageBetter__blue">On-Grid</span> v/s{" "}
          <span className="ProductPageBetter__blue ProductPageBetter__underline">
            Off-Grid
          </span>
          : What’s Better?
        </h2>

        {/* Card */}
        <div className="ProductPageBetter__card">
          {/* Icon */}
          {/* Icon */}
          <div className="ProductPageBetter__icon">
            <img
              src={bulbIcon}
              alt="bulb-icon"
              className="ProductPageBetter__iconImg"
            />
          </div>

          {/* Content */}
          <p className="ProductPageBetter__text">
            If you have a <b>reliable electricity connection</b>, on-grid solar
            is more <b>cost-effective</b>, requires less maintenance, and offers{" "}
            <b>government subsidies</b>. Off-Grid is best suited for{" "}
            <b>areas without grid access</b>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPageBetter;
