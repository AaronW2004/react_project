import React from 'react';
import '../styles/TheHistory.css';
import TitleBox from '../components/TitleBox';
import ContentBox from '../components/ContentBox';
import ImagePlaceholder from '../components/ImagePlaceHolder';

function TheHistory() {
  return (
    <div>
      <TitleBox title="The History" />
      <div className="content">
        <div className="left-column">
          <ContentBox 
            text="Atlanta's professional sports scene began its rise with the founding of the Atlanta Braves, who moved to the city from Milwaukee in 1966..."
          />
          <ImagePlaceholder src="images/history1.jpg" alt="History Image" />
          <ContentBox 
            text="In the same year as the Braves' arrival, the Atlanta Falcons were founded as an NFL expansion team..."
          />
        </div>
        <div className="right-column">
          <ImagePlaceholder src="images/history2.jpg" alt="History Image 2" />
          <ContentBox 
            text="In the realm of basketball, the Atlanta Hawks have been a staple of the NBA since relocating from St. Louis in 1968..."
          />
          <ImagePlaceholder src="images/history3.jpg" alt="History Image 3" />
        </div>
      </div>
    </div>
  );
}

export default TheHistory;
