import React, { Component } from "react";

export class StyleCreator extends Component {
  styleAttributes = { fontSize: "40px", colorCode: "#F9C900" };
  captureInput = (e) => {
    this.styleAttributes[e.target.name] = e.target.value;
  };
  render() {
    return (
      <div>
        <div
          className="fa fa-star-o"
          style={{
            fontSize: this.styleAttributes.fontSize,
            color: this.styleAttributes.colorCode,
          }}
        ></div>
        <div
          className="fa fa-star"
          style={{
            fontSize: this.styleAttributes.fontSize,
            color: this.styleAttributes.colorCode,
          }}
        ></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.styleAttributes);
          }}
        >
          <div className="form-group">
            <label htmlFor="colorCode">Color: </label>
            <input
              id="colorCode"
              placeholder="#F9C900"
              className="form-control"
              type="text"
              name="colorCode"
              onChange={(e) => {
                if (e.target.value.length > 6) this.captureInput(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fontSize">Font-Size : </label>
            <input
              id="fontSize"
              placeholder="40px"
              className="form-control"
              type="text"
              name="fontSize"
              onChange={(e) => {
                if (e.target.value.includes("px")) this.captureInput(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="starLength">No. of Stars : </label>
            <input
              id="stars"
              placeholder="5"
              className="form-control"
              type="number"
              name="stars"
              min="1"
              value={this.props.starLength}
              onChange={(e) => {
                this.props.setStars(e);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Generate
          </button>
        </form>
      </div>
    );
  }
}

export default StyleCreator;
