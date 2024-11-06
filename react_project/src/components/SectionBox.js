// src/components/SectionBox.js
import React from 'react';

function SectionBox({ title, text, className }) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default SectionBox;
