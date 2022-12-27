import axios from "axios";

import {popularGamesURL} from '../api'


//Action Creator

export const loadGames =()=> async(dispatch)=>{
    try {
        
        const popularData= await axios.get(popularGamesURL());
        dispatch({
            type: "FETCH_GAMES",
            payLoad:{
                popular:popularData?.data?.results
            }
        })
    } catch (error) {
        console.error('Load games has enconter an error: ',error.message)
    }
        
    
}