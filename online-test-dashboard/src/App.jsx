
// // import { useState } from 'react'
// import React from 'react';
// import Header from './components/header';
// import Sidebar from './components/sidebar';
// import LibraryCard from './components/librarycard';
// import HostedSessionCard from './components/hostedsessioncard';
// import './styles/app.css';
// // import LeftSection from './components/LeftSection';
// // import RightSection from './components/RightSection';

// function App() {
//   return (
//     <>
//       <div>
//         <Header />
//         {/* <Sidebar/> */}
//     <div className="dashboard-container">
//     <Sidebar/>
//      <div className="left-section">
//     <div className="tabs">
//       <button className="tab active" data-tab="my-library">My Library</button>
//       <button className="tab" data-tab="hosted-sessions">Hosted Sessions</button>
//     </div>
//     <div className="content my-library-content">
//     <LibraryCard/>
//     <LibraryCard/>
//     <LibraryCard/>
//     <LibraryCard/>
//     </div>
//     <div className="content hosted-sessions-content hidden">
//     <div>
//     <HostedSessionCard/>
//     <HostedSessionCard/>
//     </div>
//     <div>
//     <HostedSessionCard/>
//     <HostedSessionCard/>
//     </div>
//     </div>
//   </div>
 
//   <div className="right-section">
//     <div className="tabs">
//       <button className="tab active" data-tab="mcq">MCQ's</button>
//       <button className="tab" data-tab="leaderboard">Leaderboard</button>
//     </div>
//     <div className="content mcq-content">
     
//     </div>
//     <div className="content leaderboard-content hidden">
     
//     </div>
//   </div>
// </div>

//       </div>
//     </>
//   );
// }

// export default App;







import React, { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import LibraryCard from './components/librarycard';
import HostedSessionCard from './components/hostedsessioncard';
import './styles/app.css';

function App() {
  const [activeLeftTab, setActiveLeftTab] = useState('my-library');
  const [activeRightTab, setActiveRightTab] = useState('mcq');

  const handleLeftTabClick = (tab) => {
    setActiveLeftTab(tab);
  };

  const handleRightTabClick = (tab) => {
    setActiveRightTab(tab);
  };

  return (
    <>
      <div>
        <Header />
        <div className="dashboard-container">
          <Sidebar />
          <div className="left-section">
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
              <LibraryCard />
              <LibraryCard />
              <LibraryCard />
              <LibraryCard />
            </div>
            <div className={`content hosted-dflex ${activeLeftTab === 'hosted-sessions' ? '' : 'hidden'}`}>
              <div>
                <HostedSessionCard />
                <HostedSessionCard />
              </div>
              <div>
                <HostedSessionCard />
                <HostedSessionCard />
              </div>
            </div>
          </div>

          <div className="right-section">
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
              {/* MCQ content goes here */}
            </div>
            <div className={`content ${activeRightTab === 'leaderboard' ? '' : 'hidden'}`}>
              {/* Leaderboard content goes here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

