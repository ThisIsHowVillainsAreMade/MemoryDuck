import "./App.css";
import "./components/DuckCard";
import DuckContainer from "./components/DuckContainer";
import duckPictures from "./duckPicsData";

function App() {
  return (
    <>
      <DuckContainer duckPictures={duckPictures} />
    </>
  );
}

export default App;
