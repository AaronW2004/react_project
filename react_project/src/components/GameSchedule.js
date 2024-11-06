// src/components/GameSchedule.js
import React, { useEffect, useState } from 'react';
import '../styles/GameSchedule.css';

function GameSchedule() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/data/GameSchedule.json')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error loading game schedule:', error));
  }, []);

  return (
    <div className="schedule-container">
      {games.map((game, index) => (
        <div key={index} className="game-box">
          <h2>{game.team} vs. {game.opponent}</h2>
          <p>Date: {game.date}</p>
          <p>Time: {game.time}</p>
          <p>Location: {game.place}</p>
          <p>Records: {game.teamRecord} - {game.opponentRecord}</p>
        </div>
      ))}
    </div>
  );
}

export default GameSchedule;
