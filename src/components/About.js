import React from 'react';
import profile from '../assets/profile.jpg';
import '../styles/about.css';

export default function AboutMe(props) {
  return(
    <div className="about-container">
    <h2>About Me</h2>
      <img src={profile} alt="Trisha Aguinaldo Profile" className="profile-img"
      />
     
     <blockquote>
        <span className="blurb">
          Hi! I'm Trisha, a full stack developer and a recent graduate of the Engineering Immersion program at Thinkful.
        </span>
      </blockquote>

      <div className="about-blurb">
        <p>
          A year ago, I fell in love with programming after launching a WordPress website for my artisan soap business. I like creating apps that have a positive impact on people and their communities. I'm one step closer to this goal by volunteering at Code For Boston and facilitating a Girls Who Code club in Boston, MA. I'm just beginning my journey and I'm searching for the right team to help nurture and develop my growth as a programmer. 
        </p>
      </div>

      {/* ======= TECH STACK ======= */}
      <div className="tech-stack-container">
        <h3>Skills</h3>
        <dl className="skills">
          <dt className="languages">Languages</dt>
            <dd><i className="devicon-javascript-plain colored"></i> JavaScript ES6+</dd>
            <dd><i className="devicon-python-plain colored"></i> Python</dd>
        </dl>
        <dl className="skills">
          <dt className="front-end">Front-end</dt>
            <dd><i className="devicon-html5-plain colored"></i> HTML5</dd>
            <dd><i className="devicon-css3-plain colored"></i> CSS3</dd>
            <dd><i className="devicon-jquery-plain-wordmark colored"></i> jQuery</dd>
            <dd><i className="devicon-bootstrap-plain-wordmark colored"></i> Bootstrap</dd>
            <dd><i className="devicon-react-original colored"></i> React / Redux</dd>
        </dl>
        <dl className="skills">
          <dt className="back-end">Back-end</dt>
            <dd><i className="devicon-nodejs-plain colored"></i> Node.js </dd>
            <dd><i className="devicon-express-original colored"></i> Express.js / REST API </dd>
            <dd><i className="devicon-mongodb-plain colored"></i> MongoDB / Mongoose</dd>
            <dd><i className="devicon-postgresql-plain colored"></i> PostreSQL / KNEX.js</dd>
        </dl>
        <dl className="skills">
          <dt className="workflow">Workflow</dt>
            <dd><i className="devicon-git-plain colored" /> Git</dd> 
            <dd><i className="devicon-github-plain" /> Github</dd> 
            <dd><i className="devicon-webpack-plain colored"></i> Webpack</dd>
            <dd><i className="devicon-heroku-plain colored"/> Heroku CD</dd>
            <dd><i className="devicon-slack-plain colored"></i> Slack</dd>
        </dl>
        <dl className="skills">
          <dt className="testing">Testing</dt>
            <dd><i className="devicon-chrome-plain colored"></i> Chrome Dev Tools</dd>
            <dd><i className="devicon-travis-plain colored"/> Travis CI</dd>
            <dd><i className="devicon-mocha-plain colored"></i> Mocha / Chai / Chai-HTTP</dd>
            <dd> Enzyme</dd>
        </dl>
      </div>

      {/* ======= ACADEMICS ======= */}
      <div className="education-container">
        <h3>Education</h3>
        <dl>
          <dt>Thinkful.com</dt>
          <dd>Full Stack Web Development Course | March 2019</dd>
          <dt>University of Massachusetts at Amherst</dt>
          <dd>Bachelor of Science (BS), Public Health and Sociology</dd>
        </dl>
      </div>
    </div>
  )
}