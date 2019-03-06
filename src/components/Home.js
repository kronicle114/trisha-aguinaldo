import React from 'react';
// import wc from '../assets/wc.png';
// import article from '../assets/article.png';
// import roadrate from '../assets/roadrate.png';
import About from './About';
import Project from './Projects';
import Blog from './Blog';

export default function Home(props) {
  return(
    <section className="home">
      <div className="canvas">

      </div>

      <About />
      <Project />
      <Blog />
    </section>
  )
}