// Existing class
class Track {
  //track prop
  //...

  //track logic
  logic_1() {
    console.log('Track logic');
  }
  //...
}

// New classes
class Train {
  //Train prop
  //...
  logic_1() {
    console.log('Train logic');
  }
  //Train logic
  //...
}

class Ship {
  //Train prop
  //...
  logic_1() {
    console.log('Ship logic');
  }
  //Train logic
  //...
}

// Creating Abstract Factory
class TransportFactory {
  addTrack() {
    return new Track();
  }

  addTrain() {
    return new Train();
  }

  addShip() {
    return new Ship();
  }
}

const transportFactory = new TransportFactory();

const track = transportFactory.addTrack();
const train = transportFactory.addTrain();
const ship = transportFactory.addShip();

console.log(track.logic_1());
console.log(train.logic_1());
console.log(ship.logic_1());