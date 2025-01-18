import React from 'react';
import '../styles/hostedsessioncard.css'; 

function HostedSessionCard() {
  return (
    <div className="hosted-session-card">
      <div className="session-details">
        <h3>Energy Transfer</h3>
        <p>Session Name: xxxxxxxxxxxx</p>
        <p>Easy | 5 Questions | 60s</p>
        <p><strong>MCQs</strong> Genre: Science</p>
        <p>Hosted on: 07/08/2024 | 1:05 PM</p>
      </div>
      <div className="actions">
        <button className="host-button">Host Game</button>
        <button className="leaderboard-button">Leaderboard</button>
      </div>
    </div>
  );
}

export default HostedSessionCard;
