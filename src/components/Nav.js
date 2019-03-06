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
          <h1>Trisha Aguinaldo</h1>
        </Link>
      </div>
     <ul className="nav-list">
       <li className="nav-items">
         <Link to="/about">About</Link>
       </li>
       <li className="nav-items">
         <Link to="/projects">Projects</Link>
       </li>
       <li className="nav-items">
         <Link to="/blog">Blog</Link>
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
