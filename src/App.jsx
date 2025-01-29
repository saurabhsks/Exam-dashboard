import React, { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import LibraryCard from './components/librarycard';
import HostedSessionCard from './components/hostedsessioncard';
import MCQSection from './components/mcqsection';
import Leaderboard from './components/leaderboard';
import './styles/app.css';

const libraryData = [
  {
    title: "Energy Transfer",
    difficulty: "Easy",
    questions: 20,
    time: "60s",
    createdBy: "Rahul",
    genre: "Tech",
    createdOn: "07/08/2024 | 1:05 PM"
  },
  {
    title: "Machine Learning",
    difficulty: "Medium",
    questions: 25,
    time: "90s",
    createdBy: "Aditi",
    genre: "AI",
    createdOn: "06/08/2024 | 3:30 PM"
  },
  {
    title: "Blockchain",
    difficulty: "Hard",
    questions: 15,
    time: "45s",
    createdBy: "Vikash",
    genre: "Finance",
    createdOn: "05/08/2024 | 12:10 PM"
  },
  {
    title: "Web Development",
    difficulty: "Easy",
    questions: 30,
    time: "120s",
    createdBy: "Neha",
    genre: "Programming",
    createdOn: "04/08/2024 | 10:20"
  }
];

const hostedSessionsData = [
  {
    title: "Cybersecurity",
    sessionName: "Morning",
    difficulty: "Easy",
    questions: 20,
    duration: "30 min",
    genre: "Security",
    scheduledOn: "07/08/2024 | 2:00 "
  },
  {
    title: "Data Science",
    sessionName: "Evening",
    difficulty: "Hard",
    questions: 60,
    duration: "45 min",
    genre: "Data Science",
    scheduledOn: "06/08/2024 | 5:00 "
  },
  {
    title: "Cloud Computing",
    sessionName: "Latenight",
    difficulty: "Moderate",
    duration: "40 min",
    genre: "Cloud",
    scheduledOn: "08/08/2024 | 11:00 "
  },
  {
    title: "AI & Ethics",
    sessionName: "Afternoon",
    difficulty: "Easy",
    questions: 70,
    duration: "25 min",
    genre: "AI",
    scheduledOn: "07/08/2024 | 4:30 "
  }
];


function App() {
  const [activeLeftTab, setActiveLeftTab] = useState('my-library');
  const [activeRightTab, setActiveRightTab] = useState('mcq');
  const [leftWidth, setLeftWidth] = useState(50); // Initial width percentage of left section

  const handleLeftTabClick = (tab) => {
    setActiveLeftTab(tab);
  };

  const handleRightTabClick = (tab) => {
    setActiveRightTab(tab);
  };

  const handleDrag = (e) => {
    const newLeftWidth = (e.clientX / window.innerWidth) * 100;
    if (newLeftWidth >= 20 && newLeftWidth <= 80) { // Prevent too small or too large sections
      setLeftWidth(newLeftWidth);
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="dashboard-container">
          <Sidebar />
          <div
            className="left-section"
            style={{ width: `${leftWidth}%` }}
          >
            <div className="tabs">
              <button
                className={`tab ${activeLeftTab === 'my-library' ? 'active' : ''}`}
                onClick={() => handleLeftTabClick('my-library')}
              >
                My Library
              </button>
              <button
                className={`tab ${activeLeftTab === 'hosted-sessions' ? 'active' : ''}`}
                onClick={() => handleLeftTabClick('hosted-sessions')}
              >
                Hosted Sessions
              </button>
            </div>
            <div className={`content ${activeLeftTab === 'my-library' ? '' : 'hidden'}`}>
            {libraryData.map((item, index) => (
                <LibraryCard 
                  key={index}
                  title={item.title}
                  difficulty={item.difficulty}
                  questions={item.questions}
                  time={item.time}
                  createdBy={item.createdBy}
                  genre={item.genre}
                  createdOn={item.createdOn}
                />
              ))}
            </div>
            <div className={`content ${activeLeftTab === 'hosted-sessions' ? '' : 'hidden'}`}>
              <div className="search-bar">
                <select className="genre-select">
                  <option>ALL GENRES</option>
                </select>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search your hosted games by titles or name..."
                />
              </div>
              <div className="hosted-dflex">
              {hostedSessionsData.reduce((rows, item, index) => {
                if (index % 2 === 0) {
                    rows.push([item]);
                } else {
               rows[rows.length - 1].push(item);
                 }
                return rows;
                 }, []).map((row, rowIndex) => (
                  <div key={rowIndex} className="hosted-session-row">
                    {row.map((item, index) => (
                      <HostedSessionCard 
                       key={index}
                       title={item.title}
                       sessionName={item.sessionName}
                       difficulty={item.difficulty}
                       questions={item.questions}
                       duration={item.duration}
                       genre={item.genre}
                       scheduledOn={item.scheduledOn}
                       />
                       ))}
                       </div>
  ))
}
</div>

            </div>
          </div>

          <div
            className="divider"
            onMouseDown={(e) => {
              document.addEventListener('mousemove', handleDrag);
              document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', handleDrag);
              });
            }}
          >
            <span className="drag-arrow d-none d-md-block">&lt;&gt;</span>
          </div>

          <div
            className="right-section"
            style={{ width: `${100 - leftWidth}%` }}
          >
            <div className="tabs">
              <button
                className={`tab ${activeRightTab === 'mcq' ? 'active' : ''}`}
                onClick={() => handleRightTabClick('mcq')}
              >
                MCQ's
              </button>
              <button
                className={`tab ${activeRightTab === 'leaderboard' ? 'active' : ''}`}
                onClick={() => handleRightTabClick('leaderboard')}
              >
                Leaderboard
              </button>
            </div>
            <div className={`content ${activeRightTab === 'mcq' ? '' : 'hidden'}`}>
              <MCQSection />
            </div>
            <div className={`content ${activeRightTab === 'leaderboard' ? '' : 'hidden'}`}>
              <Leaderboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



