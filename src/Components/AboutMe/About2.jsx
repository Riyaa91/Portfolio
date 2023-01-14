import React from "react";
import "./About2.css";
import Typical from "react-typical";
function About2() {
  return (
    <div>
      <div className="about-h">About Me</div>

      <section class="about section" id="about">
        <div class="about_container">
          <div className="profile-picture2">
            <div className="profile-picture-background2"></div>
          </div>
          <div className="sec-cont2">
            <h1 class="about_subtitle">
              <span className="primary-text">
                <Typical
                  loop={Infinity}
                  steps={["Hello!!", 1500, "I'm Riya Garg", 1500]}
                />
              </span>
            </h1>
            <span class="about_profession">Web Designer</span>
            <p class="about_text">
              I am a Full Stack Developer from JIIT Noida. I am passionate about
              creating websites, graphic design and many more..
            </p>
            <div className="colz2 ">
              <div className="colz-icon2">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default About2;
