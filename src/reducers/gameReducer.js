

const initState ={
    popular:[],
    newGames:[],
    upcoming:[],
    searched:[],
}

const gamesReducer =(state=initState, action) =>{
    switch(action.type){
        case "FETCH_GAMES":
            return {...state,
                 popular:action.payLoad.popular,
                 upcoming:action.payLoad.upcoming,
                 newGames:action.payLoad.newGames,
                
                
                }
        default:
            return {...state}

    }
}
export default gamesReducer