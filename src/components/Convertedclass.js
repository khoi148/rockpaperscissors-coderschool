import React from 'react';

class Convertedclass extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: {},
            result: false
        };
    }
}

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedItem: {},
        result: false
      };
    }
  
    onPlay = item => {
      console.log(item);
      this.setState({ selectedItem: items[item], result: false });
    };
  
    render() {
      console.log("asd", this.state.selectedItem);
  
      return (
        <div>
          <Box
            title="you"
            img={this.state.selectedItem.img}
            name={this.state.selectedItem.name}
            win={this.state.result}
          />
          <button onClick={() => this.onPlay("Rock")}>Rock</button>
          <button onClick={() => this.onPlay("Scissors")}>scissors</button>
          <button onClick={() => this.onPlay("Paper")}>paper</button>
          
          <Box
            title="computer"
            img="http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
            name="scissors"
            win={false}
          />
        </div>
      );
    }
  }
  
  export default App;