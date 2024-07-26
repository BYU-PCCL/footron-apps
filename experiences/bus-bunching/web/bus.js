export default class Bus {
  constructor(id) {
    this.id = "bus" + id;
    this.passengers = [];
    this.passengersGettingOff = [];
    this.position = 0;
    this.destination;
    this.nextBus;
    this.drivingTarget = this.destination;
    this.MAX_FILL = 10;
    this.model;
    this.velocity = 0;
    this.MAX_VELOCITY = 0.2;
    this.ACCELERATION = 0.06;
    this.timeLoading = 0;
    this.TIME_PER_PASSENGER = 0.25;
    this.atStop = false;
    this.infoDiv = null;
    this.addInfoDiv();
    this.logInfo = false;
    this.backHalf;
  }

  update(time) {
    if (this.atStop) {
      this.load(time);
    } else {
      this.driveToNext(time);
    }
    if (this.position > 1) {
      this.position %= 1;
    }
  }

  load(time) {
    // Check if we should move on
    if (
      this.passengersGettingOff.length == 0 &&
      (this.passengers.length >= this.MAX_FILL ||
        this.destination.passengers.length == 0)
    ) {
      this.atStop = false;
      this.destination = this.destination.next;
      if (this.logInfo) {
        console.log(
          this.passengers.length + " next stop: " + this.destination.symbol
        );
      }
      return;
    }
    this.timeLoading += time;
    if (this.timeLoading >= this.TIME_PER_PASSENGER) {
      // unload
      if (this.passengersGettingOff.length > 0) {
        let passenger = this.passengersGettingOff.shift();
        this.dropOff(passenger);
      } else {
        let newPassenger = this.destination.pickUpPassenger();
        if (newPassenger != null) this.pickUp(newPassenger);
      }
      this.timeLoading = 0;
    }
  }

  driveToNext(time) {
    let STOP_DISTANCE = this.velocity ** 2 / (this.ACCELERATION * 2);
    this.position %= 1;
    let target = this.drivingTarget == 0 ? 1 : this.drivingTarget;
    if (target < this.position + STOP_DISTANCE) {
      this.velocity -= this.ACCELERATION * time;
    } else if (this.velocity < this.MAX_VELOCITY) {
      this.velocity += this.ACCELERATION * time;
    }

    if (this.velocity > this.MAX_VELOCITY) {
      this.velocity = this.MAX_VELOCITY;
    } else if (this.velocity < 0) {
      this.velocity = 0;
    }
    if (Math.abs(this.destination.position - this.position) < 0.001) {
      if (this.logInfo) console.log("stopping at: " + this.destination.symbol);
      this.position = this.destination.position;
      this.velocity = 0;
      this.atStop = true;
      this.prepUnload();
      this.load(time);
    } else {
      this.position += this.velocity * time;
    }
  }

  prepUnload() {
    let staying = this.passengers.filter(
      (p) => p.destination != this.destination
    );
    this.passengersGettingOff = this.passengers.filter(
      (p) => p.destination == this.destination
    );
    this.passengers = staying;
    if (this.logInfo) {
      let getOff = "Getting off: ";
      for (let i = 0; i < this.passengersGettingOff.length; i++) {
        getOff += this.passengersGettingOff[i].destination.symbol;
      }
      console.log(getOff);
    }
  }

  addInfoDiv() {
    let passengers = document.createElement("div");
    passengers.className = "passengersWrapper";
    this.waitingPassengersDiv = passengers;

    let infoDiv = document.createElement("div");
    infoDiv.className = "busInfo";

    infoDiv.id = this.id;
    infoDiv.appendChild(passengers);

    document.querySelector("body").appendChild(infoDiv);
    this.infoDiv = passengers;
  }

  pickUp(newPassenger) {
    if (this.logInfo) {
      console.log(
        "Picking up: " +
          newPassenger.destination.symbol +
          "\tOccupancy: " +
          this.passengers.length
      );
    }
    this.passengers.push(newPassenger);
    this.infoDiv.appendChild(newPassenger.div);
  }

  dropOff(passenger) {
    if (this.logInfo) {
      console.log(
        "Dropping off: " +
          passenger.destination.symbol +
          "\tOccupancy: " +
          this.passengers.length
      );
    }
    passenger = this.infoDiv.querySelector("." + passenger.riderClass).remove();
  }
}
