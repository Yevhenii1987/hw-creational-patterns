const carbon = (function(){
  const atomic_number = 6;
  const atomic_mass = 12.011;
  const symbol = 'C';

  const getSymbol = () => symbol;
  const getAtomicNumber = () => atomic_number;
  const getAtomicMass = () => atomic_mass;

  return {
    getSymbol,
    getAtomicNumber,
    getAtomicMass
  }
}());

console.log(carbon.getSymbol()); // 'C'
console.log(carbon.symbol); // undefined
console.log(carbon.getAtomicNumber()); // 6
console.log(carbon.atomic_number); // undefined
console.log(carbon.getAtomicMass()); // 12.011
console.log(carbon.atomic_mass); // undefined