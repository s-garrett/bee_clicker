import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import './game-holder.css';
import img_octocat from "../../images/Octocat.png";

class AnApp extends Component {
  render() {
    return (<div className="AnApp">
      <div classname="title">
        <h3>{this.props.name}</h3>
      </div>
      <div className="body">
        <img className="AppPic" src={this.props.item} alt=''/>
        <p className="para">{this.props.paragraph}</p>
        {
          /^https?:\/\//.test(this.props.linker)
            ? <a href={this.props.linker} target="_blank">
                <img className="logo" src={img_octocat}></img>
              </a>
            : <Link to={this.props.linker}>
                <img className="logo" src={img_octocat}></img>
              </Link>
        }
      </div>
    </div>);
  }
}
AnApp.propTypes = {
  name: PropTypes.String,
  linker: PropTypes.String,
  paragraph: PropTypes.String
};

export default AnApp;
