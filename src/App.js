import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.js';
import DropDown from './components/DropDown/DropDown.js';

const AppHeader = () => (<div>
  <MediaQuery maxDeviceWidth={1024}>
    {
      (matches) => {
        if (matches) {
          return (
            <div className="toolbar">
              <div className="Mobile-app-header-text">
                <h3>Stephen Garrett: My Portfolio</h3>
                <p className="text">Click the Octocat to see the Github project !</p>
                  <nav>
                    <DropDown/>
                  </nav>
              </div>
            </div>)
        } else {
          return (
            <div className="App-header-text">
              <nav><DropDown/></nav>
              <h2>Stephen Garrett: My Portfolio</h2>
              <p className="text">Click the Octocat next to the description to see the project !</p>
            </div>)
        }
      }
    }
  </MediaQuery>
</div>)

class App extends Component {
  render() {
    return (<Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo"/>
          </Link>
          <AppHeader/>
        </header>
        <Home/>
      </div>
    </Router>);
  }
}

export default App;
