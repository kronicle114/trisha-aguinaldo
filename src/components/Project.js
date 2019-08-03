import React from 'react'
import github from '../assets/github-icon.svg'
import heroku from '../assets/heroku-icon.svg'
import '../styles/projects.css'

export const Project = (props) => {

    let { title, description, githubURL, liveLink, cssClass, githubID, herokuID, projectIMG } = props.project

    let { imgURL,
        altDescription,
        imgClassName } = props.other
        
    const extra = (_imgURL, _altDescription, _imgClassName) => {
        
        return (
            <div className="tooltip"> 
                <img src={_imgURL} alt={_altDescription}className={_imgClassName} />
                <span className="tooltiptext">{_altDescription}</span>
          </div>
        )
    }

    return(
        <li className="projects">
            <h3>
                <a href={githubURL} target="_blank" rel="noopener noreferrer">{title}</a>
            </h3>

            {/* PROJECT IMAGE */}
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <div className="container">
                <img className={cssClass} src={projectIMG} alt={title}/>
                <div className="overlay">
                    <div className="stack">
                        <ul className="stack-list">
                            <li>
                                <div className="tooltip">
                                    <i className="devicon-javascript-plain colored tooltip"></i>
                                    <span className="tooltiptext">JavaScript</span>
                                </div>
                            </li>
                            <li>
                                <div className="tooltip"> 
                                    <i className="devicon-react-original colored tooltip"/>
                                    <span className="tooltiptext">React</span>
                                </div>
                            </li>
                            <li>
                                <div className="tooltip"> 
                                    <i className="devicon-mongodb-plain colored tooltip"></i> 
                                    <span className="tooltiptext">MongoDB</span>
                                </div>
                            </li>
                            <li>
                                <div className="tooltip"> 
                                    <i className="devicon-nodejs-plain colored tooltip"></i> 
                                    <span className="tooltiptext">Node.JS</span>
                                </div>
                            </li>
                            {props.other!== null ? (<li>
                                {extra(imgURL, altDescription, imgClassName)}
                            </li>): (null) }

                        </ul>
                    </div>
                </div>
            </div>
            </a>
        
            {/* PROJECT DESCRIPTION */}
            <p> {description} </p>
        
            <label htmlFor={githubID}>View Source Code: </label>
            <a 
                href={githubURL} 
                target="_blank" 
                rel="noopener noreferrer" 
                id={githubID}
            >
                <img className="project-icon" src={github} alt="github icon"/>
            </a>
        
            <label htmlFor={herokuID}>View Project: </label>
                <a 
                    href={liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    id={herokuID}
                >
                <img className="project-icon" src={heroku} alt="heroku icon"/>
            </a>
    </li>
    )
} 

export default Project