import React, { useState } from "react";
import "../styles/styles.css";
function FuncState() {
  const [name, setName] = useState("");

  function handleFocus() {
    let inp1 = document.getElementById("inp1");
    inp1.style.border = "2px solid red";
  }
  function handleBlur() {
    let inp1 = document.getElementById("inp1");
    inp1.style.border = "1px solid black";
  }

  return (
    <div>
      <h2>Click on the input field</h2>
      <input
        type="text"
        placeholder="Enter your name"
        id="inp1"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ border: "none" }}
        onChange={(event) => {
          console.log(event);
          setName(event.target.value);
        }}
      /> {/* component part */}
      <p>I have entered {name}</p>  {/* view part */}
    </div>
  );
}

export default FuncState;
