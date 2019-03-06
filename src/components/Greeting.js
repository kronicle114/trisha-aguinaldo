import React from 'react';
import '../styles/greeting.css';

export default function Greeting() {
  return(
    <div className="greeting">
      <div className="greeting-contents">
        <div className="animate color-delay">
          <span>h</span>
          <span>e</span>
          <span>l</span>
          <span>l</span>
          <span>o</span>
          <span>&nbsp;</span>
          <span>w</span>
          <span>o</span>
          <span>r</span>
          <span>l</span>
          <span>d</span>
          <span>.</span>
        </div> 
        <p className="blurb">
          I'm <span className="highlight">Patricia Aguinaldo</span>, a full stack developer with a background in healthcare and education.
        </p>

        <a href="#about" className="view-link">View My Work</a>
      </div>
    </div>
  )
}
