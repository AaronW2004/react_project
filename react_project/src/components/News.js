// src/components/News.js
import React, { useEffect, useState } from 'react';
import '../styles/News.css';

function News() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetch('/data/news.json')
      .then(response => response.json())
      .then(data => setNewsItems(data.news))
      .catch(error => console.error('Error loading news:', error));
  }, []);

  return (
    <div className="news-container">
      {newsItems.map((item, index) => (
        <div key={index} className="news-card">
          <img src={item.image_url} alt={item.team} className="news-image" />
          <div className="news-info">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <p>By: {item.author} | Date: {item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
