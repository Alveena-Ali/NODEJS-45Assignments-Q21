// Que 21: Object: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing
// these items.

// Data Type of Person Object
interface Person {
    name: string,
    age: number,
    nationality: string,
    isStudent: boolean,
};

// person Object
let person: Person = {
    name: "Alveena",
    age: 19,
    nationality: "Pakistani",
    isStudent: true,
};

// Print person
console.log(person); 

// Data Type of Car Object
interface Car {
    maker: string,
    color: string,
    model: number,
    isAutomatic: boolean,
};

// car Object
let car = {
    maker: "Toyota",
    color: "Black",
    model: 2024,
    isAutomatic: true,
};

// Print car
console.log(car);