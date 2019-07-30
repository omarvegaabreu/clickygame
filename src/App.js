import React from "react";
import "./App.css";
import Card './components/card'


function App() {
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
        handlerClick={() => handlerClick(1)}
      />
    </div>
  );
}

export default App;
