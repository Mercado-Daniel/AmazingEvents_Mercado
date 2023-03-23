import { pastEvent, futureEvent} from "./functions.js";

const staticTable = document.getElementById('events-stats');
const upcomingTable = document.getElementById('upcoming-stats');
const pastTable = document.getElementById('past-stats');


async function create(){
    await fetch("/assets/js/data.json")
        .then(response => response.json())
        .then(data => {
            let currentDate = data.currentDate;
            percentage(data.events);
            stats(data.events);
            let futureve = futureEvent(data.events, currentDate);
            categoryStats(futureve, upcomingTable);
            let pasteve = pastEvent(data.events, currentDate);
            categoryStats(pasteve, pastTable);
            drawStats(stats(data.events), staticTable );
        });
        
}
create();

function stats(events){
    let tableArray = [];
    tableArray.push(maxPercentange(events));
    tableArray.push(minPercentange(events));
    tableArray.push(capacityMax(events));
    return tableArray;
}

function categoryStats (events, table) {
    let gan = 0;
    let cat = []; 
    cat = categoryName(events); 
    let por = 0;
    for(let i in cat) {
        let tableArray = [];
        gan = revenuesCategory(events, cat[i]);
        por = percentangeCategoryAtendance(events, cat[i]);
        tableArray.push(cat[i]);
        tableArray.push(gan);
        tableArray.push(por); 
        drawStats(tableArray,table);
    }

}

function capacityMax(events) {
    let maxCapacity = events.sort((a, b) => b.capacity - a.capacity)[0].name;
    return maxCapacity;
}

function percentage(events){//le asigna porcentage a los objetos events
    events.forEach(ev3nt => {
        ev3nt.percentange = ev3nt.assistance? (ev3nt.assistance / ev3nt.capacity)*100 : (ev3nt.estimate / ev3nt.capacity)*100;//dependiendo si es un upcoming event o un pastevent hara el calculo correspondiente del porcentaje
    });
}

function maxPercentange(events){
    let maxPercent = events.sort((a, b) => b.percentange - a.percentange)[0].name;//ordena de mayor a menor los porcentages de asistencia o estimacion y devuelve el primer elemento
    return maxPercent;
}

function minPercentange(events){
    let minPercent = events.sort((a, b) => a.percentange - b.percentange)[0].name;//ordena de menor a mayor de asistencia o estimacion y devuelve el primer elemento
    return minPercent;
}

function categoryName(events){
    let arrayCategorys = events.map(ev3nt => ev3nt.category);
    let setCategory = new Set(arrayCategorys);
    let arrayCategoryFilter = Array.from(setCategory.values());
    return arrayCategoryFilter;
}

function revenuesCategory(events, category) {
    let categoryXEvent = events
        .filter(ev3nt => ev3nt.category === category);
    let ganancias = 0;
    categoryXEvent.forEach(ev3nt =>{
        ganancias += ev3nt.estimate ? (ev3nt.estimate * ev3nt.price) : (ev3nt.assistance * ev3nt.price);
    });
    return "$" + ganancias;
}

function percentangeCategoryAtendance(events, category){
    let categoryXEvent = events
        .filter(ev3nt => ev3nt.category === category);
    let sum = 0;
    let sumCapacity = 0;
    categoryXEvent.forEach(ev3nt => {
        sum += ev3nt.estimate ? ev3nt.estimate : ev3nt.assistance;
        sumCapacity += ev3nt.capacity;
    });
    let percentage = ((sum / sumCapacity)*100).toFixed(2);
    return percentage + "%";
}
function drawStats(data, container){//dibuja una fila en el container con los elementos de un array
    let tr = document.createElement("tr");//creo la fila
    for (let i in data){
        let td = document.createElement("td");//creo las columnas
        td.innerText = data[i];//guardo el contenido de la posicion del array en la columna
        tr.appendChild(td);//le asigno la columna a la fila
    }
    container.appendChild(tr);//asigno la fila al cuerpo de la tabla
}
