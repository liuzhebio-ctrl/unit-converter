import { useState } from "react";
import "./App.css";


function App() {

const [value, setValue] = useState("");

const [category, setCategory] = useState("length");

const [fromUnit, setFromUnit] = useState("meter");

const [toUnit, setToUnit] = useState("kilometer");

const [result, setResult] = useState("");


  const categories = {

  length: {

    name: "Length",

    units: {

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

    }

  },


  temperature: {

    name: "Temperature",

    units: {

      celsius: {
        name: "Celsius"
      },

      fahrenheit: {
        name: "Fahrenheit"
      }

    }

  }

};


  function convert() {

    const number = Number(value);

    if (!number) {
      setResult("Please enter a number");
      return;
    }

    const currentUnits = categories[category].units;


const meters = number * currentUnits[fromUnit].value;


const converted =
meters / currentUnits[toUnit].value;

    setResult(
     `${number} ${currentUnits[fromUnit].name} = ${converted} ${currentUnits[toUnit].name}`
    );
  }


  return (
    <div className="container">

      <h1>
        Unit Converter
      </h1>
      <div>

  <label>
    Category:
  </label>


  <select
    value={category}
    onChange={(e)=>setCategory(e.target.value)}
  >

    {
      Object.keys(categories).map(cat => (

        <option key={cat} value={cat}>
          {categories[cat].name}
        </option>

      ))
    }

  </select>

</div>


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
            Object.keys(categories[category].units).map(unit => (
              <option key={unit} value={unit}>
                {categories[category].units[unit].name}
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
            Object.keys(categories[category].units).map(unit => (
              <option key={unit} value={unit}>
                {categories[category].units[unit].name}
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