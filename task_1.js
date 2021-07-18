class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  clone() {
    const clonedPerson = {
      name: this.name,
      age: this.age,
    }
    clonedPerson.clone = this.clone.bind(this)
    return clonedPerson
  }
}

const p1 = new Person('John', 25);
const p2 = p1.clone();
const p3 = p2.clone();

console.log(p1);
console.log(p2);
console.log(p3);

p2.name = 'Alex'

console.log(p1);
console.log(p2);
console.log(p3);