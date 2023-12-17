
import { useState } from "react";
import "./DuckCard.css";
import CyberQuack from "../assets/CyberQuack.png";

const ducks = []

function DuckCard({ duck, notMatch }) {
  const [isFlipped, setIsFlipped] = useState(false);
  // const [errors, setErrors] = useState(0);


  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    ducks.push(duck.name);

    if (ducks.length === 2) {
      const [name1, name2] = ducks;

      if (name1 !== name2) {
        console.log("Les cartes sont différentes");
        notMatch();
      } else {
        console.log("Les cartes sont les mêmes");

        // Supprimer les éléments correspondant à name1 et name2
        const elementsToRemove = document.querySelectorAll(`.backFace[data-name="${name1}"], .backFace[data-name="${name2}"]`);

        elementsToRemove.forEach(element => element.remove());
      }

      ducks.length = 0;
    }
  };
  

  return (
    <>
      <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
        <div className="cardFace frontFace">
          <img src={CyberQuack} alt={duck.name} />
        </div>
        <div className="cardFace backFace">
          <img src={duck.imgSrc} alt={duck.name} />
        </div>
      </div>
    </>
  );
}

export default DuckCard;