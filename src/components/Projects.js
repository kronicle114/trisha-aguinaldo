import React from 'react';
import wc from '../assets/wc.png';
import tagalog from '../assets/tagalog.png';
import invaders from '../assets/screen-shot.png';
import quiz from '../assets/quiz.png';
import octo from '../assets/octo.png';

export default function Projects(props) {
  return(
    <div className="projects-container">
      <h2>Projects</h2>
      <ul className="project-list">

        {/* ================== PROJECT 1 ================== */}
        <li className="projects">
          <h3>
            <a href="https://github.com/thinkful-ei26/octo-delivery-service" target="_blank" rel="noopener noreferrer">OctoGun: Delivery Service Game</a>
          </h3>
          <p>
            <strong>Description:</strong> A simple game app using Python3 and Pygame. Learned the fundamentals Python3 within a week and built this game for a class project. There are some known bugs listed on the repo but I am working to resolve them. 
          </p>
          <br />
          <a href="https://github.com/thinkful-ei26/octo-delivery-service" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>

          <img className="octo-img" src={octo} alt="OctoGun: Delivery Service"/>
          <br/>
        </li>

        {/* ================== PROJECT 2 ================== */}
        <li className="projects">
          <h3>
            <a href="https://github.com/thinkful-ei26/trisha-wc-client" target="_blank" rel="noopener noreferrer">What's Cooking</a>
          </h3>
          <p>
            <strong>Description:</strong> Deployed full stack app using React/Redux for the front-end and Node.js / MongoDB for the backend in TDD environment. I developed the app from scratch over a 2-week period. The `Surprise` button and the `Search` feature queries the mLab database everytime an event happens. 
          </p>
          <br />
          <a href="https://github.com/thinkful-ei26/trisha-wc-client#not-sure-what-to-cook-for-your-next-meal" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
          <br/>
          <a href="https://protected-depths-66567.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            Deployed Version
          </a>

          <img className="wc-img" src={wc} alt="What's Cooking App"/>
          {/* <br/>
          <p>
            <strong>Known Issues:</strong> I did not use a recipe API for the current version of the app. This is because I wanted to learn how to make my own database from scratch. Version 2 will feature multi-user capabilities and a third-party API like Spoonacular so the user can save recipes on their account and make changes as they see fit. 
          </p>
          <br /> */}
        </li>

        {/* ================== PROJECT 3 ================== */}
         <li className="projects">
          <h3>
            <a href="https://github.com/thinkful-ei26/Tagalog-Trisha-Joaquin-client" target="_blank" rel="noopener noreferrer">Tagalog Teacher</a>
          </h3>
          <p>
            <strong>Description:</strong> Collaborated with another developer for a week to deploy a full stack app using spaced-repetition algorithm and linked list data-structure. Used React/Redux for the front-end and Node.js / MongoDB. User is able to login and logout securely. Passwords are hashed. 
          </p>
          <br />
          <a href="https://github.com/thinkful-ei26/Tagalog-Trisha-Joaquin-client" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
          <br/>
          <a href="https://frozen-garden-93870.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            Deployed Version
          </a>

          <img className="tagalog" src={tagalog} alt="Tagalog Teacher"/>
          {/* <br/>
          <p>
            <strong>Known Issues:</strong> Logging in will take a while. I'm still working on incorporating a loading spinner so that the user knows that the login request is pending. Right now, if you login, it will seem like the app froze, but it's just taking a few seconds for Heroku to post the login request.
          </p>
          <br /> */}
        </li>

        {/* ================== PROJECT 4 ================== */}
        <li className="projects">
          <h3>
            <a href="https://github.com/kronicle114/house-invaders/tree/master" target="_blank" rel="noopener noreferrer">House Invaders</a>
          </h3>
          <p>
            <strong>Description:</strong> Collaborated with a developer and a media designer over a weekend to build a drag and drop game for Global Game Jam 2019. Used JavaScript's Phaser3.JS with Matter.JS as the physics engine.
          </p>
          <br />
          <a href="https://github.com/kronicle114/house-invaders/tree/master" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
          <br/>

          <img className="invaders" src={invaders} alt="House Invaders"/>
          {/* <br/>
          <p>
            <strong>Known Issues:</strong> Hitboxes of all objects are slightly off. We realized that making a game over the weekend was not very realistic. Moving forward, we'll probably spend more time getting to know Phaser3 or whatever engine we're using to develop the game.  
          </p>
          <br /> */}
        </li>

        <li className="projects">
        <h3><a href="https://babyanimalquiz-1--trishaaguinaldo.repl.co/" target="_blank" rel="noopener noreferrer">Baby Animal Quiz App</a></h3>
        <p>Basic quiz app using the HTML, CSS, JavaScript/jQuery.</p>
        <a href="https://babyanimalquiz-1--trishaaguinaldo.repl.co/" target="_blank" rel="noopener noreferrer">Repl</a>
        <a href="https://github.com/kronicle114/babyAnimalQuizApp" target="_blank" rel="noopener noreferrer">GitHub</a>
        <br/>
        <img className="quiz" src={quiz} alt="Baby Animal Quiz App"/>
        </li>
      </ul>
  </div>
  )
}