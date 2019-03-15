import React from 'react';
import transparent from '../assets/transparent.png';
import trish from '../assets/trish.png';
import soaps from '../assets/soaps.jpg';
import resume from '../assets/Resume.pdf';
import '../styles/about.css';

export default function AboutMe(props) {
  return(
    <section className="about-container">
      <h2 id="about" className="uppercase"> About Me</h2>
      <div className="ombre-bar"/>
      <div className="about-contents">
        
        <div className="profile-container">
          <img src={transparent} alt="Trisha Aguinaldo Profile" className="profile-img"/>
          <div className="profile-overlay" >
            <img src={trish} alt="Trisha Aguinaldo Profile" className="profile-img"/>
          </div>
        </div>


        <div className="bio">
          <p>
          Hi! I'm Trisha. Art enthusiast, soap artisan, and animal lover.
          </p>
          <p>I'm a full stack developer with a background in healthcare and education. A year ago, I fell in love with programming after launching a WordPress website for my artisan soap business. I enjoy creating apps that have a positive impact on people and their communities. I'm one step closer to this goal by collaborating with other developers at Code For Boston and facilitating a Girls Who Code club in Boston, MA.</p>
          <p>I recently graduated from the Engineering Immersion program at Thinkful. I'm searching for the right team to help nurture and develop my growth as a programmer. </p>
          <p>Like what you see? <strong>Let’s chat!</strong></p>
        </div>

        <div className="action-call">
          <a className="resume" href={resume}>Download My Resume</a>
          <a className="contact-me" href="mailto:trisha.aguinaldo@gmail.com">Contact Me</a>
        </div>

        {/* ======= TECH STACK ======= */}
        <h3>Skills</h3>
        <div className="tech-stack-container">
          <dl className="skills">
            <dt className="front-end">Front-end</dt>
              <dd><i className="devicon-javascript-plain colored"></i> JavaScript ES6+</dd>
              <dd><i className="devicon-python-plain colored"></i> Python</dd>
              <dd><i className="devicon-html5-plain colored"></i> HTML5</dd>
              <dd><i className="devicon-css3-plain colored"></i> CSS3</dd>
              <dd><i className="devicon-react-original colored"></i> React / Redux </dd>
          </dl>
          <dl className="skills">
            <dt className="back-end">Back-end</dt>
              <dd><i className="devicon-nodejs-plain colored"></i> Node.js</dd>
              <dd><i className="devicon-express-original colored"></i> Express.js</dd>
              <dd><i className="devicon-mongodb-plain colored"></i> MongoDB</dd>
              <dd><i className="devicon-postgresql-plain colored"></i> PostreSQL</dd>
          </dl>
          <dl className="skills">
            <dt className="workflow">Workflow</dt>
              <dd><i className="devicon-github-plain" /> Github</dd> 
              <dd><i className="devicon-webpack-plain colored"></i> Webpack</dd>
              <dd><i className="devicon-heroku-plain colored"/> Heroku</dd>
              <dd><i className="devicon-chrome-plain colored"></i> Chrome Dev Tools</dd>
              <dd><i className="devicon-travis-plain colored"/> Travis CI</dd>
              <dd><i className="devicon-mocha-plain colored"></i> Mocha / Chai</dd>
          </dl>
        </div>

        <img className="pics" src="https://sweettootsco.files.wordpress.com/2018/08/trishiceland.jpg" alt="Trisha's happy place" />
        <img className="pics" src={soaps} alt="Soaps" />

      </div>
    </section>
  )
}