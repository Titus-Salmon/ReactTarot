import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './bluehyp_0001a4_LoRes2.jpg'; //t0d
import './App.css';

import Component1 from './Component1/Component1';

class App extends Component {

  state = {
    deckArray: [
      {cardName: 'The Magician', descUp: 'Magician description for upright card'},
      {cardName: 'The High Priestess', descUp: 'High Priestess description for upright card'},
      {cardName: 'The Empress', descUp: 'Empress description for upright card'},
    ]
  }

  deckShuffleHandler = ()=>{
    console.log('button clicked');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Tarot App</h1>
        </header>
        <button onClick={this.deckShuffleHandler}>shuffle</button>
        {/* <Component1 prop1='some property' prop2='another property'>This is a child of Component1</Component1>
        <Component1 prop1='some property' prop2='another property'>This is a child of Component1</Component1> */}
        <Component1 crdName={this.state.deckArray[0].cardName}>Card Meaning: {this.state.deckArray[0].descUp}</Component1>
        <Component1 crdName={this.state.deckArray[1].cardName}>Card Meaning: {this.state.deckArray[1].descUp}</Component1>
        <Component1 crdName={this.state.deckArray[2].cardName}>Card Meaning: {this.state.deckArray[2].descUp}</Component1>
      </div>
    );
  }
}

export default App;
