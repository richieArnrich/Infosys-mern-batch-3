import React from "react";
import "./styles/styles.css";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";

function MyFunc1() {
  const mystyle = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "blue",
  };
  return (
    <div>
      <h2>My First Functional Component</h2>
      <p
        style={{ color: "lightblue", backgroundColor: "red", fontSize: "30px" }}
      >
        I am styled using inline style prop
      </p>
      <p style={mystyle}>I am styled using style object</p>
      <p id="i1">I am styled using external css</p>
      <hr />
      <div className="images">
        <h2>Display Images</h2>
        <img src="./images/pic1.jpg" alt="first picture" id="img" />
        <img src="./images/pic2.jpg" alt="second picture" id="img" />
        <hr />
        <h3>Images out of the public folder</h3>
        <img src={pic1} alt="first picture" id="img" />
        <img src={pic2} alt="second picture" id="img" />
      </div>
    </div>
  );
}

export default MyFunc1;
