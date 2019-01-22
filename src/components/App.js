import React, { Component } from 'react';
import '../styles/App.css';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Blog from './Blog';
import Home from './Home';
import logo from '../assets/t-alpha.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <img src={logo} alt="logo" className="logo"/>
        <h1>Trisha Aguinaldo</h1>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <footer className="site-footer">
          <div className="wrapper">
            <ul className="social-media-list">
              <li className="footer-items">

              </li>
              <li className="footer-items">
              <a      href="https://twitter.com/kronicle1141" target="_blank" rel="noopener noreferrer">twitter</a>
              </li>
              <li className="footer-items">
          
              </li>
            </ul>
          </div>
        </footer>
        </div>
      </Router>

    );
  }
}

export default App;
