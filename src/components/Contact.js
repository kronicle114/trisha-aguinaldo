import React from 'react';
import resume from '../assets/Resume.pdf';
import map from '../assets/map.png';
import '../styles/contact.css';

export default function Contact(props) {
  return(
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-text">
      <p>
        <strong>Patricia "Trisha" Aguinaldo</strong> currently resides in Milton, MA. Feel free to contact her for any questions. Office hours are from 9-5 EST. She also volunteers at Girls Who Code Boston and regularly attends tech meetups in Boston.
      </p>
      <p className="resume">Download her resume <a href={resume}>here</a>.</p>
      </div>
      <div className="contacts-wrapper">
        <ul className="contact-list">
          <li className="contact-items">
            (857) 231-3620
          </li>
          <li className="contact-items">
            trisha.aguinaldo.gmail.com
          </li>
          <li className="contact-items">
            <a href="https://www.linkedin.com/in/paguinaldo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li className="contact-items">
            <a href="https://github.com/kronicle114" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li className="contact-items">
            <a href="https://twitter.com/kronicle1141" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
        </ul>
        <img className="map" src={map} alt="Milton, MA static map"/>
      </div>
    </div>
  )
}