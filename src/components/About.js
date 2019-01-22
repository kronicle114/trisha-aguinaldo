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
        <p>
          My family moved from the Philippines to the U.S. to get away from poverty. We wanted a piece of that American Dream, so my parents pushed me toward a career in health care and education. After college, I’ve built a reputation as a creative problem solver and a reliable team player after working at a hospital for four years. But, at the end of the day being a hospital administrative assistant was a means to an end. I was not meeting my potential.
        </p>
        <p>
          A year ago, I launched a WordPress website for my small business to promote my products. In the process, I realized that I wanted software development as my career. It's a challenging, creative, collaborative field. I love programming so much that I taught myself how to code for six months and then enrolled at an online full-stack course. 
        </p>
        <p>
          I'm committed to switching careers as a Full Stack Web Developer because I want to merge my background in community health, education and software development. I'm one step closer to this goal by facilitating a Girls Who Code club in Boston,MA. I am excited to add my skills and unique experiences as a queer woman of color and contribute to open source apps.
        </p>       
      </div>
      <div className="tech-stack-container">
        <h3>Skills</h3>
        <p>
          I write clean, accessible, and testable code. I believe in "teamwork makes the dream work" and using "the right tool for the job." I specialize in the Mongo/Express/React/Node.js stack, but I'm happy to learn a new language or skill. 
        </p>
        <dl>
          <dt>Languages</dt>
            <dd>JavaScript</dd>
            <dd>Python</dd>
          <dt>Front-end</dt>
            <dd>HTML5</dd>
            <dd>CSS3</dd>
            <dd>JavaScript ES6+</dd>
            <dd>jQuery</dd>
            <dd>Bootstrap</dd>
            <dd>React / Redux</dd>
          <dt>Back-end</dt>
            <dd>Node.js </dd>
            <dd>Express.js / REST API </dd>
            <dd>AJAX</dd>
            <dd>MongoDB / Mongoose</dd>
            <dd>PostreSQL / KNEX.js</dd>
            <dd>Passport</dd>
          <dt>Workflow</dt>
            <dd>Git / GitHub</dd>
            <dd>Webpack</dd>
            <dd>Heroku CD</dd>
            <dd>Wireframing</dd>
            <dd>Slack</dd>
          <dt>Testing</dt>
            <dd>Chrome Dev Tools</dd>
            <dd>Travis CI</dd>
            <dd>Mocha / Chai / Chai-HTTP</dd>
            <dd>Enzyme</dd>
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