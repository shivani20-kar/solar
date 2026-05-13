import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import bgImg from "../src/Footerbackgroundimg.png";
import footerLogo from "../src/Footerlogowhite.png";
import watermarkImg from "../src/FooterBackgroundImage.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* HERO SECTION */}
      <section
        className="footer-hero"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="footer-hero-overlay">
          <h1 className="footer-hero-title">
            Pournima Solar powers your home with clean, affordable energy.
          </h1>

          <div className="footer-hero-input">
            <input type="email" placeholder="Enter email..." />

            <button>
              Let’s Connect
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="footer"
        style={{
          "--watermark-image": `url(${watermarkImg})`,
        }}
      >
        <div className="footer-container">
          <div className="footer-col">
            {/* LOGO IMAGE */}
            <div className="footer-logo-wrap">
              <img
                src={footerLogo}
                alt="Pournima Logo"
                className="footer-logo-img"
              />
            </div>

            <p className="footer-desc">
              We’re dedicated to helping you harness the power of the sun to
              create a sustainable future. Whether you're looking to reduce
              energy costs.
            </p>

            <div className="footer-social-icons">
              {/* Facebook */}
              <a href="#" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                  <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.39-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.8A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8zm6.4-.9a1 1 0 1 0-1 1 1 1 0 0 0 1-1z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                  <path d="M23 7.5a3 3 0 0 0-2.1-2.1C18.7 5 12 5 12 5s-6.7 0-8.9.4A3 3 0 0 0 1 7.5 31.6 31.6 0 0 0 1 12a31.6 31.6 0 0 0 .1 4.5A3 3 0 0 0 3.1 18.6C5.3 19 12 19 12 19s6.7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 23 12a31.6 31.6 0 0 0 0-4.5zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Contact Us</h3>

            <p className="footer-contact-item">
              <span className="footer-icon">
                {/* LOCATION SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                  fill="none"
                >
                  <path
                    d="M9.34909 13.5566C8.73269 13.5566 8.13008 13.3738 7.61756 13.0313C7.10503 12.6889 6.70556 12.2021 6.46966 11.6326C6.23377 11.0631 6.17205 10.4365 6.29231 9.83188C6.41257 9.22731 6.7094 8.67196 7.14527 8.23609C7.58114 7.80022 8.13647 7.50339 8.74103 7.38313C9.34566 7.26287 9.97227 7.32459 10.5418 7.56048C11.1113 7.79638 11.5981 8.19585 11.9405 8.70838C12.283 9.22092 12.4658 9.8235 12.4658 10.4399C12.4647 11.2662 12.1361 12.0584 11.5518 12.6426C10.9676 13.2269 10.1754 13.5556 9.34909 13.5566ZM9.34909 8.56991C8.97922 8.56991 8.61769 8.67959 8.31015 8.88506C8.00269 9.09054 7.76297 9.3826 7.62144 9.72429C7.4799 10.066 7.44287 10.442 7.51502 10.8047C7.58718 11.1675 7.76528 11.5007 8.02677 11.7622C8.28833 12.0237 8.6215 12.2018 8.98428 12.274C9.34699 12.3461 9.72301 12.3091 10.0647 12.1676C10.4064 12.0261 10.6985 11.7863 10.9039 11.4789C11.1094 11.1713 11.2191 10.8098 11.2191 10.4399C11.2186 9.94411 11.0214 9.46876 10.6709 9.11817C10.3202 8.76758 9.84487 8.57041 9.34909 8.56991Z"
                    fill="white"
                  />
                  <path
                    d="M9.35052 20.569L4.57012 14.7551C4.5037 14.6678 4.43796 14.58 4.37292 14.4915C3.55676 13.382 3.11566 12.0273 3.11719 10.6347C3.11719 8.92982 3.77391 7.2948 4.94289 6.0893C6.11186 4.88379 7.69734 4.20654 9.35052 4.20654C11.0037 4.20654 12.5892 4.88379 13.7582 6.0893C14.9271 7.2948 15.5839 8.92982 15.5839 10.6347C15.5852 12.0266 15.1443 13.3807 14.3287 14.4898L14.3281 14.4915C14.3281 14.4915 14.1581 14.7218 14.1327 14.7528L9.35052 20.569ZM5.27788 13.7874C5.27788 13.7874 5.40992 13.9673 5.43995 14.0059L9.35052 18.7622L13.2662 13.9995C13.2912 13.9673 13.4243 13.7856 13.4243 13.7856C14.0914 12.8794 14.4519 11.7725 14.4506 10.6347C14.4506 9.2398 13.9132 7.90205 12.9567 6.91573C12.0003 5.92941 10.7032 5.37529 9.35052 5.37529C7.99788 5.37529 6.70071 5.92941 5.74428 6.91573C4.78784 7.90205 4.25052 9.2398 4.25052 10.6347C4.24913 11.7732 4.61004 12.8808 5.27788 13.7874Z"
                    fill="white"
                  />
                </svg>
              </span>

              <span>
                POURNIMA SOLAR AND INFRA LLP. Block No 302 Third Floor, Shubhdin
                Pride Opposite irrigation office, Bombay Restaurant Chowk Satara
                415002
              </span>
            </p>

            <p className="footer-contact-item">
              <span className="footer-icon">
                {/* PHONE SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1077 5.271 12.2577 4.363 10.225C3.455 8.19233 3.00067 6.134 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
                    fill="white"
                  />
                </svg>
              </span>

              <span>+91 9975270003</span>
            </p>

            <p className="footer-contact-item">
              <span className="footer-icon">
                {/* EMAIL SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.5 5H3.5C3.10218 5 2.72064 5.15804 2.43934 5.43934C2.15804 5.72064 2 6.10218 2 6.5V18.5C2 18.8978 2.15804 19.2794 2.43934 19.5607C2.72064 19.842 3.10218 20 3.5 20H21.5C21.8978 20 22.2794 19.842 22.5607 19.5607C22.842 19.2794 23 18.8978 23 18.5V6.5C23 6.10218 22.842 5.72064 22.5607 5.43934C22.2794 5.15804 21.8978 5 21.5 5ZM19.85 6.5L12.5 11.585L5.15 6.5H19.85ZM3.5 18.5V7.1825L12.0725 13.115C12.198 13.2021 12.3472 13.2488 12.5 13.2488C12.6528 13.2488 12.802 13.2021 12.9275 13.115L21.5 7.1825V18.5H3.5Z"
                    fill="white"
                  />
                </svg>
              </span>

              <span>infomailsolarp@gmail.com</span>
            </p>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>

            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/why-us">Why Choose Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Support</h3>

            <ul className="footer-links">
              <li>
                <Link to="/support">Customer Service</Link>
              </li>
              <li>
                <Link to="/installation">Installation Process</Link>
              </li>
              <li>
                <Link to="/maintenance">Maintenance Plans</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">Solar FAQ</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © Copyright 2025{" "}
            <span className="brand">POURNIMA ENERGY AND INFRA</span>. All rights
            reserved
          </p>

          {/* CENTER */}
          <div className="footer-designed">
            Designed By{" "}
            <a
              href="https://designvio.framer.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="designvio-link"
            >
              Designvio
            </a>
            Pvt. Ltd.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M18.2269 1C17.0544 1.01799 15.9074 1.34088 14.9019 1.93606C13.8964 2.53123 13.0679 3.37762 12.5 4.38975C11.9321 3.37762 11.1036 2.53123 10.0981 1.93606C9.09256 1.34088 7.94564 1.01799 6.77314 1C4.90404 1.08011 3.14305 1.88673 1.87489 3.24364C0.606735 4.60055 -0.0655042 6.39744 0.00504078 8.24175C0.00504078 15.201 11.4129 23.2388 11.8982 23.5799L12.5 24L13.1018 23.5799C13.5871 23.2409 24.995 15.201 24.995 8.24175C25.0655 6.39744 24.3933 4.60055 23.1251 3.24364C21.8569 1.88673 20.096 1.08011 18.2269 1Z"
                fill="#FD5B5B"
              />
            </svg>
          </div>

          <div className="footer-bottom-links">
            <Link to="/terms">Terms & Conditions</Link>
            <span className="dividers">|</span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
