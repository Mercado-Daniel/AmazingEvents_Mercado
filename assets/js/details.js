import data from "./amazing.js";

const eventContainer = document.getElementById ('eventDetails');

const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const ev3nt = data.events.find(even => even._id == id);

let card = [];
card = `
<div class="card text-bg-dark">
    <img src="${ev3nt.image}" class="card-img h-100 object-fit-cover" alt="...">
    <div class="card-img-overlay">
        <h5 class="card-title">${ev3nt.name}</h5>
        <p class="card-text">${ev3nt.description}</p>
        <p class="card-text">date: ${ev3nt.date}</p>
        <p class="card-text">category: ${ev3nt.category}</p>
        <p class="card-text">place: ${ev3nt.place}</p>
        <p class="card-text">capacity: ${ev3nt.capacity}</p>
    
`;
if(ev3nt.assistance === undefined){
    card +=`<p class="card-text">estimate: ${ev3nt.estimate}</p>
    <p class="card-text">price: $${ev3nt.price}</p>
    </div>
</div>`
}else{
    card +=`<p class="card-text">assistance: ${ev3nt.assistance}</p>
    <p class="card-text">price: $${ev3nt.price}</p>
    </div>
</div>`
}
eventContainer.innerHTML = card;