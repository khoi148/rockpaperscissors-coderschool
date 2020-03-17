import React from "react";

export default function ChoiceButtons(props) {
  let displayChoiceButtons = props.gameOn === true ? "" : "displayNone";
  return (
    <div className="container d-flex justify-content-center">
      <div className={displayChoiceButtons}>
        <button
          className="btn btn-success btn-lg"
          onClick={() => props.onPlayerChoose("rock")}
        >
          Rock
        </button>
        <button
          className="btn btn-success btn-lg"
          onClick={() => props.onPlayerChoose("paper")}
        >
          Paper
        </button>
        <button
          className="btn btn-success btn-lg"
          onClick={() => props.onPlayerChoose("scissor")}
        >
          Scissor
        </button>
      </div>
    </div>
  );
}
