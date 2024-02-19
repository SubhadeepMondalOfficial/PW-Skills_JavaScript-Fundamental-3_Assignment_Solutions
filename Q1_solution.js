// Q1. Create an object representing a car with properties like "make," "model", and "year". Write a function to display all the properties of the car.

let car = {
    make: 'Toyota',
    model: 'GR-S',
    year: 2018
};

function displayCarProperties(car){
    for(const property in car){
        console.log(`${property}: ${car[property]}`);
    }
}

displayCarProperties(car)