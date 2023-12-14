import DuckCard from "./DuckCard";
import "./DuckContainer.css";

function DuckContainer({ duckPictures }) {
  return (
    <div className="duckContainer">
      {duckPictures.map((duck, indexDuck) => (
        <DuckCard key={indexDuck} duck={duck} />
      ))}
    </div>
  );
}

export default DuckContainer;
