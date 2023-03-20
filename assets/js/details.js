import data from "./amazing.js";

const eventContainer = document.getElementById ('eventDetails');

const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const ev3nt = data.events.find(even => even._id == id);
function paintDetails(ev3nt, eventContainer){
    let card = [];
    card = `
    <div class="card text-bg-dark ">
        <img src="${ev3nt.image}" class="card-img h-100 object-fit-cover" alt="...">
        <div class="card-img-overlay coming-back ">
            <h5 class="card-title">${ev3nt.name}</h5>
            <p class="card-text">${ev3nt.description}</p>
            <p class="card-text">date: ${ev3nt.date}</p>
            <p class="card-text">category: ${ev3nt.category}</p>
            <p class="card-text">place: ${ev3nt.place}</p>
            <p class="card-text">capacity: ${ev3nt.capacity}</p>
            <p class="card-text">estimate/atendace: ${ev3nt.estimate ? ev3nt.estimate:ev3nt.assistance}</p>
            <p class="card-text">price: $${ev3nt.price}</p>
            <div class="d-flex justify-content-end align-items-end">
            <input type="button" onclick="history.back()" name="Back" value="Back" class="btn ">
        </div>
        </div>`;
    eventContainer.innerHTML = card;
}
paintDetails(ev3nt, eventContainer);