import React from 'react';
import '../styles/leaderboard.css';
import leaderboardicon from '../assets/images/leaderboard.png';
import janeicon from '../assets/images/janeimage.png';
import coins from '../assets/images/coins.png';
import unknown from '../assets/images/unknown.png';
import medal1 from '../assets/images/medal-1.png';
import medal2 from '../assets/images/medal-2.png';
import medal3 from '../assets/images/medal-3.png';



function Leaderboard() {
  return (
    <div className="leaderboard-section">
      <div className="leaderboard-header">
        <img src={leaderboardicon} className='leaderboardicon' alt="Trophy Icon" />
      </div>

      <div className="top-three">
      {/* <img src={medal2} className='medalicon2' alt="medal Icon" /> */}
        <div className="top-card second">
        <div className="medal medal-second"></div>
          <div className="ranking">#2</div>
          <img src={janeicon} style={{}} className='janeicon2' alt="Jane Icon" />
          <div className="name">Jane Doe</div>
          <div className="email">pr******@gmail.com</div>
          <div className='d-flex-lower' style={{ marginTop:'21px'}}>
          <div className="themes">Marvel</div>
          <div className="coins d-flex">
          <img src={coins} className='coinimage' alt="coin Icon" />
          2530</div>
          </div>
        </div>
        <div className="top-card first">
        <div className="medal medal-first"></div>
        {/* <img src={medal1} className='medalicon1' alt="medal Icon" /> */}
          <div className="ranking">#1</div>
          <img src={janeicon} className='janeicon1' alt="Jane Icon" />
          <div className="name">Jane Doe</div>
          <div className="email">pr******@***</div>
          <div className='d-flex-lower' style={{ marginTop:'44px'}}>
          
          <div className="themes">Games</div>
          <div className="coins d-flex">
          <img src={coins} className='coinimage' alt="coin Icon" />
          3454</div>
          </div>
          
        </div>
        <div className="top-card third">
        <div className="medal medal-third"></div>
        {/* <img src={medal3} className='medalicon3' alt="medal Icon" /> */}
          <div className="ranking">#3</div>
          <img src={janeicon} className='janeicon3' alt="Jane Icon" />
          <div className="name">Jane Doe</div>
          <div className="email">pr******@***</div>
          <div className='d-flex-lower'>
          <div className="themes">Anime</div>
          <div className="coins d-flex">
          <img src={coins} className='coinimage' alt="coin Icon" />
          2950</div>
          </div>
        </div>
      </div>

      {/* Participant Rows */}
      <div className="participant-roww" style={{}}>
        <div className="rank"></div>
        <div className="name-email">
        <span className='name' style={{ display:'block'}}></span>
        <span className='email' style={{ display:'block'}}></span>
        </div>
        <div className="themee">Theme</div>
        <div className="coinss d-flex">Coins</div>
      </div>
      <div className="participant-row">
        <div className="rank">#4
        <img src={unknown} className='unknownimage' style={{marginLeft:'6px', width:'28px',height:'28px'}} alt="unknown image" />
        </div>
        <div className="name-email">
        <span className='name' style={{ display:'block'}}>Jane Doe</span>
        <span className='email' style={{ display:'block'}}>pr******@gmail.com</span>
        </div>
        <div className="theme">Marvel</div>
        <div className="coin d-flex">
        <img src={coins} className='coinimage' alt="coin Icon" />
        2245</div>
      </div>
      <div className="participant-row">
        <div className="rank">#5
        <img src={janeicon} className='janeimage' style={{marginLeft:'6px', width:'28px',height:'28px'}} alt="unknown image" />
        </div>
        <div className="name-email">
        <span className='name' style={{ display:'block'}}>Jane Doe</span>
        <span className='email' style={{ display:'block'}}>pr******@***</span>
        </div>
        <div className="theme">Harry Potter</div>
        <div className="coin d-flex">
        <img src={coins} className='coinimage' alt="coin Icon" />
        2105</div>
      </div>
      <div className="participant-row">
        <div className="rank">#6
        <img src={janeicon} className='janeimage' style={{marginLeft:'6px', width:'28px',height:'28px'}} alt="unknown image" />
        </div>
        <div className="name-email">
        <span className='name' style={{ display:'block'}}>Jane Doe</span>
        <span className='email' style={{ display:'block'}}>pr******@***</span>
        </div>
        <div className="theme">Oscar Movie</div>
        <div className="coin d-flex">
        <img src={coins} className='coinimage' alt="coin Icon" />
        1920</div>
      </div>
      <div className="participant-row">
        <div className="rank">#7
        <img src={janeicon} className='janeimage' style={{marginLeft:'6px', width:'28px',height:'28px'}} alt="unknown image" />
        </div>
        <div className="name-email">
        <span className='name' style={{ display:'block'}}>Jane Doe</span>
        <span className='email' style={{ display:'block'}}>pr******@***</span>
        </div>
        <div className="theme">Marvel</div>
        <div className="coin d-flex">
        <img src={coins} className='coinimage' alt="coin Icon" />
        1815</div>
      </div>
    </div>
  );
}

export default Leaderboard;
