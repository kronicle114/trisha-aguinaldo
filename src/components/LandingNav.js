import React, { useState, useEffect, useRef } from 'react';
import SideNav from './SideNav';
import '../styles/landing-nav.css';
import '../styles/modal.css';

export const LandingNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const onClose = () => setModalOpen(false);

  const clickOutside = (ref, onClose) => {
    const statusChange = (e) => {
      if (!ref.current.contains(e.target)){
        setModalOpen(modalOpen)
        onClose();
      }
    }
    document.addEventListener('click', statusChange)
    return function cleanup() {
      document.removeEventListener('click', statusChange)
    }
  }

  const NavModal = ({ title, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => clickOutside(modalRef, onClose))

    return (
      <div className="nav-overlay">
        <div className="modal">
          <h2>{title}</h2>
          <div className="modal-content" ref={modalRef}>
          <SideNav />
          </div>
        </div>
      </div>
    );
  }             

  return(

  <div className="navbar">
    <ul className="nav-list">
      <li className="nav-item">
        <button 
          id="nav-button" 
          onClick={() => setModalOpen('isOpen')}
          role="presentation"
          aria-label="Navigation Button"
        >
            <i className="fas fa-bars" />
        </button>

        {modalOpen && (
          <NavModal
            show={modalOpen === 'isOpen'}
            toggleModal={setModalOpen}
            onClose={onClose}
          />
        )}
      </li>
    </ul>
  </div>
  )
}

export default LandingNav;