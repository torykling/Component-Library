import React, { Component } from "react";
import heart from "./iconSVGCompLib/hearts.svg";
import cart from "./iconSVGCompLib/cart_2.svg";

export class Icon extends Component {
  renderIcon = () => {
    switch (this.props.icon) {
      case "heart":
        return <img src="./iconSVGCompLib/hearts.svg" />;
      case "cart":
        return <img src="./iconSVGCompLib/cart_2.svg" />;
    }
  };
  render() {
    return <div>{this.renderIcon()}</div>;
  }
}

export default Icon;
