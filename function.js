function exampleFunction(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(exampleFunction("sabin", "shrestha"));

/*================== Arrow Function =======================*/

const arrowFunction = () => "Hello World";
console.log(arrowFunction());

const getFullNames = (firstName, lastName) => firstName.toUpperCase() + " " + lastName.toUpperCase();
console.log(getFullNames('Aayush', 'Shrestha'));

/*=========================================================*/

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    address: "Kathmandu",
    getObject: function () {
        return this;
    },
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },
    getAge: function () {
        return this.age;
    },
};

console.log(person.getFullName());
console.log(person.getAge());
console.log(person.getObject());


/*==================== Practice =======================*/

function printOut(content) {
    console.log(content);
}

// printOut("Hello");

const arrowPrintOut = (content) => {
    console.log(content);
}

// arrowPrintOut("Hi Brother");

let car = {
    name: "Toyota",
    model: "M10",
    price: 3000,
    getNameInUppercase: function () {
        return this.name.toUpperCase();
    },
    getTotalPriceWithVat: function () {
        return (13 / 100 * this.price) + this.price;
    },
    getNameInLowercase: () => {
        console.log('content');
    }

}

// console.log(car);
// console.log(car.getNameInUppercase());
// console.log(car.getTotalPriceWithVat());
// car.getNameInLowercase();

/*====================================================*/


