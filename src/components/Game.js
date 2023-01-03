import React from "react";

 

//Redux

import { useDispatch } from "react-redux";
import {loadDetail} from "../actions/detailAction"
import { Link } from "react-router-dom";

const Games=({name,released,image,id})=>{
    //load Detail

    const dispatch = useDispatch();
    const loadDetailHandler =(e)=>{
        dispatch(loadDetail(id));
    }



    return(
        <div onClick={loadDetailHandler}  className="cursor-pointer shadow-2xl shadow-gray-400 text-center rounded-md overflow-hidden">
            <Link to={`/game/${id}`}>
            <h3 className="italic text-black pt-3 text-lg">{name}</h3>
            <p className="pt-3 text-sm">{released}</p>
            <img src={image} alt={name} className=" object-cover h-full"/>
            </Link>
        </div>
    )
}

export default Games