import React from 'react';
import profile from '../assets/profile.jpg';
import soaps from '../assets/soaps.jpg';
import '../styles/about.css';

export default function AboutMe(props) {
  return(
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-contents">
        <img src={profile} alt="Trisha Aguinaldo Profile" className="profile-img"
        />
      
        <div className="blurb">
          Hi! I'm Trisha, a full stack developer with a background in healthcare and education. I recently graduated from the Engineering Immersion program at Thinkful. 
        </div>

        <div className="bio">
          <p>
            A year ago, I fell in love with programming after launching a WordPress website for my artisan soap business. I love coding because solving challenging problems gives me life. I also enjoy creating apps that have a positive impact on people and their communities. I'm one step closer to this goal by volunteering at Code For Boston and facilitating a Girls Who Code club in Boston, MA. I'm just beginning my journey and I'm searching for the right team to help nurture and develop my growth as a programmer. 
          </p>
        </div>

        <img className="pics" src="https://sweettootsco.files.wordpress.com/2018/08/trishiceland.jpg" alt="Trisha's happy place" />
        <img className="pics" src={soaps} alt="Soaps" />

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
          </dl>
        </div>

        {/* ======= ACADEMICS ======= */}
        <div className="education-container">
          <h3>Education</h3>
          <dl>
            <dt>Thinkful  | March 2019</dt>
            <dd>Full Stack Web Development Course</dd>
            <dt>Fitchburg State University | Winter 2018 </dt>
            <dd>Sheltered English Immersion Endorsed</dd>
            <dt>University of Massachusetts at Amherst | May 2015</dt>
            <dd>Bachelor of Science (BS), Public Health and Sociology</dd>
            <dd>Asian & Asian-American Studies Certificate</dd>
            <dd>Educator Advocate (Certified)</dd>
          </dl>
        </div>

      </div>
    </div>
  )
}