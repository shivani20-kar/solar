import React from "react";
import "./CSs/Projects.css";
import img1 from "./Images/Link.png";
import img2 from "./Images/Container.png"
import img3 from "./Images/Link (1).png"
import img4 from "./Images/Container (1).png"

const projects = [
  {
    id: 1,
    title: "Residential Installations",
    desc: "Seamless, efficient, and future-ready solar systems designed for modern homes.",
    image:
img1 ,
    large: true,
  },
  {
    id: 2,
    title: "Commercial Installations",
    desc: "Reduce operational costs and power your business with reliable, scalable solar energy.",
    image:img2  },
  {
    id: 3,
    title: "Industrial EPC Solutions",
    desc: "“Complete solar project execution tailored for industrial-scale performance.”",
    image:img3  },
  {
    id: 4,
    title: "Government Projects",
    desc: "“Trusted solar solutions powering public infrastructure.”",
    image:img4  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="top-row">
        <div>
          <span className="tag">✦ OUR PROJECTS</span>
          <h2>
            Transforming Lives <br />
            with Solar Energy
          </h2>
        </div>

        <button className="view-btn">
          View All Projects  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((item) => (
          <div
            key={item.id}
            className={`project-card ${item.large ? "large" : ""}`}
          >
            <img src={item.image} alt={item.title} />

            <div className="overlay">
              <small>{item.title}</small>

              <div className="overlay-content">
                <p>{item.desc}</p>

                <button className="arrow-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                        </svg></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}