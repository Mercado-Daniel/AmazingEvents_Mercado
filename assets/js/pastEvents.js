
import {createCards, showCards, pastEvent, createCheckBoxes, generateListener} from "./functions.js";

let contentCheck = document.getElementById('cater');
let input = document.querySelector('input');

async function create(){
    await fetch("/assets/js/data.json")
        .then(response => response.json())
        .then(data =>{
            let currentDate = data.currentDate;
            let pastCards = pastEvent(data.events, currentDate);
            let cards = createCards(pastCards);
            showCards(cards);
            generateListener(pastCards, contentCheck, input);
            createCheckBoxes(pastCards,contentCheck);
    });//usar ruta absoluta para evitar error 404 al ubicar el json
}
create();

