import data from "./amazing.js";
import {createCards , showCards, createCheckBoxes,gets} from "./functions.js";

let cards = createCards(data.events);
showCards(cards);

createCheckBoxes(data.events,gets(data.events) );

