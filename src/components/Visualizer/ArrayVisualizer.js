import React from "react";

export default function ArrayVisualizer({ array, color }) {
  return (
    <div className="array-container">
      {array.map((value, id) => (
        <div
          className="array-bar"
          key={id}
          style={{ backgroundColor: color, height: `${value}px` }}
        ></div>
      ))}
    </div>
  );
}
