import DuckContainer from "../components/DuckContainer";
import duckPictures from "../duckPicsData";

function MemoryDuck() {
  return (
    <div id="cardGame">
      <DuckContainer duckPictures={duckPictures} />
    </div>
  );
}
export default MemoryDuck;
