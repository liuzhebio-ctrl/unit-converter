import { useState } from "react";
import "./App.css";

function App() {

  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  function convert() {

    const number = Number(value);

    const converted = number / 1000;

    setResult(converted + " km");

  }


  return (
    <div className="container">

      <h1>
        Unit Converter
      </h1>


      <input
        type="number"
        placeholder="Enter meters"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />


      <button onClick={convert}>
        Convert
      </button>


      <h2>
        Result:
        {result}
      </h2>


    </div>
  );
}


export default App;