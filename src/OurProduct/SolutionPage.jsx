import React from "react";
import "./CSS/ProductSection.css";
import solarImg from "./Images/unsplash_FBSTmfa8nOM.png";
import solarImg1 from "./Images/20260318165810de971 1.png"
import solarImg2 from "./Images/images (4) 1.png"

const SolustionPage =({ openContactPopup }) => { 
  const stars = [1, 2, 3, 4, 5];

  const products = [
    {
      title: "Solar Emergency Lights",
      description:
        "Reliable solar-powered emergency lightning for uniterrupted illumination during power cuts and outdoor use.",
      image: solarImg,
      feature1: "10-30w",
      featureText1: "Power",
      feature2: "1 - 2 Yrs",
      featureText2: "Product Warranty",
       feature3: "6 months",
      featureText3: "Battery Warranty",
      feature4: "6 - 12 Hours",
      featureText4: "Backup Time",
      rating: "4.8/5",
    },

    // New Card Added
    {
      title: "Solar High Mist System",
      description:
        "Designed for highways, industrial zones, parking areas, stadiums, and public spaces. Delivers high-lumen output with zero electricity cost and automatic dusk-to-dawan operations. ",
      image: solarImg1,
       feature1: "5 Yrs",
      featureText1: "Led Warranty",
       feature2: "3 - 5 Yrs",
      featureText2: (<>Battery <br/>Warranty </>),
       feature3: "3 - 5 Yrs",
      featureText3: (<>Pole Structure <br/>Life</>),
       feature4: "25 Yrs",
      featureText4: (<>Solar Panel <br/>Performance Warranty </>),
      rating: "4.7/5",
      
    },
      // 3rd Card Added
  {
    title: "Solar CCTV",
    description:
      "Advanced solar CCTV camera with intelligent features and long-lasting battery backup. Perfect for homes, farms, offices, construction sites, and remote areas.",
    image: solarImg2,

    feature1: "2 Yrs ",
    featureText1: (<>Product<br/> Warranty</>),

    feature2: "1-yrs",
    featureText2: (<>Battery <br/> Warranty</>),

    feature3: "25 Yrs",
    featureText3: (<>Solar Panel <br/>Performance Warranty </>),

    feature4: "Lifetime",
    featureText4: "Technical Support",

    rating: "4.7/5",
  },
];
  return (
    <section className="products-section">
      {/* Heading */}
      <div className="sector-heading">
        <div className="line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="204"
            height="29"
            viewBox="0 0 374 5"
            fill="none"
          >
            <path
              d="M2.5 2.5H110.034H191H262.874H371.5"
              stroke="#FFD700"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h2>Saftey & Lightning Solutions</h2>

        <div className="arrow-line">
          <div className="line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="29"
              viewBox="0 0 372 29"
              fill="none"
            >
              <path
                d="M2.5 11.9337C1.11929 11.9337 0 13.053 0 14.4337C0 15.8144 1.11929 16.9337 2.5 16.9337V14.4337V11.9337ZM371.5 14.4337L346.5 -4.1008e-05V28.8675L371.5 14.4337ZM2.5 14.4337V16.9337H108.942V14.4337V11.9337H2.5V14.4337ZM108.942 14.4337V16.9337H188V14.4337V11.9337H108.942V14.4337ZM188 14.4337V16.9337H256.5V14.4337V11.9337H188V14.4337ZM256.5 14.4337V16.9337H349V14.4337V11.9337H256.5V14.4337Z"
                fill="#FFD700"
              />
            </svg>
          </div>
        </div>
      </div>

    {/* Product Cards */}
{products.map((product, index) => (
  <div
    className={`product-card ${index % 2 !== 0 ? "reverse-card" : ""}`}
    key={index}
  >
    {/* Left Image */}
    <div className="product-image">
      <img src={product.image} alt={product.title} />
    </div>

    {/* Right Content */}
    <div className="product-content">
      <h3>{product.title}</h3>

      <div className="yellow-line"></div>

      <p>{product.description}</p>

{/* Features */}
<div
  className={`features ${
    product.feature3 ? "features-multi" : ""
  }`}
>
  <div
    className={`feature-box ${
      product.feature1 === "EVO SERIES" ? "no-border" : ""
    }`}
  >
    <h4
      className={`${
        product.feature1 === "EVO SERIES"
          ? "brown-text"
          : ""
      }`}
    >
      {product.feature1}
    </h4>

    <span
      className={`${
        product.feature1 === "EVO SERIES"
          ? "brown-text"
          : ""
      }`}
    >
      {product.featureText1}
    </span>
  </div>

  {product.feature2 && (
    <div className="feature-box">
      <h4>{product.feature2}</h4>
      <span>{product.featureText2}</span>
    </div>
  )}

  {product.feature3 && (
    <div className="feature-box">
      <h4>{product.feature3}</h4>
      <span>{product.featureText3}</span>
    </div>
  )}

  {product.feature4 && (
    <div className="feature-box">
      <h4>{product.feature4}</h4>
      <span>{product.featureText4}</span>
    </div>
  )}

  {product.feature5 && (
    <div className="feature-box">
      <h4>{product.feature5}</h4>
      <span>{product.featureText5}</span>
    </div>
  )}
</div>

      {/* Bottom */}
      <div className="product-footer">
        <button className="book-btn" onClick={openContactPopup}>
          Book Now
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </span>
        </button>

        <div className="rating">
          <div className="stars">
            {stars.map((star, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 28"
                fill="none"
              >
                <path
                  d="M9.92396 8.52609L13.6917 1.09113C13.8014 0.87596 13.9701 0.694983 14.1789 0.568492C14.3876 0.442002 14.6282 0.375 14.8737 0.375C15.1192 0.375 15.3598 0.442002 15.5685 0.568492C15.7773 0.694983 15.946 0.87596 16.0557 1.09113L19.8234 8.52609L28.2465 9.72546C28.4895 9.75847 28.7181 9.85775 28.9062 10.012C29.0943 10.1662 29.2344 10.3691 29.3105 10.5976C29.3866 10.8261 29.3955 11.0709 29.3364 11.3042C29.2773 11.5374 29.1524 11.7497 28.976 11.9167L22.882 17.7004L24.3207 25.8715C24.5049 26.9202 23.3737 27.7189 22.4063 27.2243L14.8737 23.3647L7.33959 27.2243C6.37372 27.7203 5.24252 26.9202 5.4267 25.8701L6.86536 17.699L0.771368 11.9153C0.595867 11.7482 0.471742 11.5361 0.413102 11.3033C0.354462 11.0704 0.36366 10.8262 0.439649 10.5982C0.515638 10.3702 0.655371 10.1677 0.842965 10.0137C1.03056 9.85967 1.25849 9.7603 1.50085 9.72688L9.92396 8.52609Z"
                  fill="#FFD700"
                />
              </svg>
            ))}
          </div>

          <span>{product.rating}</span>
        </div>
      </div>
    </div>
  </div>
))}
    </section>
  );
};

export default SolustionPage;