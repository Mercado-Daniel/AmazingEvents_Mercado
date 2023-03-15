import data from "./amazing.js";
import {createCards, filterDate, showCards, convertDate, createCheckBoxes, gets} from "./functions.js";

let current = convertDate(data.currentDate);
let futureCards = filterDate(current, data, "future");
let cards = createCards(futureCards);
showCards(cards);

createCheckBoxes(futureCards,gets(futureCards) );