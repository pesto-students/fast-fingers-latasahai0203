import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function Home(props) {
  console.log("props", props);
  return (
    <div>
      <p>Player name : {props.location.state.name}</p>
      <p>Level : {props.location.state.level}</p>
    </div>
  );
}

export default Home;
