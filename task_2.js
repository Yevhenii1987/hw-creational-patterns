class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  clone() {
    return Object.create(this);
  }
}

const p1 = new Person('John', 20);
const p2 = p1.clone();
const p3 = p2.clone();

console.log(p1);
console.log(p2.name);
console.log(p3.name);

p2.name = 'Alex'

console.log(p1);
console.log(p2.name);
console.log(p3.name);