// import React from "react";
// import "./Form.css";

// const Form = props => {
//   let classList = "";
//   let title = "";
//   let place = "";
//   if (props.medium) {
//     classList += ` medium`;
//   }
//   if (props.large) {
//     classList += ` large`;
//   }
//   if (props.title) {
//     title += props.title;
//   }
//   if (props.place) {
//     place += props.place;
//   }
//   if (!props.place) {
//     place += props.title;
//   }
//   return (
//     <form onSubmit={props.onSubmit}>
//       <h5>{title}</h5>
//       <input
//         className={classList}
//         placeholder={place}
//         onChange={props.onChange}
//       ></input>
//     </form>
//   );
// };

// export default Form;

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
