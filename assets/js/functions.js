const convertDate = (date) => {
    return {
    year: parseInt(date.substring(0,4)),
    month:parseInt(date.substring(5,7)),
    day:parseInt(date.substring(8,10))
    };
}

const compareDate = (date1, date2) =>{
    if(date1.year == date2.year){
        if(date1.month == date2.month){
            if(date1.day == date2.day){
                return true;
            }
            if(date1.day > date2.day){
                return true;
            }
        }
        if(date1.month > date2.month){
            return true;
        }
        return false;
    }
    if(date1.year > date2.year){
        return true;
    }
    return false;
}

const cardIndividual = (events) => {//recibe un objeto events
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
        cards += cardIndividual(event);
        //cards.push(cardIndividual(event));
    });
    return cards;
}

let showCards = (cardsFilters) => {//recibe un arry de strings
    const articleElement = document.getElementById('cards');
    articleElement.innerHTML = cardsFilters;// join ('')hace que los distintos string del array se comporten como un solo string
}

const filterDate = (current, data, time) => {//recibe la currentdate como objeto de ints, el objeto data y la indicacion de tiempo en un string pasr o future
    if(time == "future"){
        return data.events.filter(events => compareDate(convertDate(events.date), current) === true);
    }
    if(time == "past"){
        return data.events.filter(events => compareDate(current, convertDate(events.date)) === true);
    }
    
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

function gets(events){
    const contentCheck = document.getElementById('cater');
    const input = document.querySelector('input');
    input.addEventListener('input', function() {
        doubleFilter(events, input);
    });
    contentCheck.addEventListener('change',function() {
        doubleFilter(events, input);
    });
    return contentCheck;
}


export {createCards, showCards, compareDate, convertDate, filterDate, createCheckBoxes, gets};