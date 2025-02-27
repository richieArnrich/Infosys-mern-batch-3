import React, { Component } from "react";

class LCM1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
    };
  }
  handleUpdate = () => {
    setTimeout(() => {
      alert("state updated");
      this.setState({ num1: 10 });
    }, 2000);
  };

  componentWillMount() {
    console.log("componentWillMount called");
    this.handleUpdate();
  }
  componentDidMount() {
    console.log("componentDidMount called");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called");
    return true;
  }
  render() {
    console.log("render called");
  }
}

export default LCM1;
