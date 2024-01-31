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