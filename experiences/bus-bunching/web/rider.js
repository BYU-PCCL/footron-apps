export default class Rider {
    constructor(destination) {
        this.div = document.createElement("div");
        this.riderClass = destination.id + "Rider";
        this.div.classList.add("passenger");
        this.div.classList.add(this.riderClass);
        this.div.textContent = destination.symbol;
        this.div.style.color = destination.color;
        this.destination = destination;
    }
}