// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  let addvalue = () => {
    if (counter < 20) setCounter(counter + 1);
  };
  let decvalue = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai with Me</h1>
      <h3>no. of chai to Order : {counter}</h3>
      <button onClick={addvalue}>Increase {counter}</button>
      <br />
      <br />
      <button onClick={decvalue}>Decrease {counter}</button>
      <p>count: {counter}</p>
    </>
  );
}

export default App;
