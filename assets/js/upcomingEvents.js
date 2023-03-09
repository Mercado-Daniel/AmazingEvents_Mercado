import data from "./amazing.js";
import {convertDate, compareDate, cardIndividual} from "./functions.js";
let current = convertDate(data.currentDate);
let eventDate;

const articleElement = document.getElementById('cards');//cards sera es el id del div donde se ubicara el contenido dinamico
let card = '';
data.events.forEach(ev3nt =>{
    eventDate = convertDate(ev3nt.date);
    if(compareDate(current, eventDate)){
    card += cardIndividual(ev3nt);
    }
});
articleElement.innerHTML = card;//card sera pegado en el html
