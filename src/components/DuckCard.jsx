import { useState } from "react";
import "./DuckCard.css";
import CyberQuack from "../assets/CyberQuack.png";
const ducks =[]
function DuckCard({duck}) {
  const [isFlipped, setIsFlipped] = useState(false);

  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    ducks.push(duck.id)
    console.log(ducks);
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


