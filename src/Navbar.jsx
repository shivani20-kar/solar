
import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import logoImg from "../src/pournimalogo.png";
import ContactPopup from "./HomePage/ContactPopup";

const Navbar = () => {
   const [showPopup, setShowPopup] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo-section">
          <img
            src={logoImg}
            alt="Pournima Logo"
            className="navbar-logo-image"
          />
        </div>

        {/* Nav Links */}
        <ul className="navbar-nav-links">
          {/* HOME */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar-nav-item active-link" : "navbar-nav-item"
              }
            >
              Home
            </NavLink>
          </li>

          {/* BLOGS */}
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "navbar-nav-item active-link" : "navbar-nav-item"
              }
            >
              Blogs
            </NavLink>
          </li>

          {/* ABOUT */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "navbar-nav-item active-link" : "navbar-nav-item"
              }
            >
              About Us
            </NavLink>
          </li>

          {/* PRODUCTS */}
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "navbar-nav-item active-link" : "navbar-nav-item"
              }
            >
              Our Products
            </NavLink>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="navbar-services-dropdown">
            <div className="navbar-nav-item navbar-services-link">
              Services
              <FiChevronDown className="navbar-dropdown-icon" />
            </div>

            {/* DROPDOWN MENU */}
            <ul className="navbar-dropdown-menu">
              <li>
                <NavLink to="/off-grid-solar" className="navbar-dropdown-item">
                  Off-Grid Solar
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/hybrid-solar-system"
                  className="navbar-dropdown-item"
                >
                  Hybrid Solar System
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/solar-water-heater"
                  className="navbar-dropdown-item"
                >
                  Solar Water Heater
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/solar-street-light"
                  className="navbar-dropdown-item"
                >
                  Solar Street Light
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/solar-emergency-lights"
                  className="navbar-dropdown-item"
                >
                  Solar Emergency Lights
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/solar-high-mist-system"
                  className="navbar-dropdown-item"
                >
                  Solar High Mist System
                </NavLink>
              </li>

              <li>
                <NavLink to="/solar-cctv" className="navbar-dropdown-item">
                  Solar CCTV
                </NavLink>
              </li>

              <li>
                <NavLink to="/water-purifier" className="navbar-dropdown-item">
                  Water Purifier
                </NavLink>
              </li>

              <li>
                <NavLink to="/led-bulbs" className="navbar-dropdown-item">
                  Led Bulbs
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        {/* Contact Button */}
        <button className="navbar-contact-btn" onClick={() => setShowPopup(true)}>
          Contact Us
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </button>
        {/* Popup */}
{showPopup && (
  <ContactPopup closePopup={() => setShowPopup(false)} />
)}
      </div>
    </nav>
  );
};

export default Navbar;
