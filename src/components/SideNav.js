import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../assets/t-alpha.svg';
import '../styles/nav.css';

export const SideNav = () => {
  const [modalOpen, setModalOpen] = useState(true);
  
  const Button = () => {
    localStorage.setItem("modalOpen", modalOpen)

    return (
      <button className="close" onClick={() => setModalOpen(false)}>x</button>
    )
  }
 
  return(
    <section className="modal-container">
      <article className="nav-modal">
        <nav role="navigation" className="nav-container">
          <div className="logo-wrapper">
            <Link to="/"
              onClick={() => {
                setModalOpen(false);
                localStorage.remove('modalOpen')
              }}
            >
              <img src={logo} alt="logo" className="logo" aria-label="Trisha Aguinaldo"/>
              <h1>Trisha Aguinaldo</h1>
            </Link>
          </div>
        <ul className="nav-list">
          <li className="nav-items">
            <Link to="/about"
              onClick={() => {
                setModalOpen(false);
                localStorage.remove('modalOpen')
              }}
            >
              About
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/projects"
              onClick={() => {
                setModalOpen(false);
                localStorage.remove('modalOpen')
              }}
            >
              Projects
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/blog"
              onClick={() => {
                setModalOpen(false);
                localStorage.remove('modalOpen')
              }}
            >
              Blog
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/contact"
              onClick={() => {
                setModalOpen(false);
                localStorage.remove('modalOpen')
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
        </nav>
        <Button />
      </article>
    </section>
    )};

export default SideNav;