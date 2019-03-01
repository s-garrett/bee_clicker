import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';

class App extends Component {
  render() {
    return (<Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo"/>
          </Link>
          <div className="App-header-text">
            <h1 className="App-title">Stephen Garrett: My Portfolio</h1>
          </div>
        </header>
        <Home/>
      </div>
    </Router> );
  }
}

export default App;
