import React from 'react'
import transparent from '../assets/transparent.png'
import trish from '../assets/trish.png'
import soaps from '../assets/soaps.jpg'
import resume from '../assets/Resume.pdf'
import '../styles/about.css'

export default function AboutMe(props) {
  let pythonStyle = {
    margin: '0',
    width: '20px',
    height: '20px',
  }

  return(
    <section className="about-container">
      <h2 id="about" className="uppercase"> About Me</h2>
      <div className="ombre-bar"/>
      <article className="about-contents">
        
        <article className="profile-container">
          <img src={transparent} alt="Trisha Aguinaldo Profile" className="profile-img"/>
          <div className="profile-overlay" >
            <img src={trish} alt="Trisha Aguinaldo Profile" className="profile-img"/>
          </div>
        </article>

        <article className="bio">
          <p>
          Hi! I'm Trisha. Art enthusiast, soap artisan, and animal lover.
          </p>
          <p>I'm a developer with a background in healthcare and education. I enjoy creating apps that have a positive impact on people and their communities. Two years ago, I fell in love with programming after launching a WordPress website for my artisan soap business.</p>
          <p>I'm taking OSSU's <a href="https://github.com/ossu/computer-science">computer science</a> program to nurture my growth as a programmer. I also regularly attend tech events in Boston and volunteer when I can.</p>
          <p>Like what you see? <strong>Let’s chat!</strong></p>
        </article>

        <article className="action-call">
          <a className="resume" href={resume}>Download My Resume</a>
          <a id="contact" className="contact-me" href="mailto:trisha.aguinaldo@gmail.com">Contact Me</a>
        </article>

        {/* ======= TECH STACK ======= */}
        <h3>Skills</h3>
        <article className="tech-stack-container">
          <dl className="skills">
            <dt className="front-end">Front-end</dt>
              <dd><i className="devicon-javascript-plain colored"></i> JavaScript ES6+</dd>
              <dd><img src="https://img.icons8.com/color/48/000000/python.png" alt="python icon" style={pythonStyle}/> Python 3</dd>
              <dd><i className="devicon-react-original colored"></i> React / Redux / Hooks</dd>
          </dl>
          <dl className="skills">
            <dt className="back-end">Back-end</dt>
              <dd><i className="devicon-nodejs-plain colored"></i> Node.js</dd>
              <dd><i className="devicon-mongodb-plain colored"></i> MongoDB</dd>
              <dd><i className="devicon-postgresql-plain colored"></i> PostreSQL</dd>
          </dl>
          <dl className="skills">
            <dt className="workflow">Workflow</dt>
              <dd><i className="devicon-github-plain" /> Github / Version Control</dd>
              <dd><i className="devicon-heroku-plain colored"/> Heroku</dd>
              <dd><i className="devicon-chrome-plain colored"></i> Chrome Dev Tools</dd>
              <dd><i className="devicon-travis-plain colored"/> Travis / Jenkins CI/CD</dd>
              <dd><i className="devicon-mocha-plain colored"></i> Mocha / Chai</dd>
          </dl>
        </article>

        <img className="pics" src="https://sweettootsco.files.wordpress.com/2018/08/trishiceland.jpg" alt="Trisha's happy place" />
        <img className="pics" src={soaps} alt="Soaps" />

      </article>
    </section>
  )
}
