import React from 'react';
import wc from '../assets/wc.png';
import octo from '../assets/octo.png';
import roadrate from '../assets/roadrate.jpg';
import github from '../assets/github-icon.svg';
import heroku from '../assets/heroku-icon.svg';
import pygame from '../assets/pygame.png';
import '../styles/projects.css';

export default function Projects () {
  return(
    <section className="projects-container">
      <h2 id="projects" className="uppercase">Projects</h2>
      <div className="ombre-bar"/>
      <ul className="project-list">

        {/* ================== PROJECT 1 ================== */}
        <li className="projects">
          <h3>
            <a href="https://github.com/thinkful-ei26/roadrate-client" target="_blank" rel="noopener noreferrer">RoadRate</a>
          </h3>

          {/* PROJECT IMAGE */}
          <a href="https://road-rate-client.herokuapp.com/" target="_blank" rel="noopener noreferrer">
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
          </a>
         
          {/* PROJECT DESCRIPTION */}
          <p>
            With <strong>RoadRate</strong>, you can review other drivers anonymously. Collaborated with 3 other developers to deploy a full-stack app. We used React Hooks for the front-end and Node.JS / MongoDB Atlas for the backend. User is able to login and logout securely. Passwords are hashed. 
          </p>
         
          <label htmlFor="roadrate-github">View Source Code: </label>
          <a href="https://github.com/thinkful-ei26/roadrate-client" target="_blank" rel="noopener noreferrer" id="roadrate-github">
            <img className="project-icon" src={github} alt="github icon"/>
          </a>
         
          <label htmlFor="roadrate-heroku">View Project: </label>
          <a href="https://road-rate-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" id="roadrate-heroku">
            <img className="project-icon" src={heroku} alt="heroku icon"/>
          </a>
        </li>

        {/* ================== PROJECT 2 ================== */}
        <li className="projects">
          <h3>
            <a href="https://github.com/thinkful-ei26/trisha-wc-client" target="_blank" rel="noopener noreferrer">What's Cooking</a>
          </h3>
          
          {/* PROJECT IMAGE */}
          <a href="https://whats-cooking-client.herokuapp.com/" target="_blank" rel="noopener noreferrer">
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
          </a>
         
          {/* PROJECT DESCRIPTION */}
          <p>
            Want your next meal to be a surprise? Use What's Cooking to get a randomly generated recipe on your list. Or just search for your next meal. This is a deployed full stack app using React/Redux for the front-end and Node.js / MongoDB for the backend in TDD environment.
          </p>
          <label htmlFor="wc-github">View Source Code: </label>
          <a href="https://github.com/thinkful-ei26/trisha-wc-client#not-sure-what-to-cook-for-your-next-meal" target="_blank" rel="noopener noreferrer" id="wc-github">
            <img className="project-icon" src={github} alt="github icon"/>
          </a>
          <label htmlFor="wc-heroku">View Project: </label>
          <a href="https://whats-cooking-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" id="wc-heroku">
            <img className="project-icon" src={heroku} alt="heroku icon"/>
          </a>
          {/*
          <p>
            <strong>Known Issues:</strong> I did not use a recipe API for the current version of the app. This is because I wanted to learn how to make my own database from scratch. Version 2 will feature multi-user capabilities and a third-party API like Spoonacular so the user can save recipes on their account and make changes as they see fit. 
          </p>
          */}
        </li>

        {/* ================== PROJECT 3 ================== */}
        <li className="projects">
          <h3>
            <a href="https://github.com/thinkful-ei26/octo-delivery-service" target="_blank" rel="noopener noreferrer">OctoGun: Delivery Service</a>
          </h3>

          {/* PROJECT IMAGE */}
          <a href="https://github.com/thinkful-ei26/octo-delivery-service" target="_blank" rel="noopener noreferrer">
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
          </a>
         
          {/* PROJECT DESCRIPTION */}
          <p>
            You are a gunslinging octopus whose job is to collect and deliver packages. This is a simple game app using Python3 and Pygame. Learned the fundamentals of Python3 within a week and built this game for a class project.
          </p>
          <label htmlFor="octo-github">View Source Code: </label>
          <a href="https://github.com/thinkful-ei26/octo-delivery-service" target="_blank" rel="noopener noreferrer" id="octo-github">
            <img className="project-icon" src={github} alt="github icon"/>
          </a>

          <label htmlFor="wc-heroku">View Project Demo: </label>
          <a href="https://www.youtube.com/watch?v=Jmx0tXrJHqU" target="_blank" rel="noopener noreferrer" id="octo-youtube">
            <img className="project-icon" src={heroku} alt="heroku icon"/>
          </a>
        </li>

      </ul>
  </section>
  )
}