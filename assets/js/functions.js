const convertDate = (date) =>{
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


const cardIndividual = (events) => {
    return`
    <article class="col-lg-4 col-md-6">
        <div class="card">
            <img src="${events.image}" class="card-img-top" alt="...">
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

let createCards = (data, aggregate) =>{//me permite crear cartas segun lo indicado 
    const articleElement = document.getElementById('cards');//cards sera es el id del div donde se ubicara el contenido dinamico
    let card = '';
        if(aggregate == "all"){//crea todas las cards disponibles
            data.events.forEach(ev3nt =>{
                card += cardIndividual(ev3nt);
            });
        }else{
            let current = convertDate(data.currentDate);
            let eventDate;
            data.events.forEach(ev3nt =>{
                eventDate = convertDate(ev3nt.date);
                if(aggregate == "past"  && compareDate(eventDate ,current)){//crea las cards que realizaran en una fecha anterior a la actual
                    card += cardIndividual(ev3nt);
                }
                if(aggregate == "future" && compareDate(current, eventDate)){//crea las cards que realizaran en una fecha posterior a la actual
                    card += cardIndividual(ev3nt);
                }
            });
        }
    articleElement.innerHTML =  card;//pega las cards creads en el html
    }

export {createCards};