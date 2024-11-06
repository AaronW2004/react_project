// src/pages/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';
import ImagePlaceholder from '../components/ImagePlaceholder';
import SectionBox from '../components/SectionBox';
import AboutUs1 from '../images/aboutus1.jpg';
import AboutUs2 from '../images/aboutus2.jpg';
import AboutUs3 from '../images/aboutus3.jpg';

function AboutUs() {
  return (
    <body className="au-body">
    <div className="au-container">
      {/* Left Column */}
      <div className="au-left-column">
        <ImagePlaceholder src={AboutUs1} alt="About Us" className="au-image-placeholder" />
        <SectionBox 
          className="au-box1"
          title="About Us" 
        />
        <div className="au-paragraph-box">
          <p>
            We are passionate about celebrating the rich sports culture of Atlanta, home to some of the most iconic professional teams in the nation. This website is designed to highlight the Atlanta Falcons, Braves, Hawks, and United FC, offering fans a hub for everything from history to upcoming events. As a student with a deep appreciation for the impact these teams have on our community, I built this site to unite fellow fans and emphasize the role sports play in shaping our city’s identity.
          </p>
        </div>
      </div>

      {/* Center Column */}
      <div className="au-center-column">
        <SectionBox 
          className="au-box2"
          title="Our Mission" 
        />
        <div className="au-paragraph-box2">
          <p>
            Our mission is to foster a deeper connection between the people of Atlanta and their favorite sports teams. Sports have an incredible power to bring communities together, providing both a sense of belonging and pride. Through this website, we aim to showcase the history, significance, and excitement these teams bring, while offering fans a place to engage and stay informed about their favorite teams and events.
          </p>
        </div>
        <ImagePlaceholder src={AboutUs2} alt="Our Mission" className="au-image-placeholder" />
      </div>

      {/* Right Column */}
      <div className="au-right-column">
        <ImagePlaceholder src={AboutUs3} alt="Meet the Team" className="au-image-placeholder" />
        <div className="au-bordered-paragraph">
          <p>
            Behind this website is Aaron Williams, a student passionate about sports and technology. As the creator and developer, I’m combining my love for Atlanta's vibrant sports scene with my technical skills to bring this project to life. My goal is to create an informative and engaging platform that not only serves Atlanta sports fans but also reflects the importance of sports to the community. Thank you for joining me on this journey!
          </p>
        </div>
        <SectionBox 
          className="au-meet-the-team-box"
          title="Meet the Team!" 
        />
      </div>
    </div>
    </body>
  );
}

export default AboutUs;
