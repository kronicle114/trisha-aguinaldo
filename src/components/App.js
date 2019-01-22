import React, { Component } from 'react';
import '../styles/App.css';
import Nav from './Nav';
import About from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Blog from './Blog';
import Home from './Home';
import logo from '../assets/t-alpha.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <img src={logo} alt="logo" className="logo"/>
        <h1>Trisha Aguinaldo</h1>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        </div>
      </Router>

    );
  }
}

export default App;
