// src/components/ContentBox.js
import React from 'react';

function ContentBox({ title, text }) {
  return (
    <div className="content-box">
      {title && <h2>{title}</h2>}
      <p>{text}</p>
    </div>
  );
}

export default ContentBox;
