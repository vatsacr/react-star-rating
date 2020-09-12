import React, { Component } from "react";

export class Star extends Component {
  render() {
    return (
      <div
        className={"fa " + this.props.classValue}
        style={{ color: this.props.colorCode, fontSize: this.props.fontSize }}
        onMouseEnter={this.props.handleMouseEnter}
        onMouseLeave={this.props.handleMouseLeave}
        onClick={this.props.handleClick}
        id={this.props.keyValue}
      ></div>
    );
  }
}

export default Star;
