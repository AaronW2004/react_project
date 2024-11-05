// src/pages/Hub.js
import React, { useState } from 'react';
import News from '../components/News.js';
import '../styles/Hub.css';

function Hub() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      {/* Left Column */}
      <div className="left-column">
        <div className="title-box">
          <h1>Atlanta Sports Hub</h1>
        </div>
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

      {/* Center Column */}
      <div className="center-column">
        <div className="paragraph-row">
          <p>
            Welcome to the Atlanta Sports Hub, where we celebrate the heart and soul of Georgia's sports culture...
          </p>
        </div>
        <div className="image-row">
          <div className="split-image">
            <img src="../images/hub2.jpg" alt="Hub Image 2" />
          </div>
          <div className="split-image">
            <img src="images/hub1.jpg" alt="Hub Image 1" />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Phone: +1(803)-470-9448</p>
          <form id="contactForm">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
            <p id="formMessage"></p>
          </form>
        </div>
        <div className="dropdown-1">
          <div className="dropdown-placeholder">Purchase Tickets</div>
        </div>
      </div>
      <News />
    </div>
  );
}

export default Hub;
