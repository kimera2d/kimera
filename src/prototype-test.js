class Person {
  /**
   * @param {string} name
   * @param {number} age
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

/**
 * 인사를 출력하는 메서드
 */
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

/** @type {Person} */
const person1 = new Person("Alice", 25);

/** @type {Person} */
const person2 = new Person("Bob", 30);

person1.greet(); // "Hello, my name is Alice and I am 25 years old."
person2.greet(); // "Hello, my name is Bob and I am 30 years old."
