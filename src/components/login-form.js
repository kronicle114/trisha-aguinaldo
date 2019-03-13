import React, { useState } from 'react'; 
import Nav from './Nav';

export const LoginForm = () => {
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
        <Nav />
        <Button />
      </article>
    </section>
    )};

export default LoginForm;