class Car {
    constructor(brand) {
        this.car_brand = brand;
    };
    display() {
        console.log(this.car_brand);
    };
};


class Brand extends Car {
    constructor(brand, model) {
        super(brand);
        this.car_model = model;
    };
    display() {
        console.log(this.car_brand);
        console.log(this.car_model);
    };
};

const myNewCar = new Brand("Ford", "Model123");
myNewCar.display();