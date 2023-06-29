class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
    car_name() {
        return this.name;
    }
    model() {
        return this.year;
    }
  }
  
  const myCar = new Car("Ford", 2014);
  console.log(myCar.car_name())