import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logo from './component-library/components/icon/index';
import NavBar from './component-library/components/navBar';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          Welcome to Credit Tracking


        </div>
      </BrowserRouter>
    )
  }
}
export default App;
