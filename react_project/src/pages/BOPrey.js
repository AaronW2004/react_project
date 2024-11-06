import React from 'react';
import '../styles/BOPrey.css';
import boPrey1 from '../images/boprey1.jpg';
import boPrey2 from '../images/boprey2.jpg';
import { useNavigate } from 'react-router-dom';

function BOPrey() {
  const navigate = useNavigate();

  return (
    <div className="bop-container">
      {/* Left Column */}
      <div className="bop-left-column">
        <div className="bop-title-box">
          <h1>Birds of Prey!</h1>
        </div>
        <img src={boPrey1} alt="Birds of Prey" className="bop-image-placeholder" />
        <div className="bop-button-row">
          <button>More Info</button>
          <button onClick={() => navigate('/powerhouses')}>Braves and ATL FC</button>
        </div>
      </div>

      {/* Right Column */}
      <div className="bop-right-column">
        <div className="bop-box">
          <h2>Meet the Falcons!</h2>
          <p>
            The Atlanta Falcons, established in 1965, are a cornerstone of the city's sports culture, representing Atlanta in the NFL. Known for their resilience and thrilling style of play, the Falcons have built a loyal fanbase that stretches beyond the city limits. With a history that includes multiple playoff appearances and a Super Bowl run, the Falcons continue to be a source of pride for Atlanta’s football enthusiasts. This website will keep you updated on all things Falcons, from game schedules and player stats to historic moments and upcoming events, ensuring you never miss a beat.
          </p>
        </div>

        {/* Image in the third row */}
        <img src={boPrey2} alt="Hawks" className="bop-image-placeholder2" />

        <div className="bop-box">
          <h2>Meet the Hawks!</h2>
          <p>
            The Atlanta Hawks, one of the NBA’s most dynamic teams, have a long and storied history in professional basketball. From their early beginnings to their rise as a competitive force in the Eastern Conference, the Hawks have provided Atlanta with countless unforgettable moments. The team’s commitment to excellence on the court, combined with a passionate fanbase, makes them a beloved fixture in the city. On this site, you’ll find everything from the latest Hawks news and game highlights to features on key players and historical achievements, giving fans an inside look at their favorite basketball team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BOPrey;
