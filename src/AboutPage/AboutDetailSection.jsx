// AboutDetailSection.jsx

import React from "react";
import "../AboutPage/Css/AboutDetailSection.css";
import companyLogo from "../pournimalogo.png";

const AboutDetailSection = () => {
  return (
    <section className="aboutdetail-section">

      <div className="aboutdetail-card">

        {/* TOP AREA */}

        <div className="aboutdetail-top">

          {/* LOGO */}

          <div className="aboutdetail-logo">
            <img src={companyLogo} alt="company logo" />
          </div>

          {/* TITLE */}

          <div className="aboutdetail-title-area">

            <h2>Company Details</h2>

            <div className="aboutdetail-yellow-line"></div>

          </div>

        </div>

        {/* DETAILS */}

        <div className="aboutdetail-content">

          <p>
            <span>Brand Name :- </span>
            Pournima Energy And Infra LLP.
          </p>

          <p>
            <span>Tag Line :- </span>
            Powering a Brighter, Greener Sustainable Future.
          </p>

          <p>
            <span>Established In :- </span>
            2011.
          </p>

          <p>
            <span>GST No:- </span>
            27ABHFP7712L1ZS.
          </p>

          <p>
            <span>Service Area:- </span>
            Across Maharashtra & All Over India.
          </p>

        </div>

      </div>

    </section>
  );
};

export default AboutDetailSection;