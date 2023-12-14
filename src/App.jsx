import "./App.css";
import "./components/DuckCard";
import DuckContainer from "./components/DuckContainer";
import duckPictures from "./duckPicsData";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <DuckContainer duckPictures={duckPictures} />
      <Footer />
    </>
  );
}

export default App;
