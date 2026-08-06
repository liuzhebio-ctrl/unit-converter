import { useState } from "react";
import "./App.css";


function App() {

  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [result, setResult] = useState("");


  const units = {
    meter: {
      name: "Meter",
      value: 1
    },

    kilometer: {
      name: "Kilometer",
      value: 1000
    },

    mile: {
      name: "Mile",
      value: 1609.34
    },

    foot: {
      name: "Foot",
      value: 0.3048
    }
  };


  function convert() {

    const number = Number(value);

    if (!number) {
      setResult("Please enter a number");
      return;
    }

    const meters = number * units[fromUnit].value;

    const converted = meters / units[toUnit].value;

    setResult(
      `${number} ${units[fromUnit].name} = ${converted} ${units[toUnit].name}`
    );
  }


  return (
    <div className="container">

      <h1>
        Unit Converter
      </h1>


      <input
        type="number"
        value={value}
        placeholder="Enter value"
        onChange={(e) => setValue(e.target.value)}
      />


      <div>
        <label>From:</label>

        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >

          {
            Object.keys(units).map(unit => (
              <option key={unit} value={unit}>
                {units[unit].name}
              </option>
            ))
          }

        </select>
      </div>


      <div>
        <label>To:</label>

        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >

          {
            Object.keys(units).map(unit => (
              <option key={unit} value={unit}>
                {units[unit].name}
              </option>
            ))
          }

        </select>
      </div>


      <button onClick={convert}>
        Convert
      </button>


      <h2>
        {result}
      </h2>

    </div>
  );
}


export default App;