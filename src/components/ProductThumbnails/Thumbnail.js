import React, { Component } from "react";
import "./Thumbnail.css";
import Laptop from "./Laptop.js";
import Headphones from "./Headphones.js";
import Star from "./Star.js";
import Price from "./Price.js";
import Hot from "./Hot.js";
import WhiteDiv from "./WhiteDiv.js";
import BlueDiv from "./BlueDiv.js";
import Button from "../Buttons/Button.js";

export class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didMouseEnter: false
    };
  }
  MouseEnter = () => {
    this.setState({ didMouseEnter: true });
  };
  MouseLeave = () => {
    this.setState({ didMouseEnter: false });
  };
  render() {
    if (this.props.block && this.props.white) {
      return (
        <div className="firstClass">
          <div
            className="laptopContainer"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <Laptop />
            {this.state.didMouseEnter ? <WhiteDiv /> : null}
          </div>

          <hr />
          <h3 className="title">{this.props.title}</h3>
          <Star />
          <Price />
        </div>
      );
    } else if (this.props.block && this.props.blue) {
      return (
        <div className="secondClass">
          <div
            className="laptopContainer"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <Laptop />
            {this.state.didMouseEnter ? <BlueDiv /> : null}
          </div>
          <hr />
          <h3 className="title">{this.props.title}</h3>
          <Star />
          <Price />
        </div>
      );
    } else if (this.props.block && this.props.horizontal) {
      return (
        <div className="thirdClass">
          <div className="laptopContainer">
            <Laptop />
          </div>
          <div className="textBox">
            <h3 className="horzTitle">{this.props.title}</h3>
            <Star />
            <Price />
          </div>
        </div>
      );
    } else if (this.props.block && this.props.small) {
      return (
        <div className="fourthClass">
          <Headphones />
          <div className="textBox">
            <h3 className="horzTitle">{this.props.title}</h3>
            <Star />
            <Price />
          </div>
        </div>
      );
    } else if (this.props.inline) {
      return (
        <div className="inline">
          <div className="inlineImageContainer">
            <Hot />
            <div className="laptopContainer">
              <Laptop />
            </div>
          </div>
          <div className="inlineTextContainer">
            <h2>{this.props.title}</h2>
            <div className="reviewContainer">
              <Star />
              <h6>{this.props.review} reviews</h6>
              <a href="#">Submit a review</a>
            </div>
            <hr />
            <Price />
            <p>{this.props.content}</p>
            <div className="buttonContainer">
              <Button type="primaryShadow" cartText label="Add To Cart" />
              <Button type="primaryShadow" heart label="" />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Thumbnail;
