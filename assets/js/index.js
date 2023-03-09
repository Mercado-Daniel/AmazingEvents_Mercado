import data from "./amazing.js";
import {cardIndividual} from "./functions.js";

const articleElement = document.getElementById('cards');//cards sera es el id del div donde se ubicara el contenido dinamico

let card = '';
data.events.forEach(ev3nt =>{
    card += cardIndividual(ev3nt);
});
articleElement.innerHTML = card;//card sera pegado en el html

