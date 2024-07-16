import { useState } from "react";

function AddButton(props) {
  return (
    <button
      className="button"
      onClick={(e) => props.addFunction(e)}
      value={props.value}
    >
      {props.value}
    </button>
  );
}

function App() {
  const [subScreen, setSubScreen] = useState("sub-screen");
  const [mainScreen, setMainScreen] = useState("");

  function add(e) {
    setMainScreen((m) => m + e.target.value);
  }

  function remove() {
    setMainScreen((m) => m.slice(0, -1));
  }

  function clear() {
    setMainScreen("");
    setSubScreen("");
  }

  function calculate() {}
  return (
    <div className="calculator-app">
      <div className="screen">
        <p className="sub-screen">{subScreen}</p>
        <p className="main-screen">{mainScreen}</p>
      </div>
      <div className="bord">
        <button className="button" onClick={clear}>
          AC
        </button>
        <button className="button" onClick={remove}>
          DE
        </button>
        <AddButton value={"."} addFunction={add} />
        <AddButton value={"/"} addFunction={add} />
        <AddButton value={7} addFunction={add} />
        <AddButton value={8} addFunction={add} />
        <AddButton value={9} addFunction={add} />
        <AddButton value={"*"} addFunction={add} />
        <AddButton value={4} addFunction={add} />
        <AddButton value={5} addFunction={add} />
        <AddButton value={6} addFunction={add} />
        <AddButton value={"-"} addFunction={add} />
        <AddButton value={1} addFunction={add} />
        <AddButton value={2} addFunction={add} />
        <AddButton value={3} addFunction={add} />
        <AddButton value={"+"} addFunction={add} />
        <AddButton value={0} addFunction={add} />
        <button className="button" onClick={calculate}>
          =
        </button>
        <AddButton value={"("} addFunction={add} />
        <AddButton value={")"} addFunction={add} />
      </div>
    </div>
  );
}

export default App;
