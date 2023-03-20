import data from "./amazing.js";
import {createCards, showCards,futureEvent, createCheckBoxes, generateListener} from "./functions.js";

let currentDate = data.currentDate
let contentCheck = document.getElementById('cater');
let input = document.querySelector('input');

let futureCards = futureEvent(data.events, currentDate);
let cards = createCards(futureCards);
showCards(cards);



generateListener(futureCards, contentCheck, input);
createCheckBoxes(futureCards,contentCheck);