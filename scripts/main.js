import {getMoodsHTML} from './moods.js'

const moodsHtml = getMoodsHTML()
const container = document.getElementById('grid')
container.innerHTML = moodsHtml