
import {createCards, showCards,futureEvent, createCheckBoxes, generateListener} from "./functions.js";

let contentCheck = document.getElementById('cater');
let input = document.querySelector('input');

async function create(){
    await fetch("/assets/js/data.json")
        .then(response => response.json())
        .then(data =>{
            let currentDate = data.currentDate;
            let futureCards = futureEvent(data.events, currentDate);
            let cards = createCards(futureCards);
            showCards(cards);
            generateListener(futureCards, contentCheck, input);
            createCheckBoxes(futureCards,contentCheck);
    });//usar ruta absoluta para evitar error 404 al ubicar el json
}
create();

