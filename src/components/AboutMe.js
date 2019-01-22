import React from 'react';
import profile from '../assets/profile.jpg';
import '../styles/about-me.css';


export default function AboutMe(props) {
  return(
    <div className="about-container">
    <h2>About Me</h2>
      <img src={profile} alt="Trisha Aguinaldo Profile" className="profile-img"
      />
      <blockquote
        cite="https://www.globalcitizen.org/en/content/google-yuri-kochiyama-doodle-peace-activist/"
      >
        Life is not what you alone make it. Life is the input of everyone who touched your life and every experience that entered it. We are all part of one another.
        <footer>— Yuri Kochiyama</footer>
      </blockquote>
      <div className="about-blurb">
        <p>
          I'm a part of the 1.5 generation and grew up surrounded in poverty and trauma both in the Philippines and Boston, MA. But my parents have taught me that the American Dream is alive in health care and education. It's the two things that has helped us attain the comfortable level of security and prosperity.
        </p>
        <p>
          So, it was natural for me to gravitate towards mentoring and care giving positions. When I graduated college in 2015, I strived to become a creative problem solver and a reliable team player with four years of experience at an out-patient hospital.
        </p>
        <p>
          I'm switching careers as a Full Stack Web Developer because of my desire to merge community health and education in software development. I'm one step closer to this goal by facilitating a Girls Who Code club in <strong>Boston,MA</strong> on Wednesdays. I love tinkering with things. So when I code, I pour my creativity and problem solving skills in my projects.
        </p>
        <p>
          I write clean, accessible, and testable code. I believe in "teamwork makes the dream work" and using "the right tool for the job." I specialize in the Mongo/Express/React/Node.js stack, but I'm happy to learn a new language or skill. 
        </p>
        <p>
          Filipina. Asian-American. Queer. Woman of color. Immigrant. Soap Artisan. Foodie. Survivor. These are identities I associate myself with. I'm just adding on Software Developer/Engineer in the long list of what makes me who I am. 
        </p>
      </div>
      <div className="tech-stack-container">
        <h3>Skills</h3>
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