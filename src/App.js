import React, { Component } from "react";
// import logo from './logo.svg';
import logo from "./bluehyp_0001a4_LoRes2.jpg"; //t0d
import "./App.css";

import Component1 from "./Component1/Component1";
import DeckArray from "./DeckObject/deckObj";

class App extends Component {
  state = {
    DeckArray
  };

  deckShuffleHandler = () => {
    this.setState({});
    //begin Durstenfeld shuffle
    for (let i = this.state.DeckArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.DeckArray[i].cardName, this.state.DeckArray[j].cardName] = [
        this.state.DeckArray[j].cardName,
        this.state.DeckArray[i].cardName
      ];
      [this.state.DeckArray[i].imgSrcUp, this.state.DeckArray[j].imgSrcUp] = [
        this.state.DeckArray[j].imgSrcUp,
        this.state.DeckArray[i].imgSrcUp
      ];
      [this.state.DeckArray[i].descUp, this.state.DeckArray[j].descUp] = [
        this.state.DeckArray[j].descUp,
        this.state.DeckArray[i].descUp
      ];
    }
    //end Durstenfeld shuffle

    for (let z = 0; z < this.state.DeckArray.length; z++) {
      //outputs shuffled deck to console
      console.log("DeckArray==>", this.state.DeckArray[z].cardName);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> React Tarot App </h1>{" "}
        </header>{" "}
        <button onClick={this.deckShuffleHandler}> shuffle </button>{" "}
        <Component1
          crdName={this.state.DeckArray[0].cardName}
          crdImgUp={this.state.DeckArray[0].imgSrcUp}
        >
          {" "}
          Card Meaning: {this.state.DeckArray[0].descUp}{" "}
        </Component1>{" "}
        <Component1
          crdName={this.state.DeckArray[1].cardName}
          crdImgUp={this.state.DeckArray[1].imgSrcUp}
        >
          {" "}
          Card Meaning: {this.state.DeckArray[1].descUp}{" "}
        </Component1>{" "}
        <Component1
          crdName={this.state.DeckArray[2].cardName}
          crdImgUp={this.state.DeckArray[2].imgSrcUp}
        >
          {" "}
          Card Meaning: {this.state.DeckArray[2].descUp}{" "}
        </Component1>{" "}
      </div>
    );
  }
}

export default App;
