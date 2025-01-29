import React from 'react';
import '../styles/librarycard.css'; // CSS file for styling
import Bigimage from '../assets/images/Bigimage.png';


function LibraryCard({ title, difficulty, questions, time, createdBy, genre, createdOn }) {
  return (
    <div className="energy-transfer">
      <div className="energy-card">
        <div className="image-placeholder">
          <img src={Bigimage} alt="Energy Transfer" className="" />
          <span className='left_sprite_edit'></span>
        </div>
        <div className="details">
          <h3>{title}</h3>
          <p className='first-p'>{difficulty} | {questions} Questions | {time}</p>
          <p><strong className='library-mcq'>MCQs</strong>&nbsp;&nbsp;
          <span style={{ fontWeight: 700,fontSize: '12px' }}>Created by</span> <span style={{ fontWeight: 400, color: '#BCBCBC',fontSize: '12px' }}>: {createdBy}</span> &nbsp;&nbsp; <span style={{ fontWeight: 700,fontSize: '12px' }}>Genre:</span> <span style={{ fontWeight: 400,color:'#BCBCBC', fontSize: '12px' }}>{genre}</span></p>
          <p><span style={{ fontWeight: 700, fontSize: '12px' }}>Created on:</span> <span style={{ fontWeight: 400,color: '#BCBCBC',fontSize: '12px' }}> {createdOn}</span></p>
          
        </div>
        <div className="actions">
        <span className='left_sprite_delete_button' style={{ cursor: 'pointer'}}></span>
              <span className='left_sprite_edit_button' style={{ cursor: 'pointer'}}></span>
            <span className='left_sprite_play_button' style={{ cursor: 'pointer'}}></span>
        </div> 
      </div>
    </div>
  );
}

export default LibraryCard;
