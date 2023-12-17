 function ControlButtons(props) {
    const StartButton = (
      <button className="btn btn-one btn-start"
           onClick={props.handleStart}>
        Démarrer
      </button>
    );
    const ActiveButtons = (
      <div className="btn-grp">
            <button className="btn-two" 
                onClick={props.handleReset}>
            Recommencer
            </button>
            <button className="btn btn-one" 
                onClick={props.handlePauseResume}>
            {props.isPaused ? "Reprendre" : "Pause"}
            </button>
      </div>
    );
    
    return (
      <button className="Control-Buttons">
        <button>{props.active ? ActiveButtons : StartButton}</button>
      </button>
    );
  }

  export default ControlButtons