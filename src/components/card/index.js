import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function Card({
  handleClick,
  id,
  type,
  flipped,
  height,
  width
}) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{ width, height }}
      onClick={() => handleClick(id)}
    >
      <div className="flipper">
        <img
          style={{
            height,
            width
          }}
          className={flipped ? "front" : "back"}
          src={flipped ? `/public/img/${type}.png` : `/public/img/cardback.png`}
          alt=""
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};
