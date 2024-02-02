//Christina - CSS
// Swathi - GetMood
// Lincoln - GetMoods
// Joshua - Main stuff

import { getMoods } from "./database.js"

export const getMoodsHTML = () =>
{
    const moods = getMoods()

    let returnHTML = `<div class="moodsContainer">`
    for (const mood of moods) {
        returnHTML += getMoodHTML(mood)
    }
    returnHTML += `</div>`

    return returnHTML
}

/*
getMoodsHTML
    -let returnHTML
    -const moods
    -for loop for each mood
        -calls getMoodHTML passing mood
        -adds return of getMoodHTML to returnHTML
    return returnHTML
    
*/

/*

getMoodHTML, taking mood
    -let returnHTML
    -add open div
    -add all the html in a mood using properties of passed mood
    -close div
    -return returnHTML

*/
const getMoodHTML=(mood)=>{
    let moodHTML=`<div class="cell">`
    moodHTML+=`<div class="moodName">${mood.name}</div>
                <img class="moodImg" src="${mood.imageUrl}"></img>
                <div class="margin"></div>
                <div class="moodDesc">
                    <span class="machoAdvice">Macho Advice:</span> 
                    <div class="moodQuotes"><p class="quote">${mood.quotes[0]}</p><p class="quote">${mood.quotes[1]}</p></div>
                </div>            
            </div>`        
    return moodHTML;
}