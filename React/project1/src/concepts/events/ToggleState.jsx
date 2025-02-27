import React, { Component } from "react";

class ToggleState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "John",
      name2: "Amith",
      toggle: true,
      bgColr1: "blue",
      bgColr2: "red",
    };
  }

  toggleState = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    return (
      <div>
        <h2
          style={
            this.state.toggle
              ? { backgroundColor: this.state.bgColr1 }
              : { backgroundColor: this.state.bgColr2 }
          }
        >
          Hi my name is{" "}
          {this.state.toggle ? this.state.name1 : this.state.name2}
        </h2>
        <button onClick={this.toggleState}>Change Name</button>
      </div>
    );
  }
}

export default ToggleState;
