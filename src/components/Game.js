import React from "react";
import {motion} from "framer-motion"

const Game=({name,released,image})=>{
    return(
        <div className="shadow-2xl shadow-gray-400 text-center rounded-md overflow-hidden">
            <h3 className="italic text-black pt-3 text-lg">{name}</h3>
            <p className="pt-3 text-sm">{released}</p>
            <img src={image} alt={name} className=" object-cover h-full"/>
        </div>
    )
}

export default Game