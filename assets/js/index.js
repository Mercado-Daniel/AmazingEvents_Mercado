import {createCards , showCards, createCheckBoxes,generateListener} from "./functions.js";

let contentCheck = document.getElementById('cater');
let input = document.querySelector('input');

async function create(){
    await fetch("/assets/js/data.json")
        .then(response => response.json())
        .then(data =>{
            let cards = createCards(data.events);
            showCards(cards);
            generateListener(data.events, contentCheck, input);
            createCheckBoxes(data.events,contentCheck);
    });//usar ruta absoluta para evitar error 404 al ubicar el json
}
create();



