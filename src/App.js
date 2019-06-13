import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './bluehyp_0001a4_LoRes2.jpg'; //t0d
import './App.css';

import Component1 from './Component1/Component1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Component1 prop1='some property' prop2='another property'>This is a child of Component1</Component1>
      </div>
    );
  }
}

export default App;
