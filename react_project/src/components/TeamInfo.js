// src/components/TeamInfo.js
import React, { useEffect, useState } from 'react';
import './TeamInfo.css';

function TeamInfo() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('/data/teaminfo.json')
      .then(response => response.json())
      .then(data => setTeams(data.teams))
      .catch(error => console.error('Error loading team info:', error));
  }, []);

  return (
    <div className="team-info-container">
      {teams.map((team, index) => (
        <div key={index} className="team-card">
          <img src={team.image_url} alt={team.team_name} className="team-image" />
          <h2>{team.team_name}</h2>
          <p>Founded: {team.founded}</p>
          <p>League: {team.league}</p>
          <p>Championships: {team.championships}</p>
          <p>Notable Players: {team.notable_players.join(', ')}</p>
          <p>{team.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamInfo;
