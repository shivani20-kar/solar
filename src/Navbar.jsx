// Navbar.jsx

import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import logoImg from "../src/pournimalogo.png";
import ContactPopup from "./HomePage/ContactPopup";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
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

          {/* Hamburger */}
          <div
            className="navbar-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>

          {/* Nav Links */}
          <ul
            className={`navbar-nav-links ${
              menuOpen ? "navbar-mobile-active" : ""
            }`}
          >
            {/* HOME */}
            <li>
              <NavLink
                to="/"
                onClick={closeAll}
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
                onClick={closeAll}
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
                onClick={closeAll}
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
                onClick={closeAll}
                className={({ isActive }) =>
                  isActive ? "navbar-nav-item active-link" : "navbar-nav-item"
                }
              >
                Our Products
              </NavLink>
            </li>

            {/* SERVICES */}
            <li className="navbar-services-dropdown">
              <div
                className="navbar-nav-item navbar-services-link"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <FiChevronDown
                  className={`navbar-dropdown-icon ${
                    servicesOpen ? "rotate-icon" : ""
                  }`}
                />
              </div>

              <ul
                className={`navbar-dropdown-menu ${
                  servicesOpen ? "show-dropdown" : ""
                }`}
              >
                <li>
                  <NavLink
                    to="/off-grid-solar"
                    className="navbar-dropdown-item"
                    onClick={closeAll}
                  >
                    Off-Grid Solar
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/hybrid-solar-system"
                    className="navbar-dropdown-item"
                    onClick={closeAll}
                  >
                    Hybrid Solar System
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/solar-water-heater"
                    className="navbar-dropdown-item"
                    onClick={closeAll}
                  >
                    Solar Water Heater
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/solar-street-light"
                    className="navbar-dropdown-item"
                    onClick={closeAll}
                  >
                    Solar Street Light
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/solar-emergency-lights"
                    className="navbar-dropdown-item"
                    onClick={closeAll}
                  >
                    Solar Emergency Lights
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/solar-high-mist-system"
                    className="navbar-dropdown-item"
                    onClick={closeAll}
                  >
                    Solar High Mist System
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/solar-cctv"
                    className="navbar-dropdown-item"
                    onClick={closeAll}
                  >
                    Solar CCTV
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/water-purifier"
                    className="navbar-dropdown-item"
                    onClick={closeAll}
                  >
                    Water Purifier
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/led-bulbs"
                    className="navbar-dropdown-item"
                    onClick={closeAll}
                  >
                    Led Bulbs
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Contact Button Mobile */}
            <button
              className="mobile-contact-btn"
              onClick={() => {
                setShowPopup(true);
                closeAll();
              }}
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </ul>

          {/* Desktop Button */}
          <button
            className="navbar-contact-btn desktop-contact-btn"
            onClick={() => setShowPopup(true)}
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </button>

          {/* Popup */}
          {showPopup && <ContactPopup closePopup={() => setShowPopup(false)} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
