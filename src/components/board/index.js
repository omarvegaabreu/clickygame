import React from "react";
import Proptypes from "prop-types";
import Card from "../card";
import "./styles.css";

export default function Board({ dimension, cards, flipped, handleClick }) {
  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.id}
          type={card.type}
          id={card.id}
          width={dimension / 4.5}
          height={dimension / 4.5}
          flipped={flipped.includes(card.id)}
          handleClick={() => handleClick(card.id)}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  dimension: Proptypes.number.isRequired,
  cards: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
  flipped: Proptypes.arrayOf(Proptypes.number).isRequired,
  handleClick: Proptypes.func.isRequired
};
