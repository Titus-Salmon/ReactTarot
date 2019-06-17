import React, { Component } from "react";
// import logo from './logo.svg';
import logo from "../../src/bluehyp_0001a4_LoRes2.jpg"; //t0d
import "./App.css";

import Component1a from "../components/Component1/Component1a";
import Component1b from "../components/Component1/Component1b";
import Component1c from "../components/Component1/Component1c";
import Component2 from "../components/Component2/Component2";
import DeckArray from "../components/DeckObject/deckObj";

class App extends Component {

  deckShuffleHandler = () => {

    const shuffleButton = document.getElementById("shuffle");
    const shuffImg = document.getElementById("shuffDiv");

    shuffleButton.addEventListener("click", () => {
      //if there are cards present from a previous shuffle, remove them
      while (shuffImg.children.length > 0) {
        shuffImg.removeChild(shuffImg.lastElementChild);
      }
    });

    //begin Durstenfeld shuffle
    for (let i = DeckArray.length - 1; i > 0; i--) {
      //shuffle DeckArray
      const j = Math.floor(Math.random() * (i + 1));
      [DeckArray[i], DeckArray[j]] = [
        DeckArray[j],
        DeckArray[i]
      ];
    }
    //end Durstenfeld shuffle

    for (let z = 0; z < DeckArray.length; z++) {
      //outputs shuffled deck to console
      console.log("DeckArray==>", DeckArray[z].cardName);
    }

    DeckArray.forEach(function() {
      //show deck of cards (back of cards) when clicking 'shuffle' button
      var image = document.createElement("img");
      image.src = "../img/cardimg/rider-waite-original-back.jpg";
      image.width = "100";
      image.height = "171";
      document.getElementById("shuffDiv").appendChild(image);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> React Tarot App </h1>{" "}
        </header>{" "}
        <Component1a />
        <Component1b clicked={this.deckShuffleHandler} />
        <Component1c />
        <Component2 />
      </div>
    );
  }
}

export default App;
