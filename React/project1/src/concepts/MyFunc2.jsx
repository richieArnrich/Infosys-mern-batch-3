import React from "react";

function MyFunc2(props) {
  console.log(props);
  const data = props.data;
  console.log(data);
  return (
    <div style={{ backgroundColor: data.bgColor, 
    color: data.textColor }}>
      <h1>Displaying props</h1>
      <p>Name is {data.name}</p>
      <p>Age is {data.age}</p>
    </div>
  );
}

export default MyFunc2;
