import React, {useState} from 'react';
import ChoiceCards from './components/ChoiceCards.js';
import './App.css';
export const choices = {
  rock: {name: "rock", imgURL: "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"}, 
  paper: {name: "paper", imgURL: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"},
  scissor: {name: "scissor", imgURL: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"}
};

//resturns ['result', 'rock | paper | scissors']. 2nd Arg is Computer choice
export const getRoundOutcome = userChoice => {
  const computerChoice = getRandomChoice().name;
  let result;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissor") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};

export const getRandomChoice = () => {
  let choiceNames = Object.keys(choices); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
  let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
  let choiceName = choiceNames[randomIndex];
  return choices[choiceName];
};



export default function App() {
  const [state, setGameState] = useState("hi");//use state returns [argument, itsOwnSetterMethod()] in an array
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  

  const onPlayerChoose = playerChoice => {
    let [result, compChoice] = getRoundOutcome(playerChoice);
    // console.log('Computer chose '+compChoice, ' result is you: '+result);
    setGameState(playerChoice);
    // console.log(state);
    const newUserChoice = choices[playerChoice];//object like Rock: {name: , url: }
    const newComputerChoice = choices[compChoice];
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    console.log(userChoice);
    console.log(computerChoice);
  }

  return (
      <div className='App'>
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-8 themed-grid-col">
              <ChoiceCards title="Computer" winner={true} imgURL={computerChoice && computerChoice.imgURL }/>
              <h1>{state}</h1>
              <ChoiceCards title="You" winner={false} imgURL={userChoice && userChoice.imgURL}/>
            </div>
          </div>
        </div>
      <button className="btn btn-success btn-lg" onClick={() => onPlayerChoose('rock')} >Rock</button>
      <button className="btn btn-success btn-lg" onClick={() => onPlayerChoose('paper')} >Paper</button>
      <button className="btn btn-success btn-lg" onClick={() => onPlayerChoose('scissor')} >Scissor</button>
    </div>
  )
}

