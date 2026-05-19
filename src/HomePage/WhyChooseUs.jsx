import "./CSs/WhyChooseUs.css";
import React, { useEffect, useState } from "react";
import img1 from "./Images/choose-img9.png.png";
import img2 from "./Images/choose-img11.png.png";
import img3 from "./Images/choose-img10.png.png";
import img4 from "./Images/choose-img12.png.png";

const Counter = ({ end, symbol = "+" }) => {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}-${symbol}`);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [end, symbol]);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;

    const duration = 1000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [startAnimation, end]);

  return (
    <span id={`counter-${end}-${symbol}`}>
      {count}
      {symbol}
    </span>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="whychoose-section">
      <div className="whychoose-container">

        {/* Left Content */}
        <div className="whychoose-left">

          <div className="whychoose-badge">
            ✦ WHY CHOOSE US
          </div>

          <h2>
            Empowering Homes and 
            Businesses with Solar
          </h2>

          <p>
            Choosing us means choosing a partner dedicated to transforming
            the way you use energy. With years of expertise, cutting-edge
            technology.
          </p>

          <div className="whychoose-stats">

            <div className="whychoose-stat-box">
              <h3><Counter end={200} symbol="+" /></h3>
              <p>Projects Completed</p>
            </div>

            <div className="whychoose-stat-box">
              <h3><Counter end={250} symbol="+" /></h3>
              <p>Happy Customer</p>
            </div>

            <div className="whychoose-stat-box">
              <h3><Counter end={99} symbol="%" /></h3>
              <p>Satisfied Customer</p>
            </div>

          </div>
        </div>

        {/* Right Images */}
        <div className="whychoose-right">

          <div className="image-grid">
            <img src={img1} alt="solar" />
            <img src={img2} alt="solar" />
            <img src={img3} alt="solar" />
            <img src={img4} alt="solar" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;