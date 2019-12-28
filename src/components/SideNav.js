import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import logo from '../assets/t-alpha.svg'
import '../styles/nav.css'

export const SideNav = () => {
  const [modalOpen, setModalOpen] = useState(true)

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
          <header className="logo-wrapper">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" aria-label="Trisha Aguinaldo"/>
              <h1>Trisha Aguinaldo</h1>
            </Link>
          </header>
        <ul className="nav-list uppercase">
          <li className="nav-items">
            <a href="#about" alt="About Section">
              About
            </a>
          </li>
          <li className="nav-items">
            <a href="#projects" alt="Projects Section">
              Projects
            </a>
          </li>
          <li className="nav-items">
            <a href="#blog" alt="Blog Section">
              Blog
            </a>
          </li>
          <li className="nav-items">
            <a href="#holler" alt="Contact Section">
              Contact
            </a>
          </li>
        </ul>
        </nav>
        <Button />
      </article>
    </section>
  )
}

export default SideNav