import React from "react";

export function InputItem({ onAddItem, handleChange, value }) {
  return (
    <div className="input-item">
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={onAddItem}>Add</button>
    </div>
  );
}
