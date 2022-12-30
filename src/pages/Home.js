import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

//components

import Games from "../components/Game";



const Home=()=>{

    //FETCH GAMES
    const dispatch= useDispatch()
    useEffect(()=>{
      dispatch(loadGames())
    },[dispatch]);

// Get that data back
    const {popular,newGames,upcoming}=useSelector((state)=> state.games);
    


    return(
        <div className="pt-0 pb-0 pl-20 pr-20">
            <h2 className="xl:font-mono font-bold text-4xl pt-20 pb-20 pl-0 pr-0 my_text_red">Upcoming Games</h2>
                <div className="grid gap-x-10 gap-y-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
                    {upcoming.map(game=>(
                        <Games 
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                        />

                    ))}

                </div>

                <h2 className="xl:font-mono font-bold text-4xl pt-20 pb-20 pl-0 pr-0">Popular Games</h2>
                <div className="grid gap-x-10 gap-y-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {popular.map(game=>(
                        <Games 
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                        />

                    ))}

                </div>

                <h2 className="xl:font-mono font-bold text-4xl pt-20 pb-20 pl-0 pr-0">New Games</h2>
                <div className="grid gap-x-10 gap-y-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {newGames.map(game=>(
                        <Games 
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                        />

                    ))}

                </div>
        </div>
    )


}

export default Home