import React, { Component } from 'react';
import './App.scss';
import { ClassNames } from './component-library/helpers/classNames';




class App extends Component {
  state = {
    blk: 'app',
    elt: 'sub',
    mods: ['class1', 'class2']
  };
  render() {
    return (
      <div>

        <ClassNames {...this.state} />
      </div>
    )
  }
}
export default App;
