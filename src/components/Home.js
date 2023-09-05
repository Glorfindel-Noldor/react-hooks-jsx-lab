import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const ColoringOf = {color: 'firebrick'}
  return (
        <div id="home">
          <h1 style={ColoringOf}>{name} is a Web Developer from {city}</h1>
        </div>
  )
}

export default Home;
