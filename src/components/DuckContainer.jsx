import DuckCard from "./DuckCard";
import "./DuckContainer.css";

function DuckContainer({ duckPictures }) {
  return (
    <div id="duckContainer">
      {duckPictures.map((duck, indexDuck) => (
        <DuckCard key={indexDuck} duck={duck} />
      ))}
    </div>
  );
}

export default DuckContainer;
