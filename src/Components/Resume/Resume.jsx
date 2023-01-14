import React from "react";
import "./Resume.css";
function Resume() {
  function open() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }
  return (
    <div className="cont">
      <div className="about-h">Resume</div>
      <div className="cont2">
        <button class="collapsible" onClick={open}>
          EDUCATION
        </button>
        <div class="content1">
          <p>
            {" "}
            <ul>
              <li>
                Bachelor of Technology-Jaypee Institute of Information
                Technology, Noida.
              </li>
              <li>CGPA:8.1</li>
              <li>
                COURSES:
                <ul>
                  <li>Big Data Analytics</li>
                  <li>Big Data Ingestion</li>
                  <li>Database and Web systems</li>
                  <li>Data Mining and Web Algorithms</li>
                  <li>Data Structures and Algorithms</li>
                </ul>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="cont2">
        <button class="collapsible" onClick={open}>
          PROJECTS
        </button>
        <div class="content1">
          <p>
            <ul>
              <li>Prephour (10/2022 - 12/2022): MERN STACK</li>
              <li>
                GUEST HOUSE MANAGEMENT SYSTEM (06/2022 - 07/2022):
                HTML,CSS,BOOTSTRAP,SQL,MS SQL SERVER
              </li>
              <li>
                Make It Work (10/2021-12/2021): HTML,CSS,BOOTSTRAP,SQL,MYSQL
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="cont2">
        <button class="collapsible" onClick={open}>
          SKILLS
        </button>
        <div class="content1">
          <ul>
            <li>
              React<span> </span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </li>
            <li>
              MONGO DB <span> </span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </li>
            <li>
              HTML<span> </span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </li>
            <li>
              CSS<span> </span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </li>
            <li>
              BOOTSTRAP<span> </span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </li>
            <li>
              SQL<span> </span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </li>
            <li>
              PHP<span> </span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </li>
            <li>
              DATA STRUCTURES<span> </span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </li>
            <li>
              PYTHON<span> </span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="cont2">
        <button class="collapsible" onClick={open}>
          WORK EXPERIENCE
        </button>
        <div class="content1">
          <ul>
            <li>Intern at ITC Limited. (06/2022-07/2022)</li>
            <li>
              Volunteer at Jaypee Incubation and Innovation Center[E-Cell]
              (08/2021-08/2022)
            </li>
          </ul>
        </div>
      </div>
      <div className="cont2">
        <button class="collapsible" onClick={open}>
          CONTACT INFORMATION
        </button>
        <div class="content1">
          <ul>
            <li>Email: riyagarg912003@gmail.com</li>
            <li>
              LinkedIn:
              <a href="linkedin.com/in/riya-garg-32a4b41b8">
                https://www.linkedin.com/in/riya-garg-32a4b41b8/
              </a>
            </li>
            <li>
              Github:
              <a href="https://github.com/Riyaa91">
                https://github.com/Riyaa91
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
