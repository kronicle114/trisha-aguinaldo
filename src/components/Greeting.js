import React, { useState } from 'react';
import Nav from './Nav';
import '../styles/greeting.css';

export default function Greeting() {
  const [ viewHover, setViewHover ] = useState(null);

  return(
    <div className="greeting">
      {/* <Nav/> */}
      <div className="greeting-contents">
      
        {/* <div className="animate color-delay">
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
        </div>  */}

        <div className="hello">
          <b>he<span>llo</span> <span>wo</span>rl<span>d</span></b>
        </div>

        <div className="blurb">
          <b>i'<span>m</span> tr<span>i</span>sh<span>a</span></b>
        </div>

        <a 
          href="#about" 
          className="view-link"
          onMouseOver={() => setViewHover(true)}
          onMouseLeave={() => setViewHover(false)}
        >
          {viewHover ? ("View My Work ↓") : ("View My Work →")}
        </a>
      </div>
    </div>
  )
}
