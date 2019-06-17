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
      //show deck of cards (back of cards) when clicking 'shuffle' button
      var image = document.createElement("img");
      image.src = "../img/cardimg/rider-waite-original-back.jpg";
      image.width = "100";
      image.height = "171";
      document.getElementById("shuffDiv").appendChild(image);
    });
  };

  selectCardHandler = () => {
    // var up_dn_array = [];
    // //push clicked card into selectedArray & make clicked card from shuffled deck invisible;
    // document.getElementById("shuffDiv").addEventListener("click", function(e) {
    //   const nodelistShuff = document.querySelectorAll("#shuffDiv");
    //   var shuffArray = Array.from(nodelistShuff);
    //   var shuffArr = Array.from(shuffArray[0].children);
    //   var index = shuffArr.indexOf(e.target);
    //   console.log(index);
    //   if (index > -1) {
    //     selectedArray.push(deckToShuffle[index]);
    //   }
    //   console.log("selectedArray===>", selectedArray);
    //   console.log("e.target==>", e.target);

    //   if (
    //     deckToShuffle[index] !== undefined &&
    //     e.target.style.visibility !== "hidden"
    //   ) {
    //     //turn over clicked card in #selectDiv
    //     e.target.style.visibility = "hidden";
    //     var image = document.createElement("img");

    //     Math.random() > 0.5
    //       ? (image.src = deckToShuffle[index].imgSrcUp)
    //       : (image.src = deckToShuffle[index].imgSrcDn); //flip coin for up or down card
    //     up_dn_array.push(image.src);
    //     console.log("up_dn_array==>", up_dn_array);
    //     document.getElementById("selectDiv").appendChild(image);
    //   }
    // });
  };

  // displayShuffledDeckHandler = () => {
  //   for (let n = 0; n < this.state.DeckArray.length; n++) {
  //     return this.state.DeckArray[n].imgSrcUp;
  //   }
  // };

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
