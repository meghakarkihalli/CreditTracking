import React, { Component } from 'react';
import './App.scss';
import { classNames } from './component-library/helpers/classNames';




class App extends Component {

  render() {
    return (
      <div>
        {classNames({ blk: 'app', elt: 'sub', mods: ['class1', 'class2'] })}

      </div>
    )
  }
}
export default App;
