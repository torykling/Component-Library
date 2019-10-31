import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      step: 1
    };
  }
  increment = () => {
    // if (props.step) {
    //     let newStep = props.step
    //     let count = this.state.number + newStep
    //   this.setState({ step: newStep });
    //   this.setState({ number: count});
    // } else {
    let newCount = this.state.number + 1;
    this.setState({ number: newCount });
  };

  decrement = () => {
    // if (props.step) {
    //     let newStep = props.step
    //     let count= this.state.number - newStep
    //   this.setState({ step: newStep });
    //   this.setState({ number: count });
    // } else {
    let newCount = this.state.number - 1;
    this.setState({ number: newCount });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <div>{this.state.number}</div>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
export default Counter;
