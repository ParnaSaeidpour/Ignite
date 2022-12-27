import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";


function App() {
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(loadGames())
  })
  return (
    <div>
      <h1 className='text-5xl italic text-blue-500 font-bold underline text-center'>Hi</h1>

    </div>
  );
}

export default App;
