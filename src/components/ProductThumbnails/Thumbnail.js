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
    this.classList = " hidden";
  }
  mouseOver = () => {
    this.classList -= " hidden";
  };
  mouseLeave = () => {
    this.classList += " hidden";
  };
  render() {
    if (this.props.block && this.props.white) {
      return (
        <div onMouseEnter={this.mouseOver} className="firstClass">
          <div className="doubleUp">
            <Laptop />
            <WhiteDiv className={this.classList} />
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
          <Laptop />
          <BlueDiv className={this.classList} />
          <hr />
          <h3 className="title">{this.props.title}</h3>
          <Star />
          <Price />
        </div>
      );
    } else if (this.props.block && this.props.horizontal) {
      return (
        <div className="thirdClass">
          <Laptop />
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
            <Laptop />
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
