
import React, { useState } from 'react';
import '../styles/sidebar.css'; 
import createIcon from '../assets/images/create.png';
import battleIcon from '../assets/images/Battle-brains.png'; 
import serviceIcon from '../assets/images/service.png'; 
import UpgradeIcon from '../assets/images/Upgrade.png';
import ReferIcon from '../assets/images/Refer-a-friend.png';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* <button className="toggle-button" onClick={toggleSidebar}>
        {isCollapsed ? '>>' : '<<'}
      </button> */}
      <button className="toggle-button" onClick={toggleSidebar}>
        {window.innerWidth > 768 
          ? (isCollapsed ? '>>' : '<<') 
          : (isCollapsed ? '✕':'☰')}
      </button>

      <div className="profile-section">
        <div className="profile-name-outer">
          <div className="profile-name">Saurabh</div>
          <div className="profile-role">Student</div>
        </div>
      </div>
      <button className="create-button"> 
        <img src={createIcon} alt="Create" className="create-icon" />
      </button>
      <nav className="nav-options">
        <ul>
          <div className="first-li-div">
            <li>
              <span className='css_sprites sprite_library'></span> 
              <a href="#">My Library</a>
            </li>
            <li>
              <span className='css_sprites css_spritess sprite_smart'></span> 
              <a href="#">Smart Review</a>
            </li>
            <li>
              <span className='css_sprites sprite_hosted'></span> 
              <a href="#">Hosted Sessions</a>
            </li>
          </div>
          <li><a href="#" className='battle-a'>
            <span className='css_sprites sprite_battle'></span> 
            <img src={battleIcon} alt="battle" className="battle-icon" />
          </a></li>
          <div className="first-li-div">
            <li>
              <span className='css_sprites sprite_group'></span> 
              <a href="#">Groups</a>
            </li>
            <li>
              <span className='css_sprites sprite_marketplace'></span> 
              <a href="#">Marketplace</a>
            </li>
          </div>
          <div className="first-li-div">
            <li>
              <span className='css_sprites sprite_rewards'></span> 
              <a href="#">Rewards</a>
            </li>
            <li>
              <span className='css_sprites css_spritess sprite_notification'></span> 
              <a href="#">Notification</a>
            </li>
            <li>
              <span className='css_sprites sprite_profile'></span> 
              <a href="#">Profile</a>
            </li>
            <li>
              <span className='css_sprites sprite_setting'></span> 
              <a href="#">Settings</a>
            </li>
            <li>
              <span className='css_sprites sprite_use'></span> 
              <a href="#">How to Use</a>
            </li>
            <li>
              <span className='css_sprites css_spritess sprite_support'></span> 
              <a href="#">Support Hub</a>
            </li>
            <li>
              <span className='css_sprites sprite_logout'></span> 
              <a href="#">Logout</a>
            </li>
          </div>
        </ul>
      </nav>
      <div className="first-li-div other-links">
        <span>Other Links</span>
        <a href="#">
          <span className='css_sprites sprite_service'></span> 
          <img src={serviceIcon} alt="Create" className="serviceIcon" />
        </a>
      </div>
      <div className="upgrade-section">
        <button className="upgrade-button">
          <span className='css_sprites sprite_upgrade'></span> 
          <img src={UpgradeIcon} alt="Create" className="upgradeIcon" />
        </button>
        <button className="refer-button">
          <span className='css_sprites sprite_refer'></span> 
          <img src={ReferIcon} alt="Create" className="ReferIcon" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;





// import React, { useState } from 'react';
// import '../styles/sidebar.css'; 
// import createIcon from '../assets/images/create.png';
// import battleIcon from '../assets/images/Battle-brains.png'; 
// import serviceIcon from '../assets/images/service.png'; 
// import UpgradeIcon from '../assets/images/Upgrade.png';
// import ReferIcon from '../assets/images/Refer-a-friend.png';

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <>
//       <button className="toggle-button" onClick={toggleSidebar}>
//         {isCollapsed ? '☰' : '✖'}
//       </button>
//       <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
//         <div className="profile-section">
//           <div className="profile-name-outer">
//             <div className="profile-name">Saurabh</div>
//             <div className="profile-role">Student</div>
//           </div>
//         </div>
//         <button className="create-button"> 
//           <img src={createIcon} alt="Create" className="create-icon" />
//         </button>
//         <nav className="nav-options">
//           <ul>
//             <div className="first-li-div">
//               <li>
//                 <span className='css_sprites sprite_library'></span> 
//                 <a href="#">My Library</a>
//               </li>
//               <li>
//                 <span className='css_sprites css_spritess sprite_smart'></span> 
//                 <a href="#">Smart Review</a>
//               </li>
//               <li>
//                 <span className='css_sprites sprite_hosted'></span> 
//                 <a href="#">Hosted Sessions</a>
//               </li>
//             </div>
//             <li><a href="#" className='battle-a'>
//               <span className='css_sprites sprite_battle'></span> 
//               <img src={battleIcon} alt="battle" className="battle-icon" />
//             </a></li>
//             <div className="first-li-div">
//               <li>
//                 <span className='css_sprites sprite_group'></span> 
//                 <a href="#">Groups</a>
//               </li>
//               <li>
//                 <span className='css_sprites sprite_marketplace'></span> 
//                 <a href="#">Marketplace</a>
//               </li>
//             </div>
//             <div className="first-li-div">
//               <li>
//                 <span className='css_sprites sprite_rewards'></span> 
//                 <a href="#">Rewards</a>
//               </li>
//               <li>
//                 <span className='css_sprites css_spritess sprite_notification'></span> 
//                 <a href="#">Notification</a>
//               </li>
//               <li>
//                 <span className='css_sprites sprite_profile'></span> 
//                 <a href="#">Profile</a>
//               </li>
//               <li>
//                 <span className='css_sprites sprite_setting'></span> 
//                 <a href="#">Settings</a>
//               </li>
//               <li>
//                 <span className='css_sprites sprite_use'></span> 
//                 <a href="#">How to Use</a>
//               </li>
//               <li>
//                 <span className='css_sprites css_spritess sprite_support'></span> 
//                 <a href="#">Support Hub</a>
//               </li>
//               <li>
//                 <span className='css_sprites sprite_logout'></span> 
//                 <a href="#">Logout</a>
//               </li>
//             </div>
//           </ul>
//         </nav>
//         <div className="first-li-div other-links">
//           <span>Other Links</span>
//           <a href="#">
//             <span className='css_sprites sprite_service'></span> 
//             <img src={serviceIcon} alt="Create" className="serviceIcon" />
//           </a>
//         </div>
//         <div className="upgrade-section">
//           <button className="upgrade-button">
//             <span className='css_sprites sprite_upgrade'></span> 
//             <img src={UpgradeIcon} alt="Create" className="upgradeIcon" />
//           </button>
//           <button className="refer-button">
//             <span className='css_sprites sprite_refer'></span> 
//             <img src={ReferIcon} alt="Create" className="ReferIcon" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
