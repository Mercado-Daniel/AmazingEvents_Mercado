import data from "./amazing.js";
import {convertDate, compareDate, cardIndividual} from "./functions.js";
let current = convertDate(data.currentDate);
let eventDate;

const articleElement = document.getElementById('cards');//cards sera es el id del div donde se ubicara el contenido dinamico
let card = '';
for(let i = 0; i < data.events.length; i++){
    eventDate = convertDate(data.events[i].date);
    if(compareDate(current, eventDate)){
    card += cardIndividual(data.events[i]);
    }      
}
articleElement.innerHTML = card;//card sera pegado en el html
