import React from 'react';
import '../styles/hostedsessioncard.css'; 

function HostedSessionCard({ title, sessionName , difficulty, questions,duration, genre, scheduledOn }) {
  return (
    <div className="hosted-session-card">
      <div className="session-details">
        <h3>{title}</h3>
        <p className='session-name'>Session Name: {sessionName}</p>
        <p className='hosted-questions'>{difficulty} | {questions} Questions | {duration}</p>
        <p><strong className='hosted-mcq'>MCQs</strong> <br></br> <span className='hosted-questions ' style={{marginBottom: '0px'}}>Genre: {genre}</span></p>
        <p className='hosted-questions'>Hosted on: {scheduledOn} &nbsp;&nbsp; &nbsp;&nbsp; </p>
      </div>
      <div className="actions">
        <button className="host-button">Host Game</button>
        <button className="leaderboard-button">Leaderboard</button>
      </div>
     </div>
  );
}

export default HostedSessionCard;
