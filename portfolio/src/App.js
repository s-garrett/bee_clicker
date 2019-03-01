import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';

const MainMenu = () => {
  return (<div>
    <Link to="/Unity-Bee-Clicker">
      <button>1</button>
    </Link>
    <Link to="/Unity-Bee-Clicker">
      <button>2</button>
    </Link>
    <Link to="/Unity-Bee-Clicker">
      <button>3</button>
    </Link>
  </div>);
};

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
            <MainMenu />
          </div>
        </header>

        <div>
          <BrowserRouter basename="https://s-garrett.github.io/portfolio" path="/" component={Home}/>
        </div>

      </div>
    </Router>);
  }
}

export default App;
