import React, { useState } from "react";
import "./App";
import "./index";
import Card from "./components/card/index.js";

function App() {
  const [flipped, setFlipped] = useState([]);

  const handleClick = id => setFlipped(id);

  return (
    <div>
      <h1>Memory Game</h1>
      <h2>Match the cards!</h2>
      <Card
        id={1}
        width={100}
        height={100}
        back={`/public/img/CardBack.png`}
        front={"/public/img/Bat.png"}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  );
}

export default App;
