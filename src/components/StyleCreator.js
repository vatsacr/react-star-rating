import React, { Component } from "react";

export class StyleCreator extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="colorCode">Color: </label>
          <input
            id="colorCode"
            placeholder="#F9C900"
            className="form-control"
            type="text"
            name="colorCode"
            onChange={(e) => {
              if (e.target.value.length > 6) this.props.captureInput(e);
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
              if (e.target.value.includes("px")) this.props.captureInput(e);
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
      </form>
    );
  }
}

export default StyleCreator;
