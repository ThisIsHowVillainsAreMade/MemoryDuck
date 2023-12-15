import "./App.css";
import "./components/DuckCard";
import DuckContainer from "./components/DuckContainer";
import duckPictures from "./duckPicsData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="cardGame">
        <Navbar />
        <DuckContainer duckPictures={duckPictures} />
        <Footer />
      </div>
    </>
  );
}

export default App;
