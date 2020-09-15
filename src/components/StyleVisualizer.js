import React, { Component } from "react";

export class StyleVisualizer extends Component {
  render() {
    return (
      <div className="text-center">
        <div
          className="fa fa-star-o"
          style={{
            fontSize: this.props.fontSize,
            color: this.props.colorCode,
          }}
        ></div>
        <div
          className="fa fa-star"
          style={{
            fontSize: this.props.fontSize,
            color: this.props.colorCode,
          }}
        ></div>
      </div>
    );
  }
}

export default StyleVisualizer;
