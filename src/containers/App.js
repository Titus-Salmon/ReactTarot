import React, { Component } from "react";
// import logo from './logo.svg';
import logo from "../../src/bluehyp_0001a4_LoRes2.jpg"; //t0d
import "./App.css";

import Component1a from "../components/Component1/Component1a";
import Component1b from "../components/Component1/Component1b";
import Component1c from "../components/Component1/Component1c";
import Component2 from "../components/Component2/Component2";
import DeckArray from "../components/DeckObject/deckObj";

let deckToShuffle = [...DeckArray];

class App extends Component {
  deckSelectedHandler = () => {
    var minorDeckArray = [];

    function createMinor() {
      //create Minor Arcana deck from imported entire deck
      for (let i = 22; i < 78; i++) {
        minorDeckArray.push(DeckArray[i]);
      }
    }
    createMinor();
    console.log("minorDeckArray===>", minorDeckArray);

    var majorDeckArray = [];

    function createMajor() {
      //create Major Arcana deck from imported entire deck
      for (let i = 0; i < 22; i++) {
        majorDeckArray.push(DeckArray[i]);
      }
    }
    createMajor();
    console.log("majorDeckArray===>", majorDeckArray);

    const deckSelectId = document.getElementById("deckSelect");
    /** begin set deckToShuffleArray based on selected option in dropdown*/
    deckSelectId.addEventListener("change", () => {
      var deckSelectValue =
        deckSelectId.options[deckSelectId.selectedIndex].value;
      console.log("selectedDeck==>", deckSelectValue);
      if (deckSelectValue !== "fullDeck") {
        if (deckSelectValue === "majorDeck") {
          deckToShuffle = [...majorDeckArray];
        } else {
          deckToShuffle = [...minorDeckArray];
        }
      } else {
        deckToShuffle = [...DeckArray];
      }
    });
  };

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
    for (let i = deckToShuffle.length - 1; i > 0; i--) {
      //shuffle deckToShuffle
      const j = Math.floor(Math.random() * (i + 1));
      [deckToShuffle[i], deckToShuffle[j]] = [
        deckToShuffle[j],
        deckToShuffle[i]
      ];
    }
    //end Durstenfeld shuffle

    for (let z = 0; z < deckToShuffle.length; z++) {
      //outputs shuffled deck to console
      console.log("deckToShuffle==>", deckToShuffle[z].cardName);
    }

    deckToShuffle.forEach(function() {
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
        {/* <Component1a /> */}
        <Component1a changed={this.deckSelectedHandler} />
        <Component1b clicked={this.deckShuffleHandler} />
        <Component1c />
        <Component2 />
      </div>
    );
  }
}

export default App;
