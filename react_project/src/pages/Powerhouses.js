import React from 'react';
import '../styles/Powerhouses.css';
import TitleBox from '../components/TitleBox';
import ImagePlaceholder from '../components/ImagePlaceHolder';
import ButtonRow from '../components/ButtonRow';
import ContentBox from '../components/ContentBox';
import ph1 from '../images/ph1.jpg';
import ph2 from '../images/ph2.jpg';

function Powerhouses() {
  return (
    <div className="container">
      <div className="left-column">
        <TitleBox title="The Powerhouses" />
        <ImagePlaceholder src={ph1} alt="Powerhouses" />
        <ButtonRow buttons={["More Info", "Braves Fundraising"]} />
      </div>

      <div className="right-column">
        <ContentBox 
          title="Meet the Braves!" 
          text="The Atlanta Braves are not just one of the most successful teams in Major League Baseball but also a symbol of Atlanta’s sports legacy..."
        />
        <ImagePlaceholder src={ph2} alt="Braves" />
        <ContentBox 
          title="Meet Atlanta United F.C." 
          text="Since their inaugural season in 2017, Atlanta United FC has quickly become one of Major League Soccer’s standout teams..."
        />
      </div>
    </div>
  );
}

export default Powerhouses;
