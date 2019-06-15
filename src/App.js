import React, { Component } from "react";
// import logo from './logo.svg';
import logo from "./bluehyp_0001a4_LoRes2.jpg"; //t0d
import "./App.css";

import Component1 from "./Component1/Component1";
import Component2 from "./Component2/Component2";
import DeckArray from "./DeckObject/deckObj";

class App extends Component {
  state = {
    DeckArray
  };

  deckShuffleHandler = () => {
    this.setState({
      // DeckArray
    });
    //begin Durstenfeld shuffle
    for (let i = this.state.DeckArray.length - 1; i > 0; i--) {
      //shuffle DeckArray
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.DeckArray[i], this.state.DeckArray[j]] = [
        this.state.DeckArray[j],
        this.state.DeckArray[i]
      ];
    }
    //end Durstenfeld shuffle

    for (let z = 0; z < this.state.DeckArray.length; z++) {
      //outputs shuffled deck to console
      console.log("DeckArray==>", this.state.DeckArray[z].cardName);
    }

    this.state.DeckArray.forEach(function () {
      var image = document.createElement('img');
      image.src = '../img/cardimg/rider-waite-original-back.jpg';
      image.width = "100";
      image.height = "171";
      document.getElementById('shuffDiv').appendChild(image);
  });
  };

  displayShuffledDeckHandler = () => {
    for (let n = 0; n < this.state.DeckArray.length; n++) {
      return this.state.DeckArray[n].imgSrcUp;
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
          Card Meaning: {this.state.DeckArray[0].descUp}{" "}
        </Component1>{" "}
        <Component1
          crdName={this.state.DeckArray[1].cardName}
          crdImgUp={this.state.DeckArray[1].imgSrcUp}
        >
          Card Meaning: {this.state.DeckArray[1].descUp}{" "}
        </Component1>{" "}
        <Component1
          crdName={this.state.DeckArray[2].cardName}
          crdImgUp={this.state.DeckArray[2].imgSrcUp}
        >
          Card Meaning: {this.state.DeckArray[2].descUp}{" "}
        </Component1>{" "}

        <Component2 crdImgUp={this.displayShuffledDeckHandler()}></Component2>
        <Component2></Component2>
      </div>
    );
  }
}

export default App;
