import { useState } from "react";
import "./DuckCard.css";
import duckPictures from "../duckPicsData";
import CyberQuack from "../assets/CyberQuack.png";

function DuckCard({ frontImage, backImage }) {
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
          <img src= {CyberQuack} alt={frontImage.name} />
        </div>
        <div
          //   Face arrière contenant le canard.
          className={`cardFace ${isFlipped ? "frontFace" : "backFace"}`}
        >
          <img src={duckPictures[1].imgSrc} alt={backImage.name} />
        </div>
      </div>
    </>
  );
}

export default DuckCard;
