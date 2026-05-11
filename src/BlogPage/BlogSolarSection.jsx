// BlogSolarSection.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogSolarSection.css";

import blog1 from "../BlogPage/blog1.png";
import blog2 from "../BlogPage/blog2.png";
import blog3 from "../BlogPage/blog3.png";
import blog4 from "../BlogPage/blog4.png";
import blog5 from "../BlogPage/blog5.png";
import blog6 from "../BlogPage/blog6.png";

const blogs = [
  {
    id: 1,
    image: blog1,
    author: "Rahul Deshmukh",
    date: "08 May, 2024",
    title: "Energy Max Expands to Three New Cities",
    desc: "Energy Max brings solar solutions to new regions, expanding clean energy access. This move aims to make solar more affordable and widely available.",
    route: "/blog-one",
  },

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

  {
    id: 5,
    image: blog5,
    author: "Emma Wilson",
    date: "25 Sep, 2024",
    title: "On-Grid vs Off-Grid vs Hybrid Solar Systems",
    desc: "Understand the differences between major solar system types. Choose the right solution based on your energy needs and budget.",
    route: "/blog-five",
  },

  {
    id: 6,
    image: blog6,
    author: "James Carter",
    date: "30 Sep, 2024",
    title: "How Much Does a Solar System Cost in India?",
    desc: "Explore the complete cost breakdown of solar installations in India. Learn about pricing, subsidies, and long-term savings.",
    route: "/blog-six",
  },
];

const BlogSolarSection = () => {

  const navigate = useNavigate();

  const handleBlogClick = (blog) => {
    navigate(blog.route);
  };

  return (
    <section className="blogsolar-section">

      <div className="blogsolar-container">

        <h2 className="blogsolar-heading">
          Going Solar Made Easy: <br />
          Everything You Need to Know
        </h2>

        <div className="blogsolar-grid">

          {blogs.map((blog, index) => (

            <div
              className="blogsolar-card"
              key={index}
              onClick={() => handleBlogClick(blog)}
            >

              <img
                src={blog.image}
                alt="blog"
                className="blogsolar-image"
              />

              <div className="blogsolar-meta">

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

                  {blog.author}
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

                  {blog.date}
                </span>

              </div>

              <h3>{blog.title}</h3>

              <p>{blog.desc}</p>

            </div>

          ))}

        </div>

        <button className="blogsolar-load-btn">

          Learn More

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">

            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />

          </svg>

        </button>

      </div>

    </section>
  );
};

export default BlogSolarSection;