

// API Key

const Token="1ffa8ea614d649bc942025bd5ac29a24"


// Base URL

const base_url= "https://api.rawg.io/api/games?key=1ffa8ea614d649bc942025bd5ac29a24"


// Getting the date

const getcurMonth=()=>{
    const today= new Date()
    curMonth=today.getMonth() +1
    if(curMonth<10){
        return `0${curMonth}`;
    }else{
        return curMonth
    }
};

const getcurDay=()=>{
    const today= new Date()
    curDay=today.getDate()
    if(curDay<10){
        return `0${curDay}`;
    }else{
        return curDay
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

export const popularGamesURL =()=>`${base_url}${popular_games}`

