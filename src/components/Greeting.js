import React, { useState } from 'react'
import '../styles/greeting.css'

export default function Greeting() {
  const [ viewHover, setViewHover ] = useState(null);
  const [ contactHover, setContactHover ] = useState(null);

  return(
    <section className="greeting">
      <article className="greeting-contents">

        <div id="hello">
          <b>h<span>e</span>llo w<span>o</span>rld</b>
        </div>

        <div className="blurb">
          <b>i'<span>m</span> tr<span>i</span>sh<span>a</span></b>
        </div>

        <div className="view">
          <a 
            href="#projects" 
            className="view-link"
            onMouseOver={() => setViewHover(true)}
            onMouseLeave={() => setViewHover(false)}
          >
            {viewHover ? ("View My Work ↓") : ("View My Work →")}
          </a>
        </div>

        <div className="contact">
          <a 
            href="#contact" 
            className="contact-link"
            onMouseOver={() => setContactHover(true)}
            onMouseLeave={() => setContactHover(false)}
          >
            {contactHover ? ("Contact Me ↓") : ("Contact Me →")}
          </a>
        </div>
      </article>
    
    </section>
  )
}
