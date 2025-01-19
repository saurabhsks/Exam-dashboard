import React from 'react';
import '../styles/hostedsessioncard.css'; 

function HostedSessionCard() {
  return (
    <div className="hosted-session-card">
      <div className="session-details">
        <h3>Energy Transfer</h3>
        <p className='session-name'>Session Name: xxxxxxxxxxxx</p>
        <p className='hosted-questions'>Easy | 5 Questions | 60s</p>
        <p><strong className='hosted-mcq'>MCQs</strong> <br></br> <span className='hosted-questions ' style={{marginBottom: '0px'}}>Genre: Science</span></p>
        <p className='hosted-questions'>Hosted on: 07/08/2024 | 1:05 &nbsp;&nbsp; &nbsp;&nbsp; </p>
      </div>
      <div className="actions">
        <button className="host-button">Host Game</button>
        <button className="leaderboard-button">Leaderboard</button>
      </div>
     </div>
  );
}

export default HostedSessionCard;
