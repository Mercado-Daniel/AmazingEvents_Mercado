import data from "./amazing.js";
import {createCards, showCards, pastEvent, createCheckBoxes, generateListener} from "./functions.js";
let currentDate = data.currentDate
let contentCheck = document.getElementById('cater');
let input = document.querySelector('input');

let pastCards = pastEvent(data.events, currentDate);
let cards = createCards(pastCards);
showCards(cards);



generateListener(pastCards, contentCheck, input);
createCheckBoxes(pastCards,contentCheck);