import React, { Component } from 'react';
import './App.scss';
import Logo from './component-library/components/icon/index'
import ControlledAccordions from './component-library/components/accordian';


class App extends Component {
  render() {
    return (
      <div>
          
        <Logo />
        <ControlledAccordions />
     
      </div>
    )
  }
}
export default App;
