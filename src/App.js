import React, {
  Component
} from 'react';
// import logo from './logo.svg';
import logo from './bluehyp_0001a4_LoRes2.jpg'; //t0d
import './App.css';

import Component1 from './Component1/Component1';

class App extends Component {

  state = {
    deckArray: [{
        cardName: 'The Magician',
        descUp: 'Magician description for upright card'
      },
      {
        cardName: 'The High Priestess',
        descUp: 'High Priestess description for upright card'
      },
      {
        cardName: 'The Empress',
        descUp: 'Empress description for upright card'
      },
    ]
  }

  deckShuffleHandler = (deckArray) => {

    this.setState ({})
    //begin Durstenfeld shuffle
    for (let i = this.state.deckArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.deckArray[i].cardName, this.state.deckArray[j].cardName] = [this.state.deckArray[j].cardName, this.state.deckArray[i].cardName];
      [this.state.deckArray[i].descUp, this.state.deckArray[j].descUp] = [this.state.deckArray[j].descUp, this.state.deckArray[i].descUp];
    }
    //end Durstenfeld shuffle

    for (let z = 0; z < this.state.deckArray.length; z++) { //outputs shuffled deck to console
      console.log('deckArray==>', this.state.deckArray[z].cardName)
    }
  }

  render() {
    return ( 
    <div className = "App">
        <header className = "App-header">
        <img src = {logo} className = "App-logo" alt = "logo" />
        <h1 className = "App-title"> React Tarot App </h1>
        </header>
        <button onClick = {this.deckShuffleHandler}> shuffle </button>
        <Component1 crdName = {this.state.deckArray[0].cardName}> Card Meaning: {this.state.deckArray[0].descUp} </Component1>
        <Component1 crdName = {this.state.deckArray[1].cardName}> Card Meaning: {this.state.deckArray[1].descUp} </Component1>
        <Component1 crdName = {this.state.deckArray[2].cardName}> Card Meaning: {this.state.deckArray[2].descUp} </Component1>
    </div >
  );
}
}

export default App;