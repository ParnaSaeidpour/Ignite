import React from "react";


//Redux

import { useSelector } from "react-redux";
import {useNavigate} from  'react-router-dom'
import { smallImage } from "../util";

//IMAGES

import playstation from "../img/playstation.svg"
import steam from "../img/steam.svg"
import xbox from "../img/xbox.svg"
import nintendo from "../img/nintendo.svg"
import apple from '../img/apple.svg'
import gamepad from "../img/gamepad.svg"

const GameDetail=()=>{
    
    const navigate=useNavigate()

    //Exit Detail

    const exitDetailHandler=(e)=>{
        const element =e.target
        if(element.classList.contains("drop-shadow-md")){
            navigate('/')
        }
    }

    // Get Platform Images 
    const getPlatform =(platform)=>{
        switch(platform){
            case "playstation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam
            case "Nintrndo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad
    }}
    //Data

    const {game, screen,isLoading} =useSelector(state => state.detail)
    return(
        <>
        {!isLoading &&(
        <div onClick={exitDetailHandler} className=" drop-shadow-md shadow-inner fixed overflow-y-scroll w-full min-h-full top-0 left-0 overflow-hidden ">
            <div className="bg-white  max-w-7xl rounded-2xl left-5 absolute pl-20 pr-20 cursor-pointer" >
                <div className="flex items-center justify-between">
                    <div className="">
                        <h3 className="font-medium">{game.name}</h3>
                        <p>
                        <div className="flex items-center">
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                            Rating: {game.rating}
                        </p>
                    </div>
                    <div className="items-center">
                        <h3 className="font-medium ml-20">Platforms</h3>
                        <div className="flex justify-between space-x-5 ">
                            {game.platforms?.map(data=>(
                                <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name}></img>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-20 object-cover">
                    <img src={smallImage(game.background_image,1280)} alt={game.background_image}/>
                </div>
                <div className="mt-20 mb-10">
                    <p>{game.description_raw}</p>
                </div>
                <div className="gallery">
                    {screen.results?.map(screen=>(
                        <img src={smallImage(screen.image,1280)} key={screen.id} alt={screen.image}/>
                    ))}
                  
                </div>
            </div>
                
        </div>
        )}
        </>

    )

}

export default GameDetail