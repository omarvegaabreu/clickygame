import React, { useState, useEffect } from "react";
import "./App";
import "./index";
import Board from "./components/board/index";
import initializeDeck from "./components/deck/deck";

function App() {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(initializeDeck());
  }, []);

  const handleClick = id => setFlipped([...flipped, id]);

  return (
    <div>
      <h1>Memory Game</h1>
      <h2>Match the cards!</h2>
      <Board cards={cards} flipped={flipped} handleClick={handleClick} />
    </div>
  );
}

export default App;
