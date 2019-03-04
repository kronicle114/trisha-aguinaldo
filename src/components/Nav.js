import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/nav.css';

export default function Nav(props) {
  return(
    <header className="App-header">
    <nav role="navigation" className="navbar">
     <ul className="main-nav">
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
   </header>
  )
}
