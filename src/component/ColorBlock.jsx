import React from "react";
import "./colorblock.css";

//this.props.color
//this.props.onClick.........these 2 props we receive from parent

class ColorBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="color-block"
        onClick={() => {
          this.props.onClick(this.props.color);
        }}
        style={{
          backgroundColor: this.props.color
        }}
      ></div>
    );
  }
}

export default ColorBlock;

// whenever state changes or props change their is an update in virtual Dom
