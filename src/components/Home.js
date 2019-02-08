import React from 'react';
import wc from '../assets/wc.png';
import article from '../assets/article.png';

export default function Home(props) {
  return(
    <div className="home-body">
      <div className="featured">
        <h2>Featured</h2>
        <ul className="featured-list">
          <li className="featured-items">
          <h3>
            <a href="https://github.com/thinkful-ei26/trisha-wc-client" target="_blank" rel="noopener noreferrer">What's Cooking?</a>
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
          <br/>
          <a href="https://github.com/thinkful-ei26/trisha-wc-client#not-sure-what-to-cook-for-your-next-meal" target="_blank" rel="noopener noreferrer">
            <img className="wc-img" src={wc} alt="What's Cooking App"/>
          </a>
          </li>
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
  )
}