import data from "./amazing.js";
import {cardIndividual} from "./functions.js";

const articleElement = document.getElementById('cards');//cards sera es el id del div donde se ubicara el contenido dinamico
let card = '';
for(let i = 0; i < data.events.length; i++){
    card += cardIndividual(data.events[i]);
}
articleElement.innerHTML = card;//card sera pegado en el html

