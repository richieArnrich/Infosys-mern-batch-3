import React, { useState } from "react";

function FuncClick() {
  // state variable and a function to update the state
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Click the button below</h2>
      <p>I have clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default FuncClick;

// Use state: function which allows us to access state object inside a functional component
// Use state: function is a hook which is a special function provided by react library
// Use state provides an array of two elements, stateobject and a function to update the state
