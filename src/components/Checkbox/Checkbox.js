import React, { Component } from "react";
import "./Checkbox.css";

export class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.imageClass = "";
    this.state = {
      isChecked: false
    };
    if (this.props.blue) {
      this.imageClass += " blue";
    }
  }
  render() {
    return (
      <label class="checkboxLabel">
        <input
          className="checkbox"
          type="checkbox"
          checked={this.state.isChecked}
        />
        <span className="blue" />
        <p>{this.props.message}</p>
      </label>
    );
  }
}

export default Checkbox;
