import React from 'react'
import Component from './componenet/mountingComponnet/Component'
import { Routes, Route } from 'react-router-dom'
import MyWork from './pages/MyWork'
// import NavBar from './componenet/NavBar'






function App() {
  return (
<>
 {/* <NavBar/> */}


   <Routes>
      
  
      <Route path="/" element={<Component />} />
      <Route path="/MyWork" element={<MyWork />} />
      {/* <Route path="/Projects" element={<Projects  />} /> */}
    </Routes>
   

</>
  
  
  )
}

export default App