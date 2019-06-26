import React, { Component } from "react";
import logo from "../../src/bluehyp_0001a4_LoRes2.jpg"; //t0d
import "./App.css";

import Component1a from "../components/Component1/Component1a";
import Component1b from "../components/Component1/Component1b";
import Component1c from "../components/Component1/Component1c";
import DeckArray from "../components/DeckObject/deckObj";

let deckToShuffle = [...DeckArray];
let up_dn_array = [];
let selectedArray = [];
let minorDeckArray = [];
let majorDeckArray = [];

function createMinor() {
  //create Minor Arcana deck from imported entire deck
  for (let i = 22; i < 78; i++) {
    minorDeckArray.push(DeckArray[i]);
  }
}
createMinor();
console.log("minorDeckArray===>", minorDeckArray);

function createMajor() {
  //create Major Arcana deck from imported entire deck
  for (let i = 0; i < 22; i++) {
    majorDeckArray.push(DeckArray[i]);
  }
}
createMajor();
console.log("majorDeckArray===>", majorDeckArray);

function clearShuffledCards() {
  var shuffImg = document.getElementById("shuffDiv");
  while (shuffImg.children.length > 0) {
    shuffImg.removeChild(shuffImg.lastElementChild);
  }
}

function clearReadingResults() {
  var readingUl = document.getElementById("readingUl");
  while (readingUl.children.length > 0) {
    readingUl.removeChild(readingUl.lastElementChild);
  }
}

function clearSelectedCards() {
  var selecImg = document.getElementById("selectDiv");
  while (selecImg.children.length > 0) {
    selecImg.removeChild(selecImg.lastElementChild);
  }
}

class App extends Component {
  deckSelectedHandler = () => {
    //if there are cards present from a previous shuffle, remove them
    clearShuffledCards();

    //if there are reading results present from a previous reading, remove them
    clearReadingResults();

    //if there are selected cards present from a previous shuffle, remove them
    clearSelectedCards();

    //if there are up_dn_array results from previous shuffle, remove them
    up_dn_array = [];

    var deckSelectId = document.getElementById("deckSelect");
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
  };

  deckShuffleHandler = () => {
    selectedArray = []; //clear previous selectedArray

    //if there are selected cards present from a previous shuffle, remove them
    clearSelectedCards();

    //if there are reading results present from a previous reading, remove them
    clearReadingResults();

    //if there are up_dn_array results from previous shuffle, remove them
    up_dn_array = [];

    const shuffImg = document.getElementById("shuffDiv");

    //if there are cards present from a previous shuffle, remove them
    clearShuffledCards();

    //add (2a) instructions
    var shuffInstr = document.createElement("h3");
    var shuffInstr_text = document.createTextNode(
      "(2a) Click cards to select from deck"
    );
    shuffInstr.appendChild(shuffInstr_text);
    shuffImg.appendChild(shuffInstr);

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

  cardSelectHandler = e => {
    const nodelistShuff = document.querySelectorAll("#shuffDiv");
    var shuffArray = Array.from(nodelistShuff);
    console.log("shuffArray==>", shuffArray);
    var shuffArr = Array.from(shuffArray[0].children);
    console.log("shuffArr==>", shuffArr);
    var index = shuffArr.indexOf(e.target) - 1; //fix bug that wouldn't allow choosing last card in shuffled deck
    //(we have to subtract 1 from var index above, because it actually includes the h3 element as one of the children of shuffArray[0])
    //doing so puts us back at a zero-based index situation, allowing us to select all card elements of the array
    console.log(index);
    if (index > -1) {
      selectedArray.push(deckToShuffle[index]);
    }
    console.log("selectedArray===>", selectedArray);
    console.log("e.target==>", e.target);

    if (
      deckToShuffle[index] !== undefined &&
      e.target.style.visibility !== "hidden"
    ) {
      //turn over clicked card in #selectDiv
      e.target.style.visibility = "hidden";
      var image = document.createElement("img");

      Math.random() > 0.5
        ? (image.src = deckToShuffle[index].imgSrcUp)
        : (image.src = deckToShuffle[index].imgSrcDn); //flip coin for up or down card
      up_dn_array.push(image.src);
      console.log("up_dn_array==>", up_dn_array);
      document.getElementById("selectDiv").appendChild(image);
    }
  };

  getReadingHandler = () => {
    console.log("your reading", selectedArray);
    //if there are reading results present from a previous reading, remove them
    clearReadingResults();

    for (let i = 0; i < up_dn_array.length; i++) {
      var reg1 = /r.jpg/; //regexp to check whether image is upright or reversed
      if (up_dn_array[i].match(reg1)) {
        console.log(selectedArray[i].imgSrcDn);
        var readingUl = document.getElementById("readingUl");
        var readingLi = document.createElement("li");
        readingLi.style.listStyle = "none";
        var readingLi_name = document.createElement("h4");
        var readingLi_name_text = document.createTextNode(
          selectedArray[i].cardName + " (dn)"
        );
        readingLi_name.appendChild(readingLi_name_text);

        var readingLi_desc = document.createElement("p");
        var readingLi_desc_text = document.createTextNode(
          selectedArray[i].descDn
        );
        readingLi_desc.appendChild(readingLi_desc_text);

        readingLi.appendChild(readingLi_name);
        readingLi.appendChild(readingLi_desc);

        readingUl.appendChild(readingLi);
      } else {
        console.log(selectedArray[i].imgSrcUp);
        var readingUl = document.getElementById("readingUl");
        var readingLi = document.createElement("li");
        readingLi.style.listStyle = "none";
        var readingLi_name = document.createElement("h4");
        var readingLi_name_text = document.createTextNode(
          selectedArray[i].cardName + " (up)"
        );
        readingLi_name.appendChild(readingLi_name_text);

        var readingLi_desc = document.createElement("p");
        var readingLi_desc_text = document.createTextNode(
          selectedArray[i].descUp
        );
        readingLi_desc.appendChild(readingLi_desc_text);

        readingLi.appendChild(readingLi_name);
        readingLi.appendChild(readingLi_desc);

        readingUl.appendChild(readingLi);
      }
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> React Tarot App </h1>{" "}
        </header>{" "}
        <Component1a changed={this.deckSelectedHandler} />
        <Component1b
          clicked={this.deckShuffleHandler}
          selectCard={this.cardSelectHandler}
        />
        <Component1c clicked={this.getReadingHandler} />
      </div>
    );
  }
}

export default App;
