import React, { useState } from "react";
import "./App";
import "./index";
import Board from "./components/board/index";

function App() {
  const [flipped, setFlipped] = useState([]);

  const handleClick = id => setFlipped([...flipped, id]);

  return (
    <div>
      <h1>Memory Game</h1>
      <h2>Match the cards!</h2>
    </div>
  );
}

export default App;
