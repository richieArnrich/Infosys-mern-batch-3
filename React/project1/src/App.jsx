import ClassClick from "./concepts/events/ClassClick";
import FuncClick from "./concepts/events/FuncClick";
import FuncState from "./concepts/events/FuncState";
import ToggleState from "./concepts/events/ToggleState";
import LCM1 from "./concepts/LCM1";
import MyClass1 from "./concepts/MyClass1";
import MyFunc1 from "./concepts/MyFunc1";
import MyFunc2 from "./concepts/MyFunc2";

function App() {
  const obj = {
    name: "Prem",
    age: 25,
    bgColor: "black",
    textColor: "white",
  };
  return (
    <>
      <h1>My First React App</h1>
      {/* jsx */}
      {/* <MyFunc1 /> */}
      {/* <MyFunc2 data={obj} /> */}
      {/* sending data as a parameter */}
      {/* <MyClass1 data={obj} /> */}
      {/* <ClassClick />
      <FuncClick />
      <FuncState />
      <ToggleState /> */}
      <LCM1/>
    </>
  );
}

export default App;
