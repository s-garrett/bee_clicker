import React, {Component} from 'react';
import PropTypes from "prop-types";
import './game-holder.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class UnityGame extends Component {
  handleClick = (url) => {
    /^https?:\/\//.test(url)
      ? <a href={url} target="_blank"/>
      : <Link to={url}/>
  }

  render() {
    return (<div className="UnityGame">
      <div classname="title">
        <h3>{this.props.name}</h3>
      </div>
      <div className="body">
        {
          /^https?:\/\//.test(this.props.linker)
            ? <a href={this.props.linker} target="_blank">
                <button className="button" type="button">
                  Click Me
                  <br/>
                  <br/> {this.props.linker}
                </button>
              </a>
            : <Link to={this.props.linker}>
                <button className="button" type="button">
                  Click Me
                  <br/>
                  <br/> {this.props.linker}
                </button>
              </Link>
        }
        <p id="para">{this.props.paragraph}</p>
      </div>
    </div>);
  }
}
UnityGame.propTypes = {
  name: PropTypes.String,
  linker: PropTypes.String,
  paragraph: PropTypes.String
};

export default UnityGame;
