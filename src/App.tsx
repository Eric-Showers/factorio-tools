// Example App.tsx
import React, { useState } from "react";
import Calculator from "./components/Calculator.tsx";
import Results from "./components/Results.tsx";

function App() {
  const [results, setResults] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">Factorio Quality Calculator</h1>
      <Calculator onCalculate={setResults} />
      {results && <Results output={results} />}
    </div>
  );
}

export default App;
