import DuckCard from "./DuckCard";
import React, { useState } from 'react';
import "./DuckContainer.css";

function DuckContainer({ duckPictures }) {
  const [errors, setErrors] = useState(0);

  const handleError = () => {
    setErrors(prevErrors => prevErrors + 1); // Incrémentation du compteur d'erreurs
  };

  return (
    <div id="duckContainer">
      {duckPictures.map((duck, indexDuck) => (
        <DuckCard key={indexDuck} duck={duck} notMatch={handleError} />
      ))}
      <div className="NbrError" >Nombre d'erreurs : {errors}</div>
    </div>
  );
}

export default DuckContainer;
