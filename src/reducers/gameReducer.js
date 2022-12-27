

const initState ={
    popular:[],
    newGames:[],
    upcoming:[],
    searched:[],
}

const gamesReducer =(state=initState, action) =>{
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, popular:action.payLoad.popular}
        default:
            return {...state}

    }
}
export default gamesReducer