import axios from "axios";
import { gameDetailsURL } from "../api";

const loadDetail =(id)=> async(dispatch)=>{
    try{

        const detailData = await axios.get(gameDetailsURL(id))

        dispatch({
            type:"GET_DETAIL",
            payLoad:{
                game: detailData?.data

            }
        })





    }catch (error) {
        console.error('Load detail has enconter an error: ',error.message)

    }
}