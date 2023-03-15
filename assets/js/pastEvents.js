import data from "./amazing.js";
import {createCards, filterDate, showCards, convertDate, createCheckBoxes, createrEvery} from "./functions.js";

let current = convertDate(data.currentDate);
let pastCards = filterDate(current, data, "past");
let cards = createCards(pastCards);
showCards(cards);

createCheckBoxes(pastCards,createrEvery(pastCards));