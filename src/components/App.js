import React from 'react'
import '../styles/App.css'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Blog from './Blog'
import Home from './Home'
import LandingNav from './LandingNav'
import Footer from './Footer'
import { Route } from 'react-router-dom'

export const App = (props) => { 

  return (
    <div className="App">
      <LandingNav />

      {/* Displays the URL and corresponding components */}
      <Route path="/" component={Home} />
      <Route exact path="/#about" component={About} />
      <Route exact path="/#projects" component={Projects} />
      <Route exact path="/#blog" component={Blog} />
      <Route exact path="/#contact" component={Contact} />
      <Route exact path="/#holler" component={Footer} />

      <Footer />
    </div>
  )
}

export default App