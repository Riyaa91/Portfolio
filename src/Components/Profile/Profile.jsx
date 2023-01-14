import React from "react";
import "./Profile.css";
import Typical from "react-typical";
function Profile() {
  return (
  <div>

    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.instagram.com/_.riya_12._/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/riya-garg-32a4b41b8/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/Riyaa91">
              <i className="fa fa-github"></i>
            </a>

            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Riya</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🔥",
                    1500,
                    "Full Stack Developer 💻",
                    1500,
                    "MERN Developer ☑️",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building websites with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="Resume.pdf" download='Resume.pdf'>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
