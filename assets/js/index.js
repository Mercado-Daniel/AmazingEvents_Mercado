import data from "./amazing.js";
import {createCards , showCards, createCheckBoxes,generateListener} from "./functions.js";

let contentCheck = document.getElementById('cater');
let input = document.querySelector('input');

let cards = createCards(data.events);
showCards(cards);
generateListener(data.events, contentCheck, input);
createCheckBoxes(data.events,contentCheck);

