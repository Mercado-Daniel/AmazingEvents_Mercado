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
            <img src="${events.image}" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">${events.name}</h5>
                <p class="card-text">${events.description}</p>
                <div class="price-btn">
                    <a href="./details.html" class="btn">Details</a>
                    <p>price: $${events.price}</p>
                </div>
            </div>
        </div>
    </article>`;
}

let createCards = (events) => {//recibe un objeto events
    let cards = [];
    events.forEach(event => {
        cards.push(cardIndividual(event));
    });
    return cards;
}

let showCards = (cardsFilters) => {//recibe un arry de strings
    const articleElement = document.getElementById('cards');
    articleElement.innerHTML = cardsFilters.join('');// join ('')hace que los distintos string del array se comporten como un solo string
}

const filterCategory = (cat, data) => {//recibe la categoria en formato string y el objeto data
    return data.events.filter(events => events.category === cat);
}

const filterDate = (current, data, time) => {//recibe la currentdate como objeto de ints, el objeto data y la indicacion de tiempo en un string pasr o future
    if(time == "past"){
        return data.events.filter(events => compareDate(convertDate(events.date), current) === true);
    }
    if(time == "future"){
        return data.events.filter(events => compareDate(current, convertDate(events.date)) === true);
    }
    
}

export {createCards, filterCategory, showCards, compareDate, convertDate, filterDate};