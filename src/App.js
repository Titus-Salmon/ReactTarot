import React, { Component } from "react";
// import logo from './logo.svg';
import logo from "./bluehyp_0001a4_LoRes2.jpg"; //t0d
import "./App.css";

import Component1 from "./Component1/Component1";

class App extends Component {
  state = {
    deckArray: [
      {
        cardName: "The Fool",
        imgSrcUp: "./img/cardimg/00.jpg",
        imgSrcDn: "./img/cardimg/00r.jpg",
        descUp:
          "Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.",
        descDn:
          "Negligence, absence, distribution, carelessness, apathy, nullity, vanity."
      },
      {
        cardName: "The Magician",
        imgSrcUp: "./img/cardimg/01.jpg",
        imgSrcDn: "./img/cardimg/01r.jpg",
        descUp:
          "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
        descDn: "Physician, Magus, mental disease, disgrace, disquiet."
      },
      {
        cardName: "The High Priestess",
        imgSrcUp: "./img/cardimg/02.jpg",
        imgSrcDn: "./img/cardimg/02r.jpg",
        descUp:
          "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.",
        descDn: "Passion, moral or physical ardour, conceit, surface knowledge."
      }
    ]
  };

  deckShuffleHandler = deckArray => {
    this.setState({});
    //begin Durstenfeld shuffle
    for (let i = this.state.deckArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.deckArray[i].cardName, this.state.deckArray[j].cardName] = [
        this.state.deckArray[j].cardName,
        this.state.deckArray[i].cardName
      ];
      [this.state.deckArray[i].imgSrcUp, this.state.deckArray[j].imgSrcUp] = [
        this.state.deckArray[j].imgSrcUp,
        this.state.deckArray[i].imgSrcUp
      ];
      [this.state.deckArray[i].descUp, this.state.deckArray[j].descUp] = [
        this.state.deckArray[j].descUp,
        this.state.deckArray[i].descUp
      ];
    }
    //end Durstenfeld shuffle

    for (let z = 0; z < this.state.deckArray.length; z++) {
      //outputs shuffled deck to console
      console.log("deckArray==>", this.state.deckArray[z].cardName);
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
        <Component1 crdName={this.state.deckArray[0].cardName} crdImgUp={this.state.deckArray[0].imgSrcUp}>
          {" "}
          Card Meaning: {this.state.deckArray[0].descUp}{" "}
        </Component1>{" "}
        <Component1 crdName={this.state.deckArray[1].cardName} crdImgUp={this.state.deckArray[1].imgSrcUp}>
          {" "}
          Card Meaning: {this.state.deckArray[1].descUp}{" "}
        </Component1>{" "}
        <Component1 crdName={this.state.deckArray[2].cardName} crdImgUp={this.state.deckArray[2].imgSrcUp}>
          {" "}
          Card Meaning: {this.state.deckArray[2].descUp}{" "}
        </Component1>{" "}
      </div>
    );
  }
}

export default App;
