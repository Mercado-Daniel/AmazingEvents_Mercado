import data from "./amazing.js";
import {createCards, filterDate, showCards, convertDate, createCheckBoxes, gets} from "./functions.js";

let current = convertDate(data.currentDate);
let pastCards = filterDate(current, data, "past");
let cards = createCards(pastCards);
showCards(cards);

createCheckBoxes(pastCards,gets(pastCards));