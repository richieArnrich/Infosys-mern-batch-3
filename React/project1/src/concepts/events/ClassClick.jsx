import React, { Component } from "react";

class ClassClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sachin",
      age: 50,
      country: "India",
    };
  }

  handleClick = () => {
    this.setState({
      name: "Ponting",
      age: 45,
      country: "Australia",
    });
  };
  render() {
    return (
      <div>
        <h2>Mouse Event Handling in Class Component</h2>
        <p>
          My name is <b>{this.state.name}</b> and my age is{" "}
          <b>{this.state.age}</b> and I come from <b>{this.state.country}</b>
        </p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
