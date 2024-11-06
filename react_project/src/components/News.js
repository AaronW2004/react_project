import React from 'react';
import '../styles/Hub.css';
import news1 from '../images/news1.jpg';
import news2 from '../images/news2.jpg';
import news3 from '../images/news3.jpg';
import news4 from '../images/news4.jpg';

function News() {
  const newsItems = [
    { image: news1, title: 'Big Kirko The Correct Signing for the Falcons?', author: 'Aaron Williams' },
    { image: news2, title: 'Disappointment for Braves Fans Around the Country', author: 'Aaron Williams' },
    { image: news3, title: 'Late Game Winner Brings Joy to the City of Atlanta', author: 'Aaron Williams' },
    { image: news4, title: 'Pre-Season Expectations vs. Reality', author: 'Aaron Williams' },
  ];

  return (
    <div className="news-section">
      {newsItems.map((item, index) => (
        <div key={index} className="news-card">
          <img src={item.image} alt={`News ${index + 1}`} />
          <div className="news-info">
            <h3>{item.title}</h3>
            <p>{item.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
