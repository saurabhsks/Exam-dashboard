import React from 'react';
import '../styles/mcqsection.css';
import peter from '../assets/images/peter.png';
import burton from '../assets/images/burton.png';
import sixty from '../assets/images/sixty.png';
import exit from  '../assets/images/exit.png';

function MCQSection() {
  return (
    <div className="mcq-section">
      <div className="mcq-header">
        <span className="mcq-question-number">1/10</span>
        <span className="mcq-topic">Harry Potter</span>
        <span className="mcq-timer">
        <img src={sixty} alt="sixty" className="sixty-image" />
        </span>
      </div>
      <div className="mcq-question">
        Who directed 'Harry Potter and the Philosopher's Stone'?
      </div>
      <div className="mcq-options">
        <button className="mcq-option option-one">Chris Columbus</button>
        <button className="mcq-option option-two">Steven Spielberg</button>
        <button className="mcq-option option-three">
        <img src={peter} alt="peter" className="peter-image" />
        Peter Jackson</button>
        <button className="mcq-option option-four">
        <img src={burton} alt="burton" className="burton-image" />
        Tim Burton</button>
      </div>
      <div className="mcq-actions">
        <button className="mcq-exit">
        <img src={exit} alt="exit" className="exit-image" />
        Exit</button>
        <button className="mcq-submit">Submit</button>
      </div>
    </div>
  );
}

export default MCQSection;
