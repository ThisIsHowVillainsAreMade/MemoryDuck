import { useState } from "react";
import "./App.css";
import "./components/DuckCard";
import DuckCard from "./components/DuckCard";
import duckPictures from "./duckPicsData";

function App() {
  const [duckIndex, setDuckIndex] = useState(1);

  return (
    <>
      <div>
        <DuckCard
          frontImage={duckPictures[0]}
          backImage={duckPictures[duckIndex]}
        />
      </div>
    </>
  );
}

export default App;
