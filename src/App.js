import React from "react";
import ChoiceCards from "./components/ChoiceCards.js";
import ChoiceButtons from "./components/ChoiceButtons.js";
import "./App.css";
import { choices, getRoundOutcome } from "./utils"; //choices is an array of obj. getROut is a function returning an array of 2 elements
// import { render } from "@testing-library/react";

export default class App extends React.Component {
  /*Intro to state :
    The initial value/argument will be assigned only on the initial render (if it’s a function,
      it will be executed only on the initial render). In subsequent renders (due to a
      change of state in the component or a parent component), the argument of the
      state in js classes, or useState() in js functions, will be ignored and the current value will be retrieved. 
      Also know that when you set state, you do not immediately change your local copy of state. Wait until next
      rerender to get updated value, or pass in a callback function to setState(..., callbackfunction())
      which will let you interact with the updated state*/
  constructor(props) {
    super(props);
    this.state = {
      state: null,
      userChoice: null,
      computerChoice: null,
      previousWinner: null,
      gameHistory: [],
      flawlessVictory: [],
      userName: null,
      gameOn: false
    };
    //use this if using hooks, and not JS classeses
    // const [state, setGameState] = useState(null); //use state returns [argument, itsOwnSetterMethod()] in an array
    // const [userChoice, setUserChoice] = useState(null);
    // const [computerChoice, setComputerChoice] = useState(null);
    // const [previousWinner, setPreviousWinner] = useState(null);
    // const [gameHistory, setGameHistory] = useState([]);
    // const [flawlessVictory, setFlawlessVictory] = useState([]);
    // const [userName, setUsername] = useState(null);
    // const [gameOn, setGameOn] = useState(false);
  }

  displayStartButton = () => {
    if (this.state.gameOn === true) return "displayNone";
    else return "";
  };

  promptColor = () => {
    if (this.state.previousWinner === "You") return "winner";
    else if (this.state.previousWinner === "Computer") return "loser";
    else if (this.state.previousWinner === "Tie") return "tie";
    else return "start";
  };

  onPlayerChoose = playerChoice => {
    let [result, compChoice] = getRoundOutcome(playerChoice); //returns an array with 2 elements. 1st element is 'victory|defeat|tie', 2nd element is 'rock|paper|scissor'
    if (result === "Victory!") {
      this.setState({ previousWinner: "You" });
    } else if (result === "Defeat!") {
      this.setState({ previousWinner: "Computer" });
    } else {
      this.setState({ previousWinner: "Tie" });
    }
    const newUserChoice = choices[playerChoice]; //object like Rock: {name: , url: }
    const newComputerChoice = choices[compChoice];
    this.setState({ userChoice: newUserChoice });
    this.setState({ computerChoice: newComputerChoice });
    this.setState({ state: result });
    // cannot push directly to an array state, still need to update
    this.setState(
      {
        gameHistory: this.state.gameHistory.concat({
          result: result,
          name: this.state.userName
        })
      },
      () => {
        let arrLength = this.state.gameHistory.length;
        arrLength === 1 &&
        this.state.gameHistory.every(item => item.result === "Victory!")
          ? this.setState({ state: "Flawless Victory" })
          : (arrLength = null); //assignment to make use of ternary operator
      }
    );
  };

  changeUsername = () => {
    let inputValue = document.getElementById("nameInput").value;
    this.setState({ userName: inputValue });
  };

  startGame = () => {
    this.setState({ gameOn: true });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-8 themed-grid-col">
              <ChoiceCards
                title="Computer"
                winner={this.state.previousWinner}
                imgURL={
                  this.state.computerChoice && this.state.computerChoice.imgURL
                }
              />
              <h1 id="test" className={`${this.promptColor()} border-0`}>
                {this.state.state}
              </h1>
              {this.state.gameOn === false && ( //using conditional to choose to render an obj or not
                <button
                  className={`btn btn-success rounded ${this.displayStartButton()}`}
                  onClick={() => this.startGame()}
                >
                  Start Game!
                </button>
              )}
              {this.state.gameOn === true && (
                <ChoiceButtons
                  onPlayerChoose={this.onPlayerChoose}
                  test={true}
                />
              )}
              <ChoiceCards
                title="You"
                winner={this.state.previousWinner}
                imgURL={this.state.userChoice && this.state.userChoice.imgURL}
              />
            </div>

            <div className="col-md-4 themed-grid-col p-3">
              <div className="d-flex flex-row align-items-center bg-success p-3">
                <label>Input name: {this.state.userName}</label>
                <span className="p-3 ">
                  <input id="nameInput" className="border-0" />
                </span>
                <button onClick={() => this.changeUsername()}>Submit</button>
              </div>
              <div className="bg-warning">
                <h3 className="m-0 py-2">History</h3>
                <ul className="list-unstyled bg-warning">
                  {this.state.gameHistory.map(item => {
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
}
