import React from "react";
import Home from "./pages/Home"
import Nav from "./components/Nav";
import {Route,Routes} from 'react-router-dom'




function App() {
 
  return (
    <div className="App"> 
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
