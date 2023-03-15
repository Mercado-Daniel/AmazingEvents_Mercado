import data from "./amazing.js";
import {createCards , showCards, createCheckBoxes,createrEvery} from "./functions.js";

let cards = createCards(data.events);
showCards(cards);

createCheckBoxes(data.events,createrEvery(data.events) );

