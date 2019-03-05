import React from 'react';
import resume from '../assets/Resume.pdf';
import map from '../assets/map.png';
import twitter from '../assets/twitter.svg';
import github from '../assets/github-icon.svg';
import linkedin from '../assets/linkedin-icon.svg';
import email from '../assets/gmail.svg';
import '../styles/contact.css';

export default function Contact(props) {
  return(
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-contents">
        <p>
          <strong>Patricia "Trisha" Aguinaldo</strong> currently resides in Milton, MA. Feel free to contact her for any questions. Office hours are from 9-5 EST. She regularly attends tech meetups in Boston and volunteers at Girls Who Code & Code for Boston.
        </p>
        <p className="resume">
          Download her resume <a href={resume}>here</a>
        </p>

        <div className="contacts-wrapper">
          <ul className="contact-list">
            <li className="contact-items">
              <a href="mailto:trisha.aguinaldo@gmail.com">
                <img className="contact-icon" src={email}alt="email icon"/>
                trisha.aguinaldo.gmail.com
              </a>
            </li>
            <li className="contact-items">
              <a href="https://www.linkedin.com/in/paguinaldo/" target="_blank" rel="noopener noreferrer">
              <img className="contact-icon" src={linkedin}alt="linkedin icon"/>
                LinkedIn
              </a>
            </li>
            <li className="contact-items">
              <a href="https://github.com/kronicle114" target="_blank" rel="noopener noreferrer">
                <img className="contact-icon" src={github}alt="github icon"/>
                Github
              </a>
            </li>
            <li className="contact-items">
              <a href="https://twitter.com/kronicle1141" target="_blank" rel="noopener noreferrer">
                <img className="contact-icon" src={twitter}alt="twitter icon"/>
                Twitter
              </a>
            </li>
          </ul>
          <img className="map" src={map} alt="Milton, MA static map"/>
        </div>
      </div>
    </div>
  )
}