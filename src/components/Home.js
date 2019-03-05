import React from 'react';
// import wc from '../assets/wc.png';
import article from '../assets/article.png';
import roadrate from '../assets/roadrate.png';

export default function Home(props) {
  return(
    <div className="home-body">
      <div className="featured">
        <h2>Featured</h2>

        <h3>Project</h3>
        <div className="featured-projects">
          <ul className="featured-list">
            <li className="projects">
              <h3>
                <a href="https://github.com/thinkful-ei26/roadrate-client" target="_blank" rel="noopener noreferrer">RoadRate</a>
              </h3>
              <img className="roadrate" src={roadrate} alt="RoadRate"/>
              <p>
                <strong>Description:</strong> Collaborated with 3 other developers to deploy a full-stack app. With <strong>RoadRate</strong>, you can review other drivers anonymously. We used React Hooks for the front-end and Node.JS / MongoDB Atlas for the backend. User is able to login and logout securely. Passwords are hashed. 
              </p>
            
              <a href="https://github.com/thinkful-ei26/roadrate-client" target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            
              <a href="https://road-rate-client.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                Deployed Version
              </a>
            </li>
            </ul>
        </div>
        <div className="featured-articles">
          <h3>Article</h3>
          <ul className="featured-list">
            <li className="featured-items">
              <h3><a href="https://www.linkedin.com/pulse/create-custom-domain-your-heroku-app-patricia-aguinaldo/" target="_blank" rel="noopener noreferrer">Create a Custom Domain for your Heroku App</a></h3>
              <p>January 22, 2019</p>
              <a href="https://www.linkedin.com/pulse/create-custom-domain-your-heroku-app-patricia-aguinaldo/" target="_blank" rel="noopener noreferrer">
                <img className="wc-img" src={article} alt="Deploy Custom URL"/>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}