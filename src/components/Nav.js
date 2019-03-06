import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/t-alpha.svg';
import '../styles/nav.css';

export default function Nav(props) {
  return(
    <header className="App-header">
    <nav role="navigation" className="navbar">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} alt="logo" className="logo"/>
          {/* <h1>Trisha Aguinaldo</h1> */}
          <div className="canvas">
          <h1>
            <div className="animate color-delay">
              <span>T</span>
              <span>r</span>
              <span>i</span>
              <span>s</span>
              <span>h</span>
              <span>a</span>
              <span>&nbsp;</span>
              <span>A</span>
              <span>g</span>
              <span>u</span>
              <span>i</span>
              <span>n</span>
              <span>a</span>
              <span>l</span>
              <span>d</span>
              <span>o</span>
            </div>
          </h1>
        </div>
        </Link>
      </div>
     <ul className="nav-list">
       <li className="nav-items">
         <Link to="/about">About</Link>
         {/* <a href="#about">About</a> */}
       </li>
       <li className="nav-items">
         <Link to="/projects">Projects</Link>
         {/* <a href="#projects">Projects</a> */}
       </li>
       <li className="nav-items">
         <Link to="/blog">Blog</Link>
         {/* <a href="#blog">Blog</a> */}
       </li>
       <li className="nav-items">
         <Link to="/contact">Contact</Link>
       </li>
     </ul>
    </nav>
    <div className="ombre-bar"></div>
   </header>
  )
}
