
function pastEvent(array, currentDate){
    return array.filter(item => item.date < currentDate);
}
function futureEvent(array, currentDate){
    return array.filter(item => item.date > currentDate);
}
const cardIndividual = (events) => {//recibe un objeto events y devuelve una card en formato string
    return`
    <article class="col-lg-4 col-md-6">
        <div class="card">
            <img src="${events.image}" class="card-img-top object-fit-cover" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">${events.name}</h5>
                <p class="card-text">${events.description}</p>
                <div class="price-btn">
                    <a href="./details.html?id=${events._id}" class="btn">Details</a>
                    <p>price: $${events.price}</p>
                </div>
            </div>
        </div>
    </article>`;
}

let createCards = (events) => {//recibe un objeto events
    let cards = "";
    events.forEach(event => {
        cards += cardIndividual(event);//junto todas las cartas
    });
    return cards;
}

let showCards = (cardsFilters) => {//recibe un arry de strings
    const articleElement = document.getElementById('cards');
    articleElement.innerHTML = cardsFilters;
}

function doubleFilter(data, input){
    let firstFilter = data.filter(ev3nt => ev3nt.name.toLowerCase().includes(input.value.toLowerCase()));
    let secondFilter = filterForCategory(firstFilter);
    if(secondFilter.length > 0){
        let cards = createCards(secondFilter);
        showCards(cards);
    }else{
        const no = document.getElementById('cards');
        no.innerHTML = `
        <article class="col-lg-4 col-md-6">
            <h2>It was not found ${input.value}</h2>
        </article>
        `;
    }
}

function createCheckBoxes(array, contenedorCheck){
    let arrayCategorys = array.map(ev3nt => ev3nt.category);
    let setCategory = new Set(arrayCategorys);
    let checkboxes = '';
    setCategory.forEach(category => {
        checkboxes += `<div class="form-check">
        <input type="checkbox" id="${category}" value="${category}">
        <label  for="${category}">${category}</label>
        </div>`
    });
    contenedorCheck.innerHTML = checkboxes;
}


function filterForCategory(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let arrayChecks = Array
        .from(checkboxes)
        .filter(check => check.checked)
        .map(checkChecked => checkChecked.value);
    let arrayFilter = array.filter(element => arrayChecks.includes(element.category));
    if(arrayChecks.length > 0){
        return arrayFilter;
    }
    return array;
}

function generateListener(events, contentCheck, input){//genera los eventos indicandole el evento a cumplir
    input.addEventListener('input', function() {
        doubleFilter(events, input);
    });
    contentCheck.addEventListener('change',function() {
        doubleFilter(events, input);
    });
}


export {createCards, showCards,pastEvent,futureEvent, createCheckBoxes, generateListener};