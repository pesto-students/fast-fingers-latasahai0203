import React, { useState } from "react";

function Home(props) {
  console.log("props", props);
  return (
    <div>
      Player name: {props.name} Level :{props.level}
    </div>
  );
}

export default Home;
