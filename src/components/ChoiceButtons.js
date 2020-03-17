import React from "react";

class ChoiceButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="">
          <button
            className="btn btn-success btn-lg"
            onClick={() => this.props.onPlayerChoose("rock")}
          >
            Rock
          </button>
          <button
            className="btn btn-success btn-lg"
            onClick={() => this.props.onPlayerChoose("paper")}
          >
            Paper
          </button>
          <button
            className="btn btn-success btn-lg"
            onClick={() => this.props.onPlayerChoose("scissor")}
          >
            Scissor
          </button>
        </div>
      </div>
    );
  }
}

export default ChoiceButtons;
