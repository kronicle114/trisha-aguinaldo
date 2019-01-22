import React from 'react';

export default function Projects(props) {
  return(
    <div className="projects-container">
      <h2>Projects</h2>
      <ul className="project-list">
        <li className="projects">
          <h3><a href="https://protected-depths-66567.herokuapp.com/">What's Cooking:</a></h3>
          <p>Deployed full stack app using React/Redux for the front-end and Node.js / MongoDB for the backend in TDD environment</p>
          <a href="https://github.com/thinkful-ei26/trisha-wc-client#not-sure-what-to-cook-for-your-next-meal">GitHub Repo</a>
        </li>
        <li className="projects">
        <h3><a href="https://babyanimalquiz-1--trishaaguinaldo.repl.co/">QuizApp:</a></h3>
        <p>Basic quiz app using the HTML, CSS, JavaScript/jQuery.</p>
        <a href="#placeholder">Repl</a>
        </li>
        <li className="projects">
        <h3><a href="https://sweettootsco.wordpress.com/">SweetTootsCo:</a></h3>
        <p>Produced the content (images, text, videos, and etc) for my home business: Sweet Toots Co-- handmade natural artisan soaps and other luxury bath items.</p>
        <a href="#placeholder">GitHub Repo</a>
        </li>
        <li className="projects">
        <h3><a href="#gallery">Gallery</a></h3>
          <ul className="gallery-list">
             {/* <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2018/08/img_7037.jpg" alt="cupcake bathbomb"></img>
            </li>
            <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2018/08/img_0860-1.jpg" alt="charcoal geode"></img>
            </li>
            <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2018/06/img_0543.jpg" alt="orange swirl"></img>
            </li>
            <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2018/06/img_0540.jpg" alt="lavender dust"></img>
            </li>
            <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2017/08/img_8575.png" alt="coffee soap"></img>
            </li>
            <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2017/08/img_8578.png" alt="coconut soap"></img>
            </li>
            <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2017/08/img_8590.png" alt="matcha"></img>
            </li>
            <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2017/08/img_8572.png" alt="pumpkin spiced latte"></img>
            </li>
            <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2017/08/img_8586.png" alt="all soap"></img>
            </li>
            <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2017/08/file_004-1.png" alt="geode"></img>
            </li> */}
            <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2017/08/st-watermark.png" alt="logo"></img>
            </li>
            <li className="gallery">
              <img src="https://sweettootsco.files.wordpress.com/2017/08/cropped-file_000-3.png" alt="logo circle"></img>
            </li>
            {/* <li className="gallery">
              <img src="" alt=""></img>
            </li>
            <li className="gallery">
              <img src="" alt=""></img>
            </li>
            <li className="gallery">
              <img src="" alt=""></img>
            </li>
            <li className="gallery">
              <img src="" alt=""></img>
            </li>
            <li className="gallery">
              <img src="" alt=""></img>
            </li>
            <li className="gallery">
              <img src="" alt=""></img>
            </li> */}
          </ul>
        <a href="#placeholder">GitHub Repo</a>
        </li>
      </ul>
  </div>
  )
}