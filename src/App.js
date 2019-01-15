import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <nav role="navigation" className="navbar">
          <ul className="main-nav">
            <li className="nav-items">
              <a href="#home">Home</a>
            </li>
            <li className="nav-items">
              <a href="#about">About</a>
            </li>
            <li className="nav-items">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-items">
              <a href="#blog">Blog</a>
            </li>
            <li className="nav-items">
              <a href="#contact">Contact</a>
            </li>
          </ul>
         </nav>
        </header>
      </div>
    );
  }
}

export default App;
