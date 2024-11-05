// src/pages/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';
import ImagePlaceholder from '../components/ImagePlaceHolder';
import SectionBox from '../components/SectionBox';

function AboutUs() {
  return (
    <div className="container">
      <div className="left-column">
        <ImagePlaceholder src="images/aboutus1.jpg" />
        <SectionBox title="About Us" text="We are passionate about celebrating Atlanta's rich sports culture..." />
      </div>
      <div className="center-column">
        <SectionBox title="Our Mission" text="Our mission is to foster a deeper connection..." />
        <ImagePlaceholder src="images/aboutus2.jpg" />
      </div>
      <div className="right-column">
        <ImagePlaceholder src="images/aboutus3.jpg" />
        <SectionBox title="Meet the Team!" text="Behind this website is Aaron Williams..." />
      </div>
    </div>
  );
}

export default AboutUs;
