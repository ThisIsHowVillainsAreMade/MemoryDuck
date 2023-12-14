import { useState } from "react";
import "./DuckCard.css";
import duckPictures from "../duckPicsData";

function DuckCard({ frontImage, backImage }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  console.log(duckPictures[0].imgSrc);
  return (
    <>
      <div className="card" onClick={handleFlip}>
        <div
          //   Face avant contenant le logo.
          className={`cardFace ${isFlipped ? "backFace" : "frontFace"}`}
        >
          <img src={duckPictures[0].imgSrc} alt={frontImage.name} />
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
