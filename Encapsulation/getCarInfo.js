class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  getCarInfo() {
    return `The car is ${this.brand} from ${this.year} and the model is ${this.model}.`;
  }
}
console.log(new Car("Volkswagen", "Golf", 1995).getCarInfo());
