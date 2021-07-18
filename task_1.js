class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  clone() {
    return {
      name: this.name,
      age: this.age,
    }
  }
}

const p1 = new Person('John', 25);
const p2 = p1.clone();

console.log(p1);
console.log(p2);