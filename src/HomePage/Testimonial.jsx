import React, { useState } from "react";
import "./CSs/Testimonial.css";

import img1 from "./Images/t-img6.png.png";
import img2 from "./Images/image 2.png";
import img3 from "./Images/t-img6.png (1).png";

const testimonialData = [
  {
    image: img1,
    text: `Installing the solar pump from Pournima Solar System has made my farming much easier. I no longer worry about power cuts or diesel costs.`,
    name: "Ramesh Shinde",
    location: "Nashik, Maharashtra",
  },
  {
    image: img2,
    text: `I am very happy with the service from Pournima Solar. The installation was smooth, and their team guided me properly. My irrigation expenses have reduced, and I can now focus more on improving my farm productivity.`,
    name: "Suresh Patil",
    location: "Kolhapur, Maharashtra",
  },
  {
    image: img3,
    text: `"Switching to solar was the best decision for my farm. Pournima Solar provided a high-quality system and great after-sales service. I am saving money and getting better crop results without worrying about electricity."`,
    name: "Mahesh Jadhav",
    location: "Satara, Maharashtra",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(
      current === 0 ? testimonialData.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrent(
      current === testimonialData.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonial-top">
        <span className="testimonial-badge">✦ TESTIMONIALS</span>

        <div className="testimonial-header">
          <h2>Hear from Our Happy Customers</h2>

          <div className="testimonial-nav">
            <button onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </button>

            <button onClick={nextSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-image">
          <img
            src={testimonialData[current].image}
            alt={testimonialData[current].name}
          />
        </div>

        <div className="testimonial-content">
          <div className="stars">★★★★★</div>

          <p className="testimonial-text">
            "{testimonialData[current].text}"
          </p>

          <div className="testimonial-user">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user"
            />

            <div>
              <h4>{testimonialData[current].name}</h4>
              <span>{testimonialData[current].location}</span>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonialData.map((_, index) => (
              <span
                key={index}
                className={current === index ? "active" : ""}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;