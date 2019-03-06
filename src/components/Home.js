import React from 'react';
import About from './About';
import Project from './Projects';
import Blog from './Blog';
import '../styles/home.css';

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