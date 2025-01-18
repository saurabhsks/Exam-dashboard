import React from 'react';
import '../styles/librarycard.css'; // CSS file for styling

function LibraryCard() {
  return (
    <div className="energy-transfer">
      <div className="energy-card">
        <div className="image-placeholder">
          {/* Image placeholder */}
          <img src="/path/to/image-placeholder.png" alt="Energy Transfer" />
        </div>
        <div className="details">
          <h3>Energy Transfer</h3>
          <p>Easy | 20 Questions | 60s</p>
          <p><strong>MCQs</strong> Created by: Rahul &nbsp;&nbsp; Genre: Tech</p>
          <p>Created on: 07/08/2024 | 1:05 PM</p>
          <div className="actions">
            <button className="edit-button">Edit</button>
            <button className="play-button">Play</button>
          </div>
        </div>
        <button className="delete-button">&#128465;</button>
      </div>
    </div>
  );
}

export default LibraryCard;
