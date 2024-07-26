import Rider from "./rider";

export default class BusStop {
  constructor(id, symbol, color) {
    this.id = "stop" + id;
    this.passengers = [];
    this.nextStops = [];
    this.model;
    this.timeSinceLastPassenger = 0;
    this.TIME_PER_PASSENGER = 6;
    this.nextStopState = id;
    this.infoAddedToPage = false;
    this.waitingPassengersDiv = null;
    this.symbol = symbol;
    this.color = color;

    this.infoDiv = null;
    this.addInfoDiv();
  }
  update(time) {
    this.timeSinceLastPassenger += time;
    if (this.timeSinceLastPassenger >= this.TIME_PER_PASSENGER) {
      this.timeSinceLastPassenger = 0;
      this.addRider();
    }
  }
  addRider() {
      this.nextStopState++;
      this.nextStopState %= this.nextStops.length;
    let passenger = new Rider(this.nextStops[this.nextStopState]);
    this.passengers.push(passenger);
    document
      .querySelector('#' + this.id)
      .querySelector(".passengersWrapper")
      .appendChild(passenger.div);
  }
  pickUpPassenger() {
    if (this.passengers.length <= 0) return null;
    let waitingDiv = document
      .querySelector('#' + this.id)
      .querySelector(".passengersWrapper");
    if (waitingDiv.querySelector(".passenger")) waitingDiv.querySelector(".passenger").remove();
    let leaving = this.passengers.shift();
    return leaving;
  }

  addInfoDiv() {
    let title = document.createElement("div");
    title.className = "infoTitle";
    title.textContent = this.symbol;
    title.style.color = this.color;

    let passengers = document.createElement("div");
    passengers.className = "passengersWrapper";
    this.waitingPassengersDiv = passengers;

    let infoDiv = document.createElement("div");
    infoDiv.className = "info";

    infoDiv.id = this.id;
    infoDiv.appendChild(title);
    infoDiv.appendChild(passengers);

    document.querySelector("body").appendChild(infoDiv);
    this.infoDiv = passengers;
  }
}
