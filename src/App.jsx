import "./App.css";
import "./components/DuckCard";
import DuckContainer from "./components/DuckContainer";
import duckPictures from "./duckPicsData";

function App() {
  return (
    <>
    <div id="cardGame">
      <DuckContainer duckPictures={duckPictures} />
      </div>
    </>
  );
}

export default App;
