// src/components/HistoryContentBox.js
import React from 'react';

function HistoryContentBox({ title, text }) {
  return (
    <div className="history-content-box" style={{ backgroundColor: '#ffffff', padding: '20px', border: '1px solid #ddd' }}>
      {title && <h2>{title}</h2>}
      <p>{text}</p>
    </div>
  );
}

export default HistoryContentBox;
