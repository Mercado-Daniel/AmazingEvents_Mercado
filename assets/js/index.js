import data from "./amazing.js";
import {createCards , filterCategory, showCards} from "./functions.js";

let cards = createCards(data.events);
showCards(cards);