import React, { useState } from "react";
import "./CSs/Dealership.css";

const DealershipPopup = ({ closePopup }) => {
  const [successPopup, setSuccessPopup] = useState(false);

  const handleSubmit = () => {
    setSuccessPopup(true);

    setTimeout(() => {
      setSuccessPopup(false);
      closePopup();
    }, 5000);
  };
    return (
    <>
        <div className="deal-popup-overlay">
          <div className="deal-popup-container">

           <button className="deal-close-btn" onClick={closePopup}>
  ✕
</button>

            {/* Header */}
            <div className="deal-popup-header">
              <h1>Become A Solar Partner</h1>
              <p>
                Join our network and grow with clean energy
                <br />
                solutions across India.
              </p>
            </div>

            {/* Form */}
            <div className="deal-form-grid">

              {/* Left */}
              <div className="deal-form-section">
                <div className="deal-section-title">
                  <span>1</span>
                  Applicant Details
                </div>

                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />

                <label>Email ID</label>
                <input type="email" placeholder="Enter email address" />

                <label>Mobile Number</label>
                <input type="text" placeholder="Enter mobile number" />

                <label>PAN Number</label>
                <input type="text" placeholder="Enter PAN Number" />

                <div className="deal-section-title">
                  <span>3</span>
                 Preferred Dealership Area
                </div>

                <label>Preferred Dealership Area / Region</label>
                <textarea
                  placeholder="Enter area / region where you want to operate"
                ></textarea>
              </div>

              {/* Right */}
              <div className="deal-form-section">
                <div className="deal-section-title">
                  <span>2</span>
                  Address Details
                </div>

                <label>Office Address</label>
                <input type="text" placeholder="Enter full office address" />

                <label>City</label>
                <input type="text" placeholder="Enter city" />

                <label>District</label>
                <input type="text" placeholder="Enter district" />

                <label>State</label>
                <input type="text" placeholder="Enter state" />

                <label>PIN Code</label>
                <input type="text" placeholder="Enter PIN code" />

                <div className="deal-section-title">
                  <span>4</span>
                 Please attach the following
                </div>

                <label>Aadhaar Card Copy</label>

             <div
  className="deal-upload-box"
  onClick={() => document.getElementById("fileUpload").click()}
>
  <input
    type="file"
    id="fileUpload"
    style={{ display: "none" }}
  />

  <div className="deal-upload-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M8.125 25C6.22917 25 4.60938 24.3438 3.26562 23.0312C1.92188 21.7188 1.25 20.1146 1.25 18.2188C1.25 16.5938 1.73958 15.1458 2.71875 13.875C3.69792 12.6042 4.97917 11.7917 6.5625 11.4375C7.08333 9.52083 8.125 7.96875 9.6875 6.78125C11.25 5.59375 13.0208 5 15 5C17.4375 5 19.5052 5.84896 21.2031 7.54688C22.901 9.24479 23.75 11.3125 23.75 13.75C25.1875 13.9167 26.3802 14.5365 27.3281 15.6094C28.276 16.6823 28.75 17.9375 28.75 19.375C28.75 20.9375 28.2031 22.2656 27.1094 23.3594C26.0156 24.4531 24.6875 25 23.125 25H16.25C15.5625 25 14.974 24.7552 14.4844 24.2656C13.9948 23.776 13.75 23.1875 13.75 22.5V16.0625L11.75 18L10 16.25L15 11.25L20 16.25L18.25 18L16.25 16.0625V22.5H23.125C24 22.5 24.7396 22.1979 25.3438 21.5938C25.9479 20.9896 26.25 20.25 26.25 19.375C26.25 18.5 25.9479 17.7604 25.3438 17.1562C24.7396 16.5521 24 16.25 23.125 16.25H21.25V13.75C21.25 12.0208 20.6406 10.5469 19.4219 9.32812C18.2031 8.10938 16.7292 7.5 15 7.5C13.2708 7.5 11.7969 8.10938 10.5781 9.32812C9.35938 10.5469 8.75 12.0208 8.75 13.75H8.125C6.91667 13.75 5.88542 14.1771 5.03125 15.0312C4.17708 15.8854 3.75 16.9167 3.75 18.125C3.75 19.3333 4.17708 20.3646 5.03125 21.2188C5.88542 22.0729 6.91667 22.5 8.125 22.5H11.25V25H8.125Z" fill="#4867FF"/>
</svg></div>

  <p>Drag & drop your file here to browse</p>

  <small>
    Supported formats: PDF, JPG, PNG (Max. 5MB)
  </small>
</div>
              </div>
            </div>

            {/* Footer */}
            <div className="deal-popup-footer">
              <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H7V6C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM6 20H18V10H6V20ZM13.4125 16.4125C13.8042 16.0208 14 15.55 14 15C14 14.45 13.8042 13.9792 13.4125 13.5875C13.0208 13.1958 12.55 13 12 13C11.45 13 10.9792 13.1958 10.5875 13.5875C10.1958 13.9792 10 14.45 10 15C10 15.55 10.1958 16.0208 10.5875 16.4125C10.9792 16.8042 11.45 17 12 17C12.55 17 13.0208 16.8042 13.4125 16.4125ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z" fill="#E3E3E3"/>
</svg> Your information is secured and will never be shared.</p>

              <button className="deal-submit-btn"  onClick={handleSubmit}>
                Submit Form <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
              </button>
            </div>

          </div>
        </div>
      {successPopup && (
  <div className="success-overlay">
    <div className="success-popup">

      <div className="success-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <path d="M44.1663 69.1666L73.5413 39.7916L67.708 33.9583L44.1663 57.4999L32.2913 45.6249L26.458 51.4583L44.1663 69.1666ZM49.9997 91.6666C44.2358 91.6666 38.8191 90.5728 33.7497 88.3853C28.6802 86.1978 24.2705 83.2291 20.5205 79.4791C16.7705 75.7291 13.8018 71.3194 11.6143 66.2499C9.42676 61.1805 8.33301 55.7638 8.33301 49.9999C8.33301 44.236 9.42676 38.8194 11.6143 33.7499C13.8018 28.6805 16.7705 24.2708 20.5205 20.5208C24.2705 16.7708 28.6802 13.802 33.7497 11.6145C38.8191 9.427 44.2358 8.33325 49.9997 8.33325C55.7636 8.33325 61.1802 9.427 66.2497 11.6145C71.3191 13.802 75.7288 16.7708 79.4788 20.5208C83.2288 24.2708 86.1976 28.6805 88.3851 33.7499C90.5726 38.8194 91.6663 44.236 91.6663 49.9999C91.6663 55.7638 90.5726 61.1805 88.3851 66.2499C86.1976 71.3194 83.2288 75.7291 79.4788 79.4791C75.7288 83.2291 71.3191 86.1978 66.2497 88.3853C61.1802 90.5728 55.7636 91.6666 49.9997 91.6666ZM49.9997 83.3333C59.3052 83.3333 67.1872 80.1041 73.6455 73.6458C80.1038 67.1874 83.333 59.3055 83.333 49.9999C83.333 40.6944 80.1038 32.8124 73.6455 26.3541C67.1872 19.8958 59.3052 16.6666 49.9997 16.6666C40.6941 16.6666 32.8122 19.8958 26.3538 26.3541C19.8955 32.8124 16.6663 40.6944 16.6663 49.9999C16.6663 59.3055 19.8955 67.1874 26.3538 73.6458C32.8122 80.1041 40.6941 83.3333 49.9997 83.3333Z" fill="#00B552"/>
</svg></div>

      <h2>Thank You!</h2>

      <p>We’ve received your request.</p>

      <span>
        Our team will contact you shortly with the best
        solution for your needs.
      </span>

    </div>
  </div>
)}
    </>
    
  );
};

export default DealershipPopup;