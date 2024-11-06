// src/components/ButtonRow.js
import React from 'react';

function ButtonRow({ buttons }) {
  return (
    <div className="button-row">
      {buttons.map((text, idx) => (
        <button key={idx}>{text}</button>
      ))}
    </div>
  );
}

export default ButtonRow;
