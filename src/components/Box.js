import React, {Component} from 'react'
class Box extends Component {
  render () { return (
    <div className={this.props.color}>
      <h1>{this.props.name}</h1>
      <h2>{this.props.win ? "Won1123" : "Loss"}</h2>
      <h1>{this.props.num}</h1>
    </div>
  )}
}

// function Box(props) {
//   return (
//     <div className={props.color}>
//       <h1>{props.name}</h1>
//       <h2>{props.win ? "Won" : "Loss"}</h2>
//       <h1>{props.num}</h1>
//     </div>
//   );
// }

export default Box;
