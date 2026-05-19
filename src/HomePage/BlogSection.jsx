import { useNavigate } from "react-router-dom";
import "./CSs/BlogSection.css";
import blog1 from "./Images/blog.png";
import blog2 from "./Images/blog-img14.png.png";
import blog3 from "./Images/blog-img14.png (1).png";

const blogData = [
  {
    id: 1,
    image: blog1,
    author: "Ritesh Shinde",
    date: "10 Sep, 2024",
    title: "The Future of Clean Power",
    desc: "Solar energy is revolutionizing how we generate and consume electricity. By harnessing the sun’s power, solar panels provide a sustainable.",
  },
  {
    id: 2,
    image: blog2,
    author: "Jitesh Sharma",
    date: "10 July, 2024",
    title: "5 Benefits of switching to solar for your business",
    desc: "From reducing operational costs to boosting brand value, solar energy offers multiple advantages of businesses of all sizes.",
  },
  {
    id: 3,
    image: blog3,
    author: "Payal Jadhav",
    date: "30 Aug, 2024",
    title: "Sustainable Living: Small Steps, Big Impact.",
    desc: "Sustainability starts with our daily choices. Learn practical ways to reduce your carbon footprint and build a greener tommrow.",
  },
];

const BlogSection = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-section">
      <div className="blog-top">
        <div>
          <button className="blog-tag">✦ OUR BLOG</button>

          <h1 className="blog-heading">
            Insights on Solar Energy
         
            and Sustainable Living
          </h1>
        </div>

        <button className="blog-view-btn"  onClick={() => navigate("/blogs")}>
          View All Blog  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </button>
      </div>

      <div className="blog-cards">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-image"
            />

            <div className="blog-info">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M16 18C15.705 17.1395 15.0545 16.3786 14.1513 15.8362C13.2472 15.2938 12.1387 15 11 15C9.86128 15 8.75276 15.2938 7.84869 15.8362C6.94548 16.3786 6.29589 17.1395 6 18" stroke="#676B74" stroke-width="2"/>
  <path d="M10.5 11C11.8807 11 13 9.88071 13 8.5C13 7.11929 11.8807 6 10.5 6C9.11929 6 8 7.11929 8 8.5C8 9.88071 9.11929 11 10.5 11Z" stroke="#676B74" stroke-width="2" stroke-linecap="round"/>
  <path d="M15.5 3H5.5C4.11929 3 3 4.11929 3 5.5V15.5C3 16.8807 4.11929 18 5.5 18H15.5C16.8807 18 18 16.8807 18 15.5V5.5C18 4.11929 16.8807 3 15.5 3Z" stroke="#676B74" stroke-width="2"/>
</svg> {blog.author}</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_823_7136)">
    <path d="M7 2V5M14 2V5" stroke="#676B74" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.3333 4H4.66667C3.74619 4 3 4.74619 3 5.66667V17.3333C3 18.2538 3.74619 19 4.66667 19H16.3333C17.2538 19 18 18.2538 18 17.3333V5.66667C18 4.74619 17.2538 4 16.3333 4Z" stroke="#676B74" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 9H18M7.16667 12.5H7.175M10.5 12.5H10.5083M13.8333 12.5H13.8417M7.16667 16H7.175M10.5 16H10.5083M13.8333 16H13.8417" stroke="#676B74" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_823_7136">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg> {blog.date}</span>
            </div>

            <h2 className="blog-title">{blog.title}</h2>

            <p className="blog-desc">{blog.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;