import {getMoodsHTMl} from './moods.js'

const moodsHtml = getMoodsHTML()
const container = document.getElementById('container')
container.innerHTML = moodsHtml