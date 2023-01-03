import React from "react";
import Home from "./pages/Home"
import {Route,Routes} from 'react-router-dom'



function App() {
 
  return (
    <div className="App">
      <h1 className='text-5xl italic text-blue-500 font-bold underline text-center'></h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
