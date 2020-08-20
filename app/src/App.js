import React, { Component } from 'react';
import './App.scss';
import Logo from './component-library/components/icon/index'
import Button from './component-library/components/button';

class App extends Component {

  render() {
    return (
      <div>
        <Button btn_type="Secondary_Class"/>
        <Logo />
        Welcome to Credit Tracking

      </div>
    )
  }
}
export default App;
