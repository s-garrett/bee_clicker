import React, {Component} from 'react';
import './DropDown.css';

class DropDown extends Component {
    state = {open: false,
    };
    handleButtonClick = () => {
      this.setState(state => {
        return {
          open: !state.open,
        };
      });
    };

    render() {
      return(
        <div className = "container">
          <button className= "button" onClick={this.handleButtonClick}>
            ///
          </button>
          {this.state.open && (
            <div className= "dropdown">
              <ul>
                <li>OPTION 1</li>
                <li>OPTION 2</li>
                <li>OPTION 3</li>
              </ul>
            </div>
          )}
        </div>
      )
    }
  }
  export default DropDown;
