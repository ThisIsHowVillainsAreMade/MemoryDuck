import React from "react";
import DuckCard from "./DuckCard";
import Chrono from "./Chrono"
import "./DuckContainer.css";

function shuffleArray(array) {
  // Algorithme de Fisher-Yates pour mélanger le tableau
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function DuckContainer({ duckPictures }) {
  // Mélanger le tableau de manière aléatoire
  const shuffledDucks = shuffleArray([...duckPictures]);

  return (
    <div id="duckContainer">
      {shuffledDucks.map((duck, indexDuck) => (
        <DuckCard key={indexDuck} duck={duck} />
      ))}
          <Chrono />
    </div>
  );
}

export default DuckContainer;
