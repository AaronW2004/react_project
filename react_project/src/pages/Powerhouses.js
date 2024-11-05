import React from 'react';
import '../styles/Powerhouses.css';
import TitleBox from '../components/TitleBox';
import ImagePlaceholder from '../components/ImagePlaceHolder';
import ButtonRow from '../components/ButtonRow';
import ContentBox from '../components/ContentBox';

function Powerhouses() {
  return (
    <div className="container">
      <div className="left-column">
        <TitleBox title="The Powerhouses" />
        <ImagePlaceholder src="images/ph1.jpg" alt="Powerhouses" />
        <ButtonRow buttons={["More Info", "Braves Fundraising"]} />
      </div>

      <div className="right-column">
        <ContentBox 
          title="Meet the Braves!" 
          text="The Atlanta Braves are not just one of the most successful teams in Major League Baseball but also a symbol of Atlanta’s sports legacy..."
        />
        <ImagePlaceholder src="images/ph2.jpg" alt="Braves" />
        <ContentBox 
          title="Meet Atlanta United F.C." 
          text="Since their inaugural season in 2017, Atlanta United FC has quickly become one of Major League Soccer’s standout teams..."
        />
      </div>
    </div>
  );
}

export default Powerhouses;
