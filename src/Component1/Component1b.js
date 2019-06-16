import React from "react";

const component1b = (props) => {
  return (
    <div>
      <div className="container1">
        <h3>(2) Shuffle Deck</h3>
        <div id="shuffDiv" />
        {props.children}
      </div>
    </div>
  );
};

export default component1b;
