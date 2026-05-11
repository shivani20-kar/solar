import React, { useState } from "react";
import "./CSs/Consulation.css";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="consultation-section">
      <div className="consultation-container">
        
        {/* Left Content */}
        <div className="consultation-left">
          <h1>
            Book your FREE <br />
            consultation today!
          </h1>

          <p>
            “Make smarter energy <br />
            decisions with <br />
            professional support.”
          </p>
        </div>

        {/* Right Form */}
        <div className="consultation-form-box">
          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="+91 xxxxx xxxxx"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Consultation;