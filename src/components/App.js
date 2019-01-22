import React, { Component } from 'react';
import '../styles/App.css';
import Nav from './Nav';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Blog from './Blog';
import logo from '../assets/t-alpha.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" className="logo"/>
        <h1>Trisha Aguinaldo</h1>
        <Nav />
        <AboutMe />
        <Projects />
        <Blog />
        <Contact />
      </div>
    );
  }
}

export default App;
