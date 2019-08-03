import React from 'react'
import wc from '../assets/wc.png'
import octo from '../assets/octo.png'
import roadrate from '../assets/roadrate.jpg'
import github from '../assets/github-icon.svg'
import heroku from '../assets/heroku-icon.svg'
import pygame from '../assets/pygame.png'
import tagalog from '../assets/tagalog.png'
import '../styles/projects.css'
import Project from './Project'

export const Projects = () => {
  return(
    <section className="projects-container">

      <h2 id="projects" className="uppercase">Projects</h2>
      <div className="ombre-bar"/>
      <ul className="project-list">

        {/* ================== PROJECT 1 ================== */}
        <Project 
          project={
            {
              githubURL: 'https://github.com/thinkful-ei26/roadrate-client',
              title:'RoadRate', 
              cssClass: 'roadrate',
              projectIMG: roadrate,
              liveLink:'https://road-rate-client.herokuapp.com/', 
              githubID: 'roadrate-github',
              herokuID: 'roadrate-heroku',
              description:  'With RoadRate, you can review other drivers anonymously. Collaborated with 3 other developers to deploy a full-stack app. We used React Hooks for the front-end and Node.JS / MongoDB Atlas for the backend. User is able to login and logout securely. Passwords are hashed.' 
            }
          }
          other={
            {
              imgURL: '',
              altDescription: '',
              imgClassName: ''
            }
          }
        />

        {/* ================== PROJECT 2 ================== */}

        <Project 
          project={
            {
              githubURL: 'https://github.com/thinkful-ei26/trisha-wc-client',
              title:`What's Cooking`, 
              liveLink:'https://whats-cooking-client.herokuapp.com/',
              cssClass: 'wc-img',
              projectIMG: wc,
              githubID: 'wc-github',
              herokuID: 'wc-heroku',
              description: `Want your next meal to be a surprise? Use What's Cooking to get a randomly generated recipe on your list. Or just search for your next meal. This is a deployed full stack app using React/Redux for the front-end and Node.js / MongoDB for the backend in TDD environment.` 
            }
          }
          other={
            {
              imgURL: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
              altDescription: 'redux logo',
              imgClassName: 'Redux'
            }
          }
        />

        {/* ================== PROJECT 3 ================== */}

        <Project 
          project={
            {
              githubURL: 'https://github.com/thinkful-ei26/Tagalog-Trisha-Joaquin-client',
              title:`Tagalog Teacher`, 
              liveLink:'https://tagalog-teacher.herokuapp.com/',
              cssClass: 'tagalog-img',
              projectIMG: tagalog,
              githubID: 'tagalog-github',
              herokuID: 'tagalog-heroku',
              description: `Use Tagalog Teacher to learn Tagalog, the native language of the Philippines. Collaborated with another developer for a week to deploy a full stack app using spaced-repetition algorithm and linked list data-structure. Used React/Redux for the front-end and Node.js / MongoDB. User is able to login and logout securely.` 
            }
          }
          other={
            {
              imgURL: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
              altDescription: 'redux logo',
              imgClassName: 'Redux'
            }
          }
        />

        {/* ================== PROJECT 4 ================== */}

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
                  <li>
                    <div className="tooltip"> 
                      <img src="https://img.icons8.com/color/48/000000/python.png" alt="python icon" className="python_tooltip" />
                      <span className="tooltiptext">Python3</span>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip"> 
                    <img className="pygame" src={pygame} alt="pygame icon" />
                      <span className="tooltiptext">Pygame</span>
                    </div>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </a>
         
          {/* PROJECT DESCRIPTION */}
          <p>
            You are a gunslinging octopus whose job is to collect and deliver packages. This is a simple game app using Python3 and Pygame. Learned the fundamentals of Python3 within a week and built this game for a className project.
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

export default Projects