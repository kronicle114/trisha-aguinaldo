import React from 'react';
import wc from '../assets/wc.png';
import octo from '../assets/octo.png';
import roadrate from '../assets/roadrate.png';
import github from '../assets/github-icon.svg';
import heroku from '../assets/heroku-icon.svg';
import pygame from '../assets/pygame.png';
import '../styles/projects.css';

export default function Projects () {
  return(
    <section className="projects-container">
      <h2 id="projects">Projects</h2>
      <ul className="project-list">

        {/* ================== PROJECT 1 ================== */}
        <li className="projects">
          <h3>
            <a href="https://github.com/thinkful-ei26/roadrate-client" target="_blank" rel="noopener noreferrer">RoadRate</a>
          </h3>

          {/* PROJECT IMAGE */}
          <div className="container">
            <img className="roadrate" src={roadrate} alt="RoadRate"/>
            <div className="overlay">
              <div className="stack">
              <ul className="stack-list">
                <li><i className="devicon-javascript-plain colored"></i></li>
                <li><i className="devicon-react-original colored"/></li>
                <li><i className="devicon-mongodb-plain colored"></i> </li>
                <li><i className="devicon-nodejs-plain colored"></i></li>
              </ul>
              </div>
            </div>
          </div>
         
          {/* PROJECT DESCRIPTION */}
          <p>
            <strong>Description:</strong> Collaborated with 3 other developers to deploy a full-stack app. With <strong>RoadRate</strong>, you can review other drivers anonymously. We used React Hooks for the front-end and Node.JS / MongoDB Atlas for the backend. User is able to login and logout securely. Passwords are hashed. 
          </p>
         
          <a href="https://github.com/thinkful-ei26/roadrate-client" target="_blank" rel="noopener noreferrer" aria-label="Github icon link">
            <img className="project-icon" src={github} alt="github icon"/>
          </a>
         
          <a href="https://road-rate-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" aria-label="deployed heroku icon link">
            <img className="project-icon" src={heroku} alt="heroku icon"/>
          </a>
        </li>

        {/* ================== PROJECT 2 ================== */}
        <li className="projects">
          <h3>
            <a href="https://github.com/thinkful-ei26/octo-delivery-service" target="_blank" rel="noopener noreferrer">OctoGun: Delivery Service</a>
          </h3>

          {/* PROJECT IMAGE */}
          <div className="container">
            <img className="octo-img" src={octo} alt="OctoGun: Delivery Service"/>
            <div className="overlay">
              <div className="stack">
              <ul className="stack-list">
                <li><i className="devicon-python-plain colored"></i></li>
                <li>
                  <img className="pygame" src={pygame} alt="pygame icon" />
                </li>
              </ul>
              </div>
            </div>
          </div>
         
          {/* PROJECT DESCRIPTION */}
          <p>
            <strong>Description:</strong> A simple game app using Python3 and Pygame. Learned the fundamentals of Python3 within a week and built this game for a class project. There are some known bugs listed on the repo but I am working to resolve them. 
          </p>
          <a href="https://github.com/thinkful-ei26/octo-delivery-service" target="_blank" rel="noopener noreferrer" aria-label="Github icon link">
            <img className="project-icon" src={github} alt="github icon"/>
          </a>
        </li>

        {/* ================== PROJECT 3 ================== */}
        <li className="projects">
          <h3>
            <a href="https://github.com/thinkful-ei26/trisha-wc-client" target="_blank" rel="noopener noreferrer">What's Cooking</a>
          </h3>
          
          {/* PROJECT IMAGE */}
          <div className="container">
            <img className="wc-img" src={wc} alt="What's Cooking App"/>
            <div className="overlay">
              <div className="stack">
              <ul className="stack-list">
                <li><i className="devicon-javascript-plain colored"></i></li>
                <li><i className="devicon-react-original colored"></i></li>
                <li>
                <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="redux logo" className="redux" />
                </li>
                <li><i className="devicon-mongodb-plain colored"></i> </li>
                <li><i className="devicon-nodejs-plain colored"></i></li>
              </ul>
              </div>
            </div>
          </div>
         
          {/* PROJECT DESCRIPTION */}
          <p>
            <strong>Description:</strong> Deployed full stack app using React/Redux for the front-end and Node.js / MongoDB for the backend in TDD environment. I developed the app from scratch over a 2-week period. The `Surprise` button and the `Search` feature queries the mLab database everytime an event happens. 
          </p>
         
          <a href="https://github.com/thinkful-ei26/trisha-wc-client#not-sure-what-to-cook-for-your-next-meal" target="_blank" rel="noopener noreferrer" aria-label="Github icon link">
            <img className="project-icon" src={github} alt="github icon"/>
          </a>
        
          <a href="https://protected-depths-66567.herokuapp.com/" target="_blank" rel="noopener noreferrer" aria-label="deployed heroku icon link">
            <img className="project-icon" src={heroku} alt="heroku icon"/>
          </a>
          {/*
          <p>
            <strong>Known Issues:</strong> I did not use a recipe API for the current version of the app. This is because I wanted to learn how to make my own database from scratch. Version 2 will feature multi-user capabilities and a third-party API like Spoonacular so the user can save recipes on their account and make changes as they see fit. 
          </p>
          */}
        </li>
      </ul>
  </section>
  )
}