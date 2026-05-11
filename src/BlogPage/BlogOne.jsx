// BlogOne.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

import "./BlogOne.css";

import blog1 from "../BlogPage/blog1.png";
import blog2 from "../BlogPage/blog2.png";
import blog3 from "../BlogPage/blog3.png";
import blog4 from "../BlogPage/blog4.png";

const BlogOne = () => {
  const navigate = useNavigate();

  const moreNews = [
    {
      id: 2,
      image: blog2,
      author: "Neha Patil",
      date: "14 Sep, 2024",
      title: "The Future of Clean Power",
      desc: "Solar energy is revolutionizing how we generate and consume electricity. By harnessing the sun’s power, solar panels provide a sustainable.",
      route: "/blog-two",
    },

    {
      id: 3,
      image: blog3,
      author: "Sophia Lee",
      date: "18 Sep, 2024",
      title: "Complete Guide to Solar Panels for Homes",
      desc: "Learn everything you need to know before installing solar panels at home. From system types to costs, make informed decisions with ease.",
      route: "/blog-three",
    },

    {
      id: 4,
      image: blog4,
      author: "Michael Brown",
      date: "22 Sep, 2024",
      title: "Solar Panel Maintenance Tips for Long Life",
      desc: "Learn everything you need to know before installing solar panels at home. From system types to costs, make informed decisions with ease.",
      route: "/blog-four",
    },
  ];

  return (
    <section className="blogone-section">
      <div className="blogone-container">
        {/* TOP */}

        <div className="blogone-breadcrumb">
          <span onClick={() => navigate("/blogs")}>Blog</span>

          <p> &gt;&gt; </p>

          <span className="active">Blog Details</span>
        </div>

        <div className="blogone-top">
          <span className="author-name">Rahul Deshmukh</span>

          <span className="blog-date">| 08 May, 2024</span>
        </div>

        {/* TITLE */}

        <h1 className="blogone-title">
          Energy Max Expands to <br />
          Three New Cities
        </h1>

        {/* MAIN IMAGE */}

        <img src={blog1} alt="" className="blogone-main-image" />

        {/* PARAGRAPH */}

        <p className="blogone-para">
          Getting solar panels installed is only the beginning. The real benefit
          comes from how efficiently you use the energy they produce. With a few
          smart habits, you can significantly increase your overall savings.
          Here are five effective ways to make the most out of your solar
          system.
        </p>

        {/* CONTENT */}

        <div className="blogone-content">
          <ul className="blogone-list">
            <li className="blogone-item">
              <h3>Use Energy When the Sun is Strong</h3>

              <p>
                Getting solar panels installed is only the beginning. The real benefit comes from how efficiently you use the energy they produce. With a few smart habits, you can significantly increase your overall savings. Here are five effective ways to make the most out of your solar system.
              </p>
            </li>

            <li className="blogone-item">
              <h3>Keep Your Panels Dust-Free</h3>

              <p>
                Over time, dust and dirt can reduce your panels’ efficiency. Regular cleaning helps them perform at their best. A simple rinse every few months is usually enough, but in dusty areas, more frequent cleaning may be needed. Clean panels produce more energy, which directly means better savings.
              </p>
            </li>

            <li className="blogone-item">
              <h3>Track Your System Performance</h3>

              <p>Make it a habit to check your solar system’s performance through its monitoring app. It only takes a few seconds and helps you ensure everything is working properly. Spotting any drop in performance early can prevent bigger issues and protect your savings.</p>
            </li>

            <li className="blogone-item">
              <h3>Switch to Energy-Efficient Devices</h3>

              <p>Since your solar system generates a limited amount of energy, using efficient appliances helps you get more value from it. LED lighting, energy-efficient appliances, and smart thermostats reduce your overall consumption, allowing you to save more or even send extra energy back to the grid.</p>
            </li>


            <li className="blogone-item">
              <h3>Plan Big Installations Smartly</h3>

              <p>If you're thinking of adding appliances like an air conditioner or a pool heater, plan them after installing your solar system. This way, you can design your system to support these needs and avoid relying on costly grid electricity later.</p>
            </li>
          </ul>
        </div>

        {/* MORE NEWS */}

        <div className="more-news">
          <h2>More News</h2>

          <div className="more-news-grid">
            {moreNews.map((item, index) => (
              <div
                className="more-news-card"
                key={index}
                onClick={() => navigate(item.route)}
              >
                <img src={item.image} alt="" className="more-news-image" />

                {/* META */}

                <div className="more-news-meta">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16 18C15.705 17.1395 15.0545 16.3786 14.1513 15.8362C13.2472 15.2938 12.1387 15 11 15C9.86128 15 8.75276 15.2938 7.84869 15.8362C6.94548 16.3786 6.29589 17.1395 6 18"
                        stroke="#676B74"
                        strokeWidth="2"
                      />
                      <path
                        d="M10.5 11C11.8807 11 13 9.88071 13 8.5C13 7.11929 11.8807 6 10.5 6C9.11929 6 8 7.11929 8 8.5C8 9.88071 9.11929 11 10.5 11Z"
                        stroke="#676B74"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M15.5 3H5.5C4.11929 3 3 4.11929 3 5.5V15.5C3 16.8807 4.11929 18 5.5 18H15.5C16.8807 18 18 16.8807 18 15.5V5.5C18 4.11929 16.8807 3 15.5 3Z"
                        stroke="#676B74"
                        strokeWidth="2"
                      />
                    </svg>

                    {item.author}
                  </span>

                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_814_729)">
                        <path
                          d="M7 2V5M14 2V5"
                          stroke="#676B74"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.3333 4H4.66667C3.74619 4 3 4.74619 3 5.66667V17.3333C3 18.2538 3.74619 19 4.66667 19H16.3333C17.2538 19 18 18.2538 18 17.3333V5.66667C18 4.74619 17.2538 4 16.3333 4Z"
                          stroke="#676B74"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 9H18M7.16667 12.5H7.175M10.5 12.5H10.5083M13.8333 12.5H13.8417M7.16667 16H7.175M10.5 16H10.5083M13.8333 16H13.8417"
                          stroke="#676B74"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>

                      <defs>
                        <clipPath id="clip0_814_729">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    {item.date}
                  </span>
                </div>

                <div className="more-news-content">
                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
