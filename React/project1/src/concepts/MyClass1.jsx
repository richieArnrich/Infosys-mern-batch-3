import React, { Component } from "react";

class MyClass1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karthik Lokesh",
      age: 25,
      address: "chennai",
    };
  }
  changeState = () => {
    this.setState({
      name: "Gaurav",
      age: 30,
      address: "Delhi",
    });
  };
  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1>My First Class Component</h1>
        <p>
          Props data is {this.props.data.name} and {this.props.data.age}
        </p>
        <h3>Displaying state data</h3>
        <p>Name is {this.state.name}</p>
        <p>Age is {this.state.age}</p>
        <p>Address is {this.state.address}</p>
        <button onClick={this.changeState}>Change Values</button>
        <h3>I have entered {this.state.inputName}</h3>
      </div>
    );
  }
}

export default MyClass1;
