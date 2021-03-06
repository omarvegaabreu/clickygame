import React, { useState, useEffect } from "react";
import "./App";
import "./index";
import Board from "./components/board/index";
import initializeDeck from "./components/deck/deck";

export default function App() {
  const [dimension, setDimension] = useState(400);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [solved, setSolved] = useState([]);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    preloadImages(cards);
  });

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);

    return () => window.removeEventListener("resize", resizeListener);
  });

  const handleClick = id => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);

      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        // setFlipped([]);
        // setDisabled(false);
        resetCards();
      } else {
        setTimeout(resetCards, 2000);
      }
    }
  };

  const preloadImages = () => {
    cards.map(card => {
      const src = `/img/${card.type}.png`;
      // console.log(src);
      return (new Image().src = src);
    });
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = id => flipped.includes(id);

  const isMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

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
      <h2>Match the cards</h2>

      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
    </div>
  );
}
