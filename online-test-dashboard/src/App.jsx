// import { useState } from 'react'
import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';


function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header />
      <main>
       <Sidebar />
      
      </main>
    </div>
      
    </>
  )
}

export default App






// // import { useState } from 'react'
// import React from 'react';
// import Header from './components/header';
// import Sidebar from './components/sidebar';
// // import LeftSection from './components/LeftSection';
// // import RightSection from './components/RightSection';

// function App() {
//   return (
//     <>
//       <div>
//         <Header />
//         <Sidebar/>
//     <div className="dashboard-container">
//      <div className="left-section">
//     <div className="tabs">
//       <button className="tab active" data-tab="my-library">My Library</button>
//       <button className="tab" data-tab="hosted-sessions">Hosted Sessions</button>
//     </div>
//     <div className="content my-library-content">
//     </div>
//     <div className="content hosted-sessions-content hidden">
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
