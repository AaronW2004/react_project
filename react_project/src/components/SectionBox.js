// src/components/SectionBox.js
import React from 'react';

function SectionBox({ title, text }) {
  return (
    <div className="section-box">
      {title && <h2>{title}</h2>}
      <p>{text}</p>
    </div>
  );
}

export default SectionBox;
