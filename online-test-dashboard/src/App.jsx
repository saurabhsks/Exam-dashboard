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
