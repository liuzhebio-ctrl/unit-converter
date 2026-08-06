import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Unit Converter</h1>

      <p>
        Convert units quickly and easily
      </p>

      <div className="converter-card">
        <input 
          type="number"
          placeholder="Enter value"
        />

        <select>
          <option>Kilometer</option>
          <option>Mile</option>
        </select>

        <button>
          Convert
        </button>

        <h2>
          Result: 0
        </h2>
      </div>
    </div>
  )
}

export default App