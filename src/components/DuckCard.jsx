import { useState } from "react";
import "./DuckCard.css";

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
          <img
            src={"./frontImage.imgSrc"}
            //   alt={frontImage.name}
          />
        </div>
        <div
          //   Face arrière contenant le canard.
          className={`cardFace ${isFlipped ? "frontFace" : "backFace"}`}
        >
          <img
            src={"./backImage.imgSrc"}
            //   alt={backImage.name}
          />
        </div>
      </div>
    </>
  );
}

export default DuckCard;
