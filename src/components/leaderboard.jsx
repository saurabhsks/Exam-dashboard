import React from 'react';
import '../styles/leaderboard.css';
import leaderboardicon from '../assets/images/leaderboard.png';
import janeicon from '../assets/images/janeimage.png';
import coins from '../assets/images/coins.png';
import unknown from '../assets/images/unknown.png';

// Sample leaderboard data (Only text data is dynamic)
const leaderboardData = [
  { rank: 1, name: "Rahul Sharma", email: "rahul.sharma@example.com", theme: "Games", coins: 3820 },
  { rank: 2, name: "Aditi Verma", email: "aditi.v@example.com", theme: "Marvel", coins: 3425 },
  { rank: 3, name: "Vikash Mehta", email: "vikash.m@example.com", theme: "Anime", coins: 3100 },
  { rank: 4, name: "Neha Kapoor", email: "neha.k@example.com", theme: "Marvel", coins: 2950 },
  { rank: 5, name: "Suresh Patil", email: "suresh.p@example.com", theme: "Harry Potter", coins: 2780 },
  { rank: 6, name: "Priya Das", email: "priya.d@example.com", theme: "Oscar Movie", coins: 2635 },
  { rank: 7, name: "Aman Joshi", email: "aman.j@example.com", theme: "Marvel", coins: 2490 }
];

function Leaderboard() {
  return (
    <div className="leaderboard-section">
      {/* Leaderboard Header */}
      <div className="leaderboard-header">
        <img src={leaderboardicon} className='leaderboardicon' alt="Leaderboard Icon" />
      </div>

      {/* Top 3 Players */}
      <div className="top-three">
        <div className="top-card second">
          <div className="medal medal-second"></div>
          <div className="ranking">#{leaderboardData[1].rank}</div>
          <img src={janeicon} className='janeicon2' alt="Player Icon" />
          <div className="name">{leaderboardData[1].name}</div>
          <div className="email">{leaderboardData[1].email}</div>
          <div className='d-flex-lower' style={{ marginTop: '21px' }}>
            <div className="themes">{leaderboardData[1].theme}</div>
            <div className="coins d-flex">
              <img src={coins} className='coinimage' alt="Coin Icon" /> {leaderboardData[1].coins}
            </div>
          </div>
        </div>

        <div className="top-card first">
          <div className="medal medal-first"></div>
          <div className="ranking">#{leaderboardData[0].rank}</div>
          <img src={janeicon} className='janeicon1' alt="Player Icon" />
          <div className="name">{leaderboardData[0].name}</div>
          <div className="email">{leaderboardData[0].email}</div>
          <div className='d-flex-lower' style={{ marginTop: '44px' }}>
            <div className="themes">{leaderboardData[0].theme}</div>
            <div className="coins d-flex">
              <img src={coins} className='coinimage' alt="Coin Icon" /> {leaderboardData[0].coins}
            </div>
          </div>
        </div>

        <div className="top-card third">
          <div className="medal medal-third"></div>
          <div className="ranking">#{leaderboardData[2].rank}</div>
          <img src={janeicon} className='janeicon3' alt="Player Icon" />
          <div className="name">{leaderboardData[2].name}</div>
          <div className="email">{leaderboardData[2].email}</div>
          <div className='d-flex-lower'>
            <div className="themes">{leaderboardData[2].theme}</div>
            <div className="coins d-flex">
              <img src={coins} className='coinimage' alt="Coin Icon" /> {leaderboardData[2].coins}
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Table Header */}
      <div className="participant-roww">
        <div className="rank"></div>
        <div className="name-email">
          <span className='name' style={{ display: 'block' }}></span>
          <span className='email' style={{ display: 'block' }}></span>
        </div>
        <div className="themee">Theme</div>
        <div className="coinss d-flex">Coins</div>
      </div>

      {/* Remaining Participants */}
      {leaderboardData.slice(3).map((player) => (
        <div key={player.rank} className="participant-row">
          <div className="rank">#{player.rank}
            <img src={janeicon} className='unknownimage' style={{ marginLeft: '6px', width: '28px', height: '28px' }} alt="Unknown Icon" />
          </div>
          <div className="name-email">
            <span className='name' style={{ display: 'block' }}>{player.name}</span>
            <span className='email' style={{ display: 'block' }}>{player.email}</span>
          </div>
          <div className="theme">{player.theme}</div>
          <div className="coin d-flex">
            <img src={coins} className='coinimage' alt="Coin Icon" /> {player.coins}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
