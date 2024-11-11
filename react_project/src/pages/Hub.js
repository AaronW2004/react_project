import React, { useState } from 'react';
import '../styles/Hub.css';
import News from '../components/News';
import hubImage1 from '../images/hub1.jpg'
import hubImage2 from '../images/hub2.jpg'

function Hub() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hub-title-box">
        <h1>Atlanta Sports Hub</h1>
      </div>

      {/* Main Content Container */}
      <div className="hub-container">
        {/* Left Column with Menu */}
        <div className="left-column">          
          <div className="hamburger-menu">
            <input type="checkbox" id="menu-toggle" checked={isOpen} onChange={toggleMenu} />
            <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="/the-history">The History</a></li>
                <li><a href="/birds-of-prey">Meet the Teams</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/game-schedule">This Week's Fight!</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="center-column">
          <div className="paragraph-row">
            <p>
              Welcome to the Atlanta Sports Hub, where we celebrate the heart and soul of Georgia's sports culture. 
              From the grit and determination of the Falcons on the gridiron to the precision of the Braves on the diamond, 
              Atlanta’s teams have brought pride and passion to fans for generations. Our mission is to provide fans with 
              all the latest updates, game-day news, and behind-the-scenes insights into Atlanta’s beloved sports teams. 
              Whether you’re cheering from the stands or watching from home, the Atlanta Sports Hub keeps you connected 
              to the teams and the community that define our city.
            </p>
          </div>
          <div className="image-row">
            <div className="split-image">
              <img src={hubImage1} alt="Hub Image 2" />
            </div>
            <div className="split-image">
              <img src={hubImage2} alt="Hub Image 1" />
            </div>
          </div>
        </div>

        {/* Right Column with Contact Info */}
        <div className="right-column">
          <div className="contact-us">
            <h3>Contact Us</h3>
            <p>Phone: +1(803)-470-9448</p>
            <p>Email: <a href="mailto:aaronnw@email.sc.edu">aaronnw@email.sc.edu</a></p>
          </div>
          <div className="dropdown-1">
            <div className="dropdown-placeholder">Purchase Tickets</div>
          </div>
        </div>
      </div>

      {/* Recent Updates Section */}
      <div className="recent-updates-section">
        <h2>Recent Updates</h2>
        <News />
      </div>
    </>
  );
}

export default Hub;
