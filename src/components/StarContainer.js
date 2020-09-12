import React, { Component } from "react";
import Star from "./Star";

export class StarContainer extends Component {
  checkEvents = (star) => {
    if (this.props.rating < star) {
      return star <= this.props.hoveredId ? "fa-star" : "fa-star-o";
    } else {
      return star <= this.props.rating ? "fa-star" : "fa-star-o";
    }
  };
  render() {
    return this.props.stars.map((star) => (
      <Star
        handleMouseEnter={this.props.handleMouseEnter}
        handleMouseLeave={this.props.handleMouseLeave}
        handleClick={this.props.handleClick}
        key={star}
        keyValue={star}
        classValue={this.checkEvents(star)}
        colorCode={this.props.colorCode}
        fontSize={this.props.fontSize}
      />
    ));
  }
}

export default StarContainer;
