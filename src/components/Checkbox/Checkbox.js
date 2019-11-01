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
      <div class="checkboxLabel">
        <input
          className="checkbox"
          type="checkbox"
          checked={this.state.isChecked}
        />
        {/* <div className="blue" /></div> */}
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Checkbox;
