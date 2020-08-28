import React, { Component } from 'react';
import './App.scss';
import Logo from './component-library/components/icon/index'
import Button from './component-library/components/button';
import Tooltip from './component-library/components/tooltip';
import BoostRocket from './graphic-boost-rocket.png'

const Reports = [
  'Free Credit Report',
  'Free Credit Score',
  'Free Credit Monitoring',
  'Experian Boost',
  'Experian CreditLock',
  '3 Bureau Credit Report and Scores'
];

class App extends Component {


  render() {
    return (
      <div>
        <Logo />
        <Tooltip
          navigationList={Reports}
          rightSideImage={BoostRocket}
          content='Instantly increase your credit scores for free.'
          leftAddonLink='Compare All Products'>
          Reports & Scores
        </Tooltip>
        Welcome to Credit Tracking

      </div>
    )
  }
}
export default App;
