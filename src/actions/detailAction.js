import axios from "axios";
import { gameDetailsURL, gameScreenShotURL } from "../api";

export const loadDetail =(id)=> async(dispatch)=>{
    try{

        const detailData = await axios.get(gameDetailsURL(id))
        const screenShotData = await axios.get(gameScreenShotURL(id))

        dispatch({
            type:"GET_DETAIL",
            payload:{
                game: detailData?.data,
                screen: screenShotData?.data,

            }
        })





    }catch (error) {
        console.error('Load detail has enconter an error: ',error.message)

    }
}