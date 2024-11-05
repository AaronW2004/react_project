import React from 'react';
import '../styles/BOPrey.css';
import ImagePlaceholder from '../components/ImagePlaceHolder';
import ButtonRow from '../components/ButtonRow';
import ContentBox from '../components/ContentBox';

function BOPrey() {
  return (
    <div className="container">
      <div className="left-column">
        <div className="title-box">
          <h1>Birds of Prey!</h1>
        </div>
        <ImagePlaceholder src="images/boprey1.jpg" alt="Birds of Prey" />
        <ButtonRow buttons={["More Info", "Braves and ATL FC"]} />
      </div>

      <div className="right-column">
        <ContentBox 
          title="Meet the Falcons!" 
          text="The Atlanta Falcons, established in 1965, are a cornerstone of the city's sports culture, representing Atlanta in the NFL..."
        />
        <ImagePlaceholder src="images/boprey2.jpg" alt="Hawks" />
        <ContentBox 
          title="Meet the Hawks!" 
          text="The Atlanta Hawks, one of the NBA’s most dynamic teams, have a long and storied history in professional basketball..."
        />
      </div>
    </div>
  );
}

export default BOPrey;
