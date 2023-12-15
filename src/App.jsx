import "./App.css";
import "./components/DuckCard";
import DuckContainer from "./components/DuckContainer";
import duckPictures from "./duckPicsData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Navbar />
      <div id="cardGame">
        <DuckContainer duckPictures={duckPictures} />
      </div>
        <Footer />
    </>
  );
}

export default App;
