// Example Results.tsx
import React from "react";

function Results({ output }) {
  const qualities = ["Normal", "Uncommon", "Rare", "Epic", "Legendary"];
  return (
    <div>
      <h2>Output Breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            {qualities.map((quality) => (
              <th key={quality}>{quality}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(output).map(([item, amounts]) => (
            <tr key={item}>
              <td>{item}</td>
              {amounts.map((amount, index) => (
                <td key={index}>{amount}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
