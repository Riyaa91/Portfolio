import React from 'react'
import './About.css'
import img from '../../assets/PP.jpeg'
function About(){
  return (
    <div className='about-container'>
      <div className="about-content">
        <div className="about-h">About Me</div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={img} alt="no connection" />
            </div>
            <div className="col">
              <ul>
                <br/>
                <h2>Introduction</h2>
                <li>
                  <p className='content'>
                    A tech enthusiast from JIIT, Noida.
                  </p>
                </li>
                <li>
                  <p className='content'>
                    Mern Developer.
                  </p>
                </li>
                <li>
                  <p className='content'>
                  Hands-on-experience with database and web systems.
                  </p>
                </li>
                <li>
                  <p className='content'>
                    Real-life projects.
                  </p>
                </li>
                <li>
                  <p className='content'>
                  Work experience at ITC Limited.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default About
