




// Base URL

const base_url= "https://api.rawg.io/api/games?key=1ffa8ea614d649bc942025bd5ac29a24"


// Getting the date

const getcurMonth=()=>{
    const month= new Date().getMonth() +1
    if(month<10){
        return `0${month}`;
    }else{
        return month
    }
};

const getcurDay=()=>{
    const day= new Date().getDate()
    if(day<10){
        return `0${day}`;
    }else{
        return day
    }
};

//current day/month/year

const currentYear = new Date().getFullYear()
const currentMonth = getcurMonth()
const currentDay = getcurDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear =`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear =`${currentYear+1}-${currentMonth}-${currentDay}`

// Popular Games
const popular_games =`&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games= `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames_games= `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL =()=>`${base_url}${popular_games}`;
export const upcomingGamesURL=()=> `${base_url}${upcoming_games}`;
export const newGamesURL=()=> `${base_url}${newGames_games}`


//GAME DETAILS

export const gameDetailsURL =(game_id)=> `${base_url}games/${game_id}`