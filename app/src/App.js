import React, { Component } from 'react';
import './App.scss';
import Logo from './component-library/components/icon/index'
import Accordion from './component-library/components/accordian';



class App extends Component {
  render() {
    return (
      <div>
          
        <Logo />
        <div>
        <Accordion>
          <div className="accor">
            <div className="head">Head 1</div>
            <div className="body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="accor">
            <div className="head">Head 2</div>
            <div className="body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </Accordion>
      </div>
       
     
      </div>
    )
  }
}
export default App;
