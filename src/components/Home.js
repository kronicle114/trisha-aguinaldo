import React from 'react';

export default function Home(props) {
  return(
    <div className="home-body">
      <div className="featured">
        <h2>Featured</h2>
        <ul className="featured-list">
          <li className="featured-items">
            <h3><a href="https://protected-depths-66567.herokuapp.com/" target="_blank" rel="noopener noreferrer">What's Cooking:</a></h3>
            <p>Deployed full stack app using React/Redux for the front-end and Node.js / MongoDB for the backend in TDD environment</p>
            <a href="https://github.com/thinkful-ei26/trisha-wc-client#not-sure-what-to-cook-for-your-next-meal" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
          <li className="articles">
            <h3><a href="https://www.linkedin.com/pulse/create-custom-domain-your-heroku-app-patricia-aguinaldo/">Create a Custom Domain for your Heroku App</a></h3>
            <p>January 22, 2019</p>
          </li>
        </ul>
      </div>
    </div>
  )
}