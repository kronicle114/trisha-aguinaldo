import React from 'react';
import About from './About';
import Project from './Projects';
import Blog from './Blog';
import Greeting from './Greeting';
import LandingNav from './LandingNav';
import '../styles/home.css';

export default function Home(props) {
  return(
    <section className="home">
      <Greeting />
      <LandingNav />
      <About />
      <Project />
      <Blog />
    </section>
  )
}