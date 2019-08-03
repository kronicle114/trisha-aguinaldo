import React from 'react'
import twitter from '../assets/twitter.svg'
import github from '../assets/github-icon.svg'
import linkedin from '../assets/linkedin-icon.svg'
import email from '../assets/gmail.svg'

export default function Footer () {
    return(
        <footer id="holler" className="site-footer" role="contentinfo">
        <div className="last-call">
          {/* <h2>I AM CURRENTLY <span>AVAILABLE</span> FOR HIRE</h2> */}
          <h2>GOT A QUESTION?</h2>
          <h3>GIVE ME A HOLLER</h3>
          <p>trisha.aguinaldo@gmail.com</p>
          <p>Boston, MA</p>
        </div>
        <div className="wrapper">
          <ul className="social-media-list" aria-label="Footer contact list">
            <li className="footer-items">
              <a href="http://www.trisha-aguinaldo.com/">
                © 2019 Made with Love
              </a>
            </li>
            <li className="footer-items" aria-label="contact list item">
              <a href="https://twitter.com/kronicle1141" target="_blank" rel="noopener noreferrer">
                <img className="footer-logo" src={twitter} alt="twitter logo"/>
              </a>
            </li>
            <li className="footer-items" aria-label="contact list item">
              <a href="https://www.linkedin.com/in/paguinaldo/" target="_blank" rel="noopener noreferrer">
                <img className="footer-logo linkedin" src={linkedin} alt="linkedin logo"></img>
              </a>
            </li>
            <li className="footer-items" aria-label="contact list item">
              <a href="https://github.com/kronicle114" target="_blank" rel="noopener noreferrer">
                <img className="footer-logo" src={github} alt="github logo"></img>
              </a>
            </li>
            <li className="footer-items" aria-label="contact list item">
              <a href="mailto:trisha.aguinaldo@gmail.com">
                <img className="footer-logo" src={email} alt="email logo"></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
}