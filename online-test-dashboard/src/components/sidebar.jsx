import React from 'react';
import '../styles/sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
      <div className="profile-name-outer">
      <div className="profile-name">Prasanth</div>
      <div className="profile-role">Student</div>
      </div> 
      </div>
      <button className="create-button">+ Create</button>
      <nav className="nav-options">
        <ul>
          <li><a href="#">My Library</a></li>
          <li><a href="#">Smart Review</a></li>
          <li><a href="#">Hosted Sessions</a></li>
          <li><a href="#">Battle of the Brains</a></li>
          <li><a href="#">Groups</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Rewards</a></li>
          <li><a href="#">Notification</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">How to Use</a></li>
          <li><a href="#">Support Hub</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>
      <div className="other-links">
        <a href="#">At your service</a>
      </div>
      <div className="upgrade-section">
        <button className="upgrade-button">Upgrade</button>
        <button className="refer-button">Refer a friend & earn more Coins</button>
      </div>
    </div>
  );
};

export default Sidebar;
