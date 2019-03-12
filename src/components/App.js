import React, { Component } from 'react';
import '../styles/App.css';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Blog from './Blog';
import Home from './Home';
import twitter from '../assets/twitter.svg';
import github from '../assets/github-icon.svg';
import linkedin from '../assets/linkedin-icon.svg';
import email from '../assets/gmail.svg';

import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
  
        <footer className="site-footer" role="contentinfo">
          <div className="wrapper">
            <ul className="social-media-list" aria-label="Footer contact list">
              <li className="footer-items">
                <a href="http://www.trisha-aguinaldo.com/">
                  © 2019 Made with Love
                </a>
              </li>
              <li className="footer-items" aria-label="contact list item">
                <a href="https://twitter.com/kronicle1141" target="_blank" rel="noopener noreferrer">
                  <img className="footer-logo" src={twitter} alt="twitter logo"></img>
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
      </div>
    );
  }
}

export default App;