import React from "react";
import "./App.css";
import StarContainer from "./components/StarContainer";
import StyleCreator from "./components/StyleCreator";

class App extends React.Component {
  state = {
    hoveredId: 0,
    rating: 0,
    colorCode: "#F9C900",
    fontSize: "90px",
    stars: [1, 2, 3, 4, 5],
  };
  handleMouseEnter = (e) => {
    this.setState({ hoveredId: e.target.id });
  };

  handleMouseLeave = (e) => {
    this.setState({ hoveredId: null });
  };

  handleClick = (e) => {
    this.setState({
      rating: e.target.id,
    });
  };
  captureInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (styleObject) => {
    let fontSize = styleObject.fontSize;
    let colorCode = styleObject.colorCode;
    let starLength = styleObject.starLength;
    this.setState({
      fontSize: fontSize,
      colorCode: colorCode,
      stars: Array.from(Array.from({ length: starLength }, (_, i) => i + 1)),
    });
  };
  render() {
    return (
      <div className="container">
        <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12 col-12 p-2">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12 text-center my-auto">
              <StarContainer
                hoveredId={this.state.hoveredId}
                rating={this.state.rating}
                handleClick={this.handleClick}
                handleMouseLeave={this.handleMouseLeave}
                handleMouseEnter={this.handleMouseEnter}
                stars={this.state.stars}
                colorCode={this.state.colorCode}
                fontSize={this.state.fontSize}
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
              <StyleCreator
                onSubmit={this.onSubmit}
                captureInput={this.captureInput}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
