import React, { Component } from "react";
// import logo from './logo.svg';
import logo from "./bluehyp_0001a4_LoRes2.jpg"; //t0d
import "./App.css";

import Component1a from "./Component1/Component1a";
import Component1b from "./Component1/Component1b";
import Component1c from "./Component1/Component1c";
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

    const shuffleButton = document.getElementById("shuffle");
    const shuffImg = document.getElementById("shuffDiv");

    shuffleButton.addEventListener("click", () => {
      //if there are cards present from a previous shuffle, remove them
      while (shuffImg.children.length > 0) {
        shuffImg.removeChild(shuffImg.lastElementChild);
      }
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

    this.state.DeckArray.forEach(function() {
      var image = document.createElement("img");
      image.src = "../img/cardimg/rider-waite-original-back.jpg";
      image.width = "100";
      image.height = "171";
      document.getElementById("shuffDiv").appendChild(image);
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
        <Component1a />
        <Component1b>
          <button id="shuffle" onClick={this.deckShuffleHandler}>
            {" "}
            shuffle{" "}
          </button>{" "}
        </Component1b>
        <Component1c />
        <Component2 />
      </div>
    );
  }
}

export default App;
