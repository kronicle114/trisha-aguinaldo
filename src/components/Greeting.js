import React from 'react';
import '../styles/greeting.css';

export default function Greeting() {
  return(
    <div className="greeting">
      {/* <p className="blurb">
        Hi! I'm Trisha, a full stack developer with a background in healthcare and education.
      </p> */}

      <div className="animate color-delay">
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
        <span>&nbsp;</span>
        <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>l</span>
        <span>d</span>
        <span>!</span>
        {/* <span>l</span>
        <span>d</span>
        <span>o</span> */}
      </div> 
    </div>
  )
}
