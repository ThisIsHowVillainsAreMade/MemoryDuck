import { useState } from "react";
import "./DuckCard.css";
import CyberQuack from "../assets/CyberQuack.png";

function DuckCard({ duck }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <div className="card" onClick={handleFlip}>
        <div
          //   Face avant contenant le logo.
          className={`cardFace ${isFlipped ? "backFace" : "frontFace"}`}
        >
          <img src={CyberQuack} alt={duck.name} />
        </div>
        <div
          //   Face arrière contenant le canard.
          className={`cardFace ${isFlipped ? "frontFace" : "backFace"}`}
        >
          <img src={duck.imgSrc} alt={duck.name} />
        </div>
      </div>
    </>
  );
}

export default DuckCard;
