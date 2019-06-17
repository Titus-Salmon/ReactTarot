import React from "react";

const component1b = (props) => {
  return (
    <div>
      <div className="container1">
        <h3>(2) Shuffle Deck</h3>
        <div id="shuffDiv" />
        <div id="selectDiv"></div>
        {props.children}
      </div>
      <button id="shuffle" onClick={props.clicked}>component1b shuffle button</button>
    </div>
  );
};

export default component1b;
