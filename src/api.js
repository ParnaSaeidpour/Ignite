




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
//const nextYear =`${currentYear+1}-${currentMonth}-${currentDay}`

// Popular Games
const popular_games =`&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL =()=>`${base_url}${popular_games}`

