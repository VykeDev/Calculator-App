import { useState } from "react";

function App() {
  const [subScreen, setSubScreen] = useState("sub-screen");
  const [mainScreen, setMainScreen] = useState("main-screen");
  return (
    <div className="calculator-app">
      <div className="screen">
        <p className="sub-screen">{subScreen}</p>
        <p className="main-screen">{mainScreen}</p>
      </div>
      <div className="bord">
        <button className="button">AC</button>
        <button className="button">DE</button>
        <button className="button">.</button>
        <button className="button">/</button>
        <button className="button">7</button>
        <button className="button">8</button>
        <button className="button">9</button>
        <button className="button">*</button>
        <button className="button">4</button>
        <button className="button">5</button>
        <button className="button">6</button>
        <button className="button">-</button>
        <button className="button">1</button>
        <button className="button">2</button>
        <button className="button">3</button>
        <button className="button">+</button>
        <button className="button">0</button>
        <button className="button">=</button>
        <button className="button">{"("}</button>
        <button className="button">{")"}</button>
      </div>
    </div>
  );
}

export default App;
