import React, { useEffect, useState } from "react";
import "./CSs/AboutSolar.css";
import img1 from "./Images/image 3.png"
import img2 from "./Images/dl.beatsnoop.com-vrayPMUdXk 1.png"
const Counter = ({ end }) => {
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

    const element = document.getElementById(`counter-${end}`);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [end]);

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

  return <span id={`counter-${end}`}>{count}+</span>;
};
const AboutSolar = () => {
  return (
    <section className="aboutsolar-section">
      <div className="aboutsolar-container">

        {/* Left Side */}
        <div className="aboutsolar-left">

          <div className="aboutsolar-card image-card">
            <img
              src={img1}
              alt="Solar Worker"
            />
          </div>

          <div className="aboutsolar-card stats-card">
            <h2> <Counter end={100} /></h2>
            <p>Successful Project</p>
          </div>

          <div className="aboutsolar-card award-card">
            <div className="stars">★★★★★</div>
            <h2><Counter end={150} /></h2>
            <p>Best Performer Awards</p>
          </div>

          <div className="aboutsolar-card image-card">
            <img
              src={img2}
              alt="Solar Team"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="aboutsolar-right">

          <button className="about-btn">✦ ABOUT US</button>

          <h1>
            Innovating Solar Energy 
            for Every Home & Business
          </h1>

          <p className="about-desc">
            At Solarp we are passionate about harnessing the power of the
            sun to create a cleaner, more sustainable world. With a
            commitment to innovation.
          </p>

          <div className="about-features">

            <div className="feature-item">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_823_5831)">
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#paint0_linear_823_5831)"/>
    <path d="M10.3814 15.81C10.1825 15.81 9.99177 15.7309 9.85115 15.5903L6.97115 12.7103C6.89952 12.6411 6.84238 12.5583 6.80308 12.4668C6.76377 12.3753 6.74308 12.2769 6.74222 12.1773C6.74135 12.0777 6.76033 11.979 6.79804 11.8868C6.83575 11.7946 6.89144 11.7109 6.96186 11.6405C7.03228 11.57 7.11602 11.5143 7.20819 11.4766C7.30036 11.4389 7.39912 11.4199 7.4987 11.4208C7.59829 11.4217 7.6967 11.4424 7.78821 11.4817C7.87971 11.521 7.96247 11.5781 8.03165 11.6498L10.3814 13.9995L15.9712 8.40975C16.1126 8.27313 16.3021 8.19754 16.4987 8.19925C16.6954 8.20096 16.8835 8.27983 17.0225 8.41889C17.1616 8.55794 17.2405 8.74605 17.2422 8.9427C17.2439 9.13935 17.1683 9.3288 17.0317 9.47025L10.9117 15.5903C10.771 15.7309 10.5803 15.81 10.3814 15.81Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_823_5831" x1="1.1595e-07" y1="11.9998" x2="24" y2="11.9998" gradientUnits="userSpaceOnUse">
      <stop stop-color="#15B2FF"/>
      <stop offset="1" stop-color="#302E99"/>
    </linearGradient>
    <clipPath id="clip0_823_5831">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg></span>
              <p>Your Trusted Solar Partner</p>
            </div>

            <div className="feature-item">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_823_5831)">
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#paint0_linear_823_5831)"/>
    <path d="M10.3814 15.81C10.1825 15.81 9.99177 15.7309 9.85115 15.5903L6.97115 12.7103C6.89952 12.6411 6.84238 12.5583 6.80308 12.4668C6.76377 12.3753 6.74308 12.2769 6.74222 12.1773C6.74135 12.0777 6.76033 11.979 6.79804 11.8868C6.83575 11.7946 6.89144 11.7109 6.96186 11.6405C7.03228 11.57 7.11602 11.5143 7.20819 11.4766C7.30036 11.4389 7.39912 11.4199 7.4987 11.4208C7.59829 11.4217 7.6967 11.4424 7.78821 11.4817C7.87971 11.521 7.96247 11.5781 8.03165 11.6498L10.3814 13.9995L15.9712 8.40975C16.1126 8.27313 16.3021 8.19754 16.4987 8.19925C16.6954 8.20096 16.8835 8.27983 17.0225 8.41889C17.1616 8.55794 17.2405 8.74605 17.2422 8.9427C17.2439 9.13935 17.1683 9.3288 17.0317 9.47025L10.9117 15.5903C10.771 15.7309 10.5803 15.81 10.3814 15.81Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_823_5831" x1="1.1595e-07" y1="11.9998" x2="24" y2="11.9998" gradientUnits="userSpaceOnUse">
      <stop stop-color="#15B2FF"/>
      <stop offset="1" stop-color="#302E99"/>
    </linearGradient>
    <clipPath id="clip0_823_5831">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg></span>
              <p>Your Partner in Solar Energy</p>
            </div>

            <div className="feature-item">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_823_5831)">
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#paint0_linear_823_5831)"/>
    <path d="M10.3814 15.81C10.1825 15.81 9.99177 15.7309 9.85115 15.5903L6.97115 12.7103C6.89952 12.6411 6.84238 12.5583 6.80308 12.4668C6.76377 12.3753 6.74308 12.2769 6.74222 12.1773C6.74135 12.0777 6.76033 11.979 6.79804 11.8868C6.83575 11.7946 6.89144 11.7109 6.96186 11.6405C7.03228 11.57 7.11602 11.5143 7.20819 11.4766C7.30036 11.4389 7.39912 11.4199 7.4987 11.4208C7.59829 11.4217 7.6967 11.4424 7.78821 11.4817C7.87971 11.521 7.96247 11.5781 8.03165 11.6498L10.3814 13.9995L15.9712 8.40975C16.1126 8.27313 16.3021 8.19754 16.4987 8.19925C16.6954 8.20096 16.8835 8.27983 17.0225 8.41889C17.1616 8.55794 17.2405 8.74605 17.2422 8.9427C17.2439 9.13935 17.1683 9.3288 17.0317 9.47025L10.9117 15.5903C10.771 15.7309 10.5803 15.81 10.3814 15.81Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_823_5831" x1="1.1595e-07" y1="11.9998" x2="24" y2="11.9998" gradientUnits="userSpaceOnUse">
      <stop stop-color="#15B2FF"/>
      <stop offset="1" stop-color="#302E99"/>
    </linearGradient>
    <clipPath id="clip0_823_5831">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg></span>
              <p>Our Promise to You</p>
            </div>

            <div className="feature-item">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_823_5831)">
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#paint0_linear_823_5831)"/>
    <path d="M10.3814 15.81C10.1825 15.81 9.99177 15.7309 9.85115 15.5903L6.97115 12.7103C6.89952 12.6411 6.84238 12.5583 6.80308 12.4668C6.76377 12.3753 6.74308 12.2769 6.74222 12.1773C6.74135 12.0777 6.76033 11.979 6.79804 11.8868C6.83575 11.7946 6.89144 11.7109 6.96186 11.6405C7.03228 11.57 7.11602 11.5143 7.20819 11.4766C7.30036 11.4389 7.39912 11.4199 7.4987 11.4208C7.59829 11.4217 7.6967 11.4424 7.78821 11.4817C7.87971 11.521 7.96247 11.5781 8.03165 11.6498L10.3814 13.9995L15.9712 8.40975C16.1126 8.27313 16.3021 8.19754 16.4987 8.19925C16.6954 8.20096 16.8835 8.27983 17.0225 8.41889C17.1616 8.55794 17.2405 8.74605 17.2422 8.9427C17.2439 9.13935 17.1683 9.3288 17.0317 9.47025L10.9117 15.5903C10.771 15.7309 10.5803 15.81 10.3814 15.81Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_823_5831" x1="1.1595e-07" y1="11.9998" x2="24" y2="11.9998" gradientUnits="userSpaceOnUse">
      <stop stop-color="#15B2FF"/>
      <stop offset="1" stop-color="#302E99"/>
    </linearGradient>
    <clipPath id="clip0_823_5831">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg></span>
              <p>Join the Solar Revolution</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSolar;