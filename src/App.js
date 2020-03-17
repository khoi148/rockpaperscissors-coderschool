import React, { useState } from "react";
import ChoiceCards from "./components/ChoiceCards.js";
import ChoiceButtons from "./components/ChoiceButtons.js";
import "./App.css";
import { choices, getRoundOutcome } from "./utils"; //choices is an array of obj. getROut is a function returning an array of 2 elements
export default function App() {
  /*Intro to useState() :
    The initial value/argument will be assigned only on the initial render (if it’s a function, 
      it will be executed only on the initial render). In subsequent renders (due to a 
      change of state in the component or a parent component), the argument of the 
      useState Hook will be ignored and the current value will be retrieved. */
  const [state, setGameState] = useState(null); //use state returns [argument, itsOwnSetterMethod()] in an array
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  const [flawlessVictory, setFlawlessVictory] = useState([]);
  const [userName, setUsername] = useState(null);
  const [gameOn, setGameOn] = useState(false);

  console.log(previousWinner);
  let promptColor =
    previousWinner === "You"
      ? "winner"
      : previousWinner === "Computer"
      ? "loser"
      : previousWinner === "Tie"
      ? "tie"
      : "start";

  const onPlayerChoose = playerChoice => {
    let [result, compChoice] = getRoundOutcome(playerChoice); //returns an array with 2 elements. 1st element is 'victory|defeat|tie', 2nd element is 'rock|paper|scissor'
    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }

    const newUserChoice = choices[playerChoice]; //object like Rock: {name: , url: }
    const newComputerChoice = choices[compChoice];
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    setGameState(result);
    gameHistory.push({ result: result, name: userName });
    setGameHistory(gameHistory);

    //length of the flawlessVictory array. Push returns length of array
    let arrLength =
      result === "Victory!"
        ? flawlessVictory.push("win")
        : flawlessVictory.push("nah");
    if (arrLength === 3) {
      if (flawlessVictory.every(item => item === "win")) {
        setGameState("Flawless Victory");
      }
    }
    setFlawlessVictory(flawlessVictory);
    // console.log(promptColor);
    // console.log('classNames: ', document.getElementById('test').className);
  };

  const changeUsername = () => {
    let inputValue = document.getElementById("nameInput").value;
    setUsername(inputValue);
  };

  const startGame = () => {
    setGameOn(true);
  };
  let displayStartButton = gameOn === true ? "displayNone" : "";

  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCards
              title="Computer"
              winner={previousWinner}
              imgURL={computerChoice && computerChoice.imgURL}
            />
            <h1 id="test" className={`${promptColor} border-0`}>
              {state}
            </h1>
            <button
              className={`btn btn-success rounded ${displayStartButton}`}
              onClick={() => startGame()}
            >
              Start Game!
            </button>
            <ChoiceButtons onPlayerChoose={onPlayerChoose} gameOn={gameOn} />

            <ChoiceCards
              title="You"
              winner={previousWinner}
              imgURL={userChoice && userChoice.imgURL}
            />
          </div>

          <div className="col-md-4 themed-grid-col p-3">
            <div className="d-flex flex-row align-items-center bg-success p-3">
              <label>Input name: {userName}</label>
              <span className="p-3 ">
                <input id="nameInput" className="border-0" />
              </span>
              <button onClick={() => changeUsername()}>Submit</button>
            </div>
            <div className="bg-warning">
              <h3 className="m-0 py-2">History</h3>
              <ul className="list-unstyled bg-warning">
                {gameHistory.map(item => {
                  console.log(item.name);
                  let nameText =
                    item.name === null ? "" : `Name: ${item.name},`;
                  return (
                    <li className="bg-light">
                      {nameText} result: {item.result}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
