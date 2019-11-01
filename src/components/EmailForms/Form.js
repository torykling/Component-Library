import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.classList = "";
    this.title = "";
    this.place = "";
    this.state = {
      inputValue: ""
    };
    if (this.props.medium) {
      this.classList += ` medium`;
    }
    if (this.props.large) {
      this.classList += ` large`;
    }
    if (this.props.title) {
      this.title += this.props.title;
    }
    if (this.props.place) {
      this.place += this.props.place;
    }
    if (!this.props.place) {
      this.place += this.props.title;
    }
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <h5>{this.title}</h5>
        <input
          className={this.classList}
          placeholder={this.place}
          onChange={this.props.onChange}
        ></input>
      </form>
    );
  }
}

export default Form;
