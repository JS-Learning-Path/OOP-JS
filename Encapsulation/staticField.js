class Dog {
  static dogCount = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    Dog.dogCount++;
  }
}
const dog1 = new Dog("Rex", 2);
const dog2 = new Dog("Max", 3);
console.log(Dog.dogCount);
