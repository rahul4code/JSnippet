const prototypeCar = {
  brand: "Unknown",
  model: "Unknown",
  getDetails() {
    return `${this.brand} ${this.model}`;
  },
  clone() {
    return Object.create(this);
  },
};

const car1 = prototypeCar.clone();
car1.brand = "Toyota";
car1.model = "Corolla";

console.log(car1.getDetails());
