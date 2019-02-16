import React from 'react';
import profile from '../assets/profile.jpg';
import '../styles/about-me.css';


export default function AboutMe(props) {
  return(
    <div className="about-container">
    <h2>About Me</h2>
      <img src={profile} alt="Trisha Aguinaldo Profile" className="profile-img"
      />
     
     <blockquote>
       {/*  Filipina. Asian-American. Queer. Woman of color. Immigrant. Soap Artisan. Foodie. Survivor. These are identities I associate myself with.  */}
        I'm just adding 'Software Developer/Engineer' in the long list of what makes me who I am. 
        <footer>—Trisha Aguinaldo</footer>
      </blockquote>

      <div className="about-blurb">
        {/* <p>
          My family moved from the Philippines to the U.S. to get away from poverty. We wanted a piece of that American Dream, so my parents pushed me toward a career in health care and education. After college, I’ve built a reputation as a creative problem solver and a reliable team player after working at a hospital for four years. But, at the end of the day being a hospital administrative assistant was a means to an end. I was not meeting my potential.
        </p> */}
        {/* <br/>
        <p>
          A year ago, I launched a WordPress website for my small business to promote my products. In the process, I realized that I wanted software development as my career. It's a challenging, creative, collaborative field. I love programming so much that I taught myself how to code for six months and then enrolled at an online full-stack course. 
        </p>
        <br/> */}
        {/* <p>
          I'm committed to switching careers as a Full Stack Web Developer because I want to merge my background in community health, education and software development. I'm one step closer to this goal by facilitating a Girls Who Code club in Boston,MA. I am excited to add my skills and unique experiences as a queer woman of color and contribute to open source apps.
        </p>        */}
        <p>I've always been fascinated by the process of growth. How do people grow to be the way they are? What helps them become their best possible version? I decided to become a developer and educator to help people reach their potential by creating apps that they can use to make a positive change in their life and in their community. I'm just beginning my journey and I'm searching for the right team to help nuture and develop my growth as a programmer. </p>
      </div>
      <div className="tech-stack-container">
        <h3>Skills</h3>
        <dl className="skills">
          <dt className="languages">Languages</dt>
            <dd><i class="devicon-javascript-plain colored"></i> JavaScript ES6+</dd>
            <dd><i class="devicon-python-plain colored"></i> Python</dd>
        </dl>
        <dl className="skills">
          <dt className="front-end">Front-end</dt>
            <dd><i class="devicon-html5-plain colored"></i> HTML5</dd>
            <dd><i class="devicon-css3-plain colored"></i> CSS3</dd>
            <dd><i class="devicon-jquery-plain-wordmark colored"></i> jQuery</dd>
            <dd><i class="devicon-bootstrap-plain-wordmark colored"></i> Bootstrap</dd>
            <dd><i class="devicon-react-original colored"></i> React / Redux</dd>
        </dl>
        <dl className="skills">
          <dt className="back-end">Back-end</dt>
            <dd><i class="devicon-nodejs-plain colored"></i> Node.js </dd>
            <dd><i class="devicon-express-original colored"></i> Express.js / REST API </dd>
            <dd><i class="devicon-mongodb-plain colored"></i> MongoDB / Mongoose</dd>
            <dd><i class="devicon-postgresql-plain colored"></i> PostreSQL / KNEX.js</dd>
        </dl>
        <dl className="skills">
          <dt className="workflow">Workflow</dt>
            <dd><i class="devicon-git-plain colored" /> Git</dd> 
            <dd><i class="devicon-github-plain" /> Github</dd> 
            <dd><i class="devicon-webpack-plain colored"></i> Webpack</dd>
            <dd><i class="devicon-heroku-plain colored"/> Heroku CD</dd>
            <dd><i class="devicon-slack-plain colored"></i> Slack</dd>
        </dl>
        <dl className="skills">
          <dt className="testing">Testing</dt>
            <dd><i class="devicon-chrome-plain colored"></i> Chrome Dev Tools</dd>
            <dd><i class="devicon-travis-plain colored"/> Travis CI</dd>
            <dd><i class="devicon-mocha-plain colored"></i> Mocha / Chai / Chai-HTTP</dd>
            <dd> Enzyme</dd>
        </dl>
      </div>
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