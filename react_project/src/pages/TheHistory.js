import React from 'react';
import '../styles/TheHistory.css';

const TheHistory = () => {
  return (
    <div className="th-body">
      {/* Title Row */}
      <div className="th-title-row">
        <h1>The History</h1>
      </div>

      {/* Content Columns */}
      <div className="th-content">
        {/* Left Column */}
        <div className="th-left-column">
          <div className="th-paragraph-box">
            <p>
              Atlanta's professional sports scene began its rise with the founding of the Atlanta Braves, who moved to the city from Milwaukee in 1966, making them the oldest continuously operating professional sports franchise in the United States. The Braves brought national recognition to Atlanta with their dominance in Major League Baseball during the 1990s, led by stars like Greg Maddux, Tom Glavine, and Chipper Jones. The Braves won their first World Series in 1995, cementing their place in the hearts of fans. The team's consistency and competitive spirit over the decades, including a World Series win in 2021, have made them a beacon of success, helping to define Atlanta as a sports hub.
            </p>
          </div>
          <div className="th-image-placeholder"></div>
          <div className="th-paragraph-box">
            <p>
              In the same year as the Braves' arrival, the Atlanta Falcons were founded as an NFL expansion team. Though they faced early struggles, the Falcons eventually gained momentum and achieved their first Super Bowl appearance in 1999. Their roller-coaster history, marked by standout players like Deion Sanders, Michael Vick, and Matt Ryan, culminated in a second Super Bowl appearance in 2017. While that game ended in heartbreak, the Falcons continue to hold a central place in Atlanta’s sporting culture, symbolizing perseverance and the city's passion for football.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="th-right-column">
          <div className="th-image-placeholder"></div>
          <div className="th-paragraph-box2">
            <p>
              In the realm of basketball, the Atlanta Hawks have been a staple of the NBA since relocating from St. Louis in 1968. Although the Hawks have yet to secure an NBA championship, they’ve had periods of dominance, particularly in the 1980s and 2010s, led by iconic players like Dominique Wilkins and Trae Young. More recently, Atlanta United FC has made an immediate impact in Major League Soccer since their debut in 2017. Within two seasons, they claimed the MLS Cup in 2018, quickly becoming a powerhouse in U.S. soccer. Together, these teams have elevated Atlanta’s profile on the national sports stage, inspiring a new generation of fans and shaping the city’s cultural and economic identity.
            </p>
          </div>
          <div className="th-image-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default TheHistory;
