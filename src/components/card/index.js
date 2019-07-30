import React from "react";
import PropTypes from "prop-types";
import "./styles";

export default function Card({
  handleClick,
  id,
  flipped,
  back,
  front,
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
          src={flipped ? front : back}
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
  back: PropTypes.string.isRequired,
  front: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};
