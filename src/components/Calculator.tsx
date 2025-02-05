// Example Calculator.tsx
import React, { useState } from "react";
import calculateResults from "../utils/calculate.ts";
import upcycleGears from "../utils/upcycle.ts";

function Calculator({ onCalculate }) {
  const [recyclers, setRecyclers] = useState(1);
  const [modules, setModules] = useState(0);
  const [bonus, setBonus] = useState(0);

  const handleSubmit = () => {
    const result = calculateResults(recyclers, modules, bonus);
    result["Iron Gear (upcycle)"] = upcycleGears(result["Iron gear"], modules);
    onCalculate(result);
  };

  return (
    <div>
      <label>Recyclers: </label>
      <input
        type="number"
        value={recyclers}
        onChange={(e) => setRecyclers(Number(e.target.value))}
      />

      <label>Quality Module Level: </label>
      <label>
      <input
          type="radio"
          name="module-level"
          value={0}
          checked={modules === 0}
          onChange={(e) => setModules(Number(e.target.value))}
      />
      0
      </label>

      <label>
      <input
          type="radio"
          name="module-level"
          value={1}
          checked={modules === 1}
          onChange={(e) => setModules(Number(e.target.value))}
      />
      1
      </label>
      
      <label>
      <input
          type="radio"
          name="module-level"
          value={2}
          checked={modules === 2}
          onChange={(e) => setModules(Number(e.target.value))}
      />
      2
      </label>

      <label>
      <input
          type="radio"
          name="module-level"
          value={3}
          checked={modules === 3}
          onChange={(e) => setModules(Number(e.target.value))}
      />
      3
      </label>

      <label>Productivity Bonus (%): </label>
      <input
        type="number"
        value={bonus}
        onChange={(e) => setBonus(Number(e.target.value))}
      />

      <button onClick={handleSubmit}>Calculate</button>
    </div>
  );
}

export default Calculator;
