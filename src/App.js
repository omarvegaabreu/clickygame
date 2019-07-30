import React, { useState, useEffect } from "react";
import "./App";
import "./index";
import Board from "./components/board/index";
import initializeDeck from "./components/deck/deck";

function App() {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [dimesion, setDimension] = useState(400);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);

    return () => window.removeEventListener("resize", resizeListener);
  });

  const handleClick = id => setFlipped([...flipped, id]);

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  return (
    <div>
      <h1>Memory Game</h1>
      <h2>Match the cards!</h2>
      <Board
        dimension={dimesion}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
