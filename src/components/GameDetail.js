import React from "react";


//Redux

import { useSelector } from "react-redux";
import {useNavigate} from  'react-router-dom'

const GameDetail=()=>{
    
    const navigate=useNavigate()

    //Exit Detail

    const exitDetailHandler=(e)=>{
        const element =e.target
        if(element.classList.contains("drop-shadow-md")){
            navigate('/')
        }
    }
    //Data

    const {game, screen,isLoading} =useSelector(state => state.detail)
    return(
        <>
        {!isLoading &&(
        <div onClick={exitDetailHandler} className=" drop-shadow-md shadow-inner fixed overflow-y-scroll w-full min-h-full top-0 left-0 overflow-hidden ">
            <div className="bg-white  max-w-7xl rounded-2xl left-5 absolute pl-20 pr-20 " >
                <div className="flex items-center justify-between">
                    <div className="">
                        <h3 className="font-medium">{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <div className="items-center">
                        <h3 className="font-medium">Platforms</h3>
                        <div className="flex justify-evenly ml-12">
                            {game.platforms?.map(data=>(
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-20 object-cover">
                    <img src={game.background_image} alt={game.background_image}/>
                </div>
                <div className="mt-20 mb-10">
                    <p>{game.description_raw}</p>
                </div>
                <div className="gallery">
                    {screen.results?.map(screen=>(
                        <img src={screen.image} key={screen.id} alt={screen.image}/>
                    ))}
                  
                </div>
            </div>
                
        </div>
        )}
        </>

    )

}

export default GameDetail