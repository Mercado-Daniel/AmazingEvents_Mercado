import data from "./amazing.js";
import {createCards, filterDate, showCards, convertDate} from "./functions.js";

let current = convertDate(data.currentDate);
let futureCards = filterDate(current, data, "future");
let cards = createCards(futureCards);
showCards(cards);
