
import logo1 from '../img/very_simple_rock_0.png';
import logo2 from '../img/Scissors-PNG-Pic.png';
import logo3 from '../img/blank-note-paper-free-clipa.png'
export const choices = {
    rock: {name: "rock", imgURL: logo1 }, 
    paper: {name: "paper", imgURL: logo3},
    scissor: {name: "scissor", imgURL: logo2}
  };
  
//resturns ['result', 'rock | paper | scissors']. 2nd Arg is Computer choice
export const getRoundOutcome = userChoice => {
    const computerChoice = getRandomChoice().name;
    let result;

    if (userChoice === "rock") {
    result = computerChoice === "scissor" ? "Victory!" : "Defeat!";
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