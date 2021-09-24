// array length
let exampleArray = [1, 2, 3, 4, 5];
console.log(exampleArray.length);
console.log(exampleArray[exampleArray.length - 1]);


// changing value of an array
exampleArray[2] = "test";
console.log(exampleArray);


// concating / merging multiple arrays
let array1 = ["apple", "mango"];
let array2 = ["orange", "banana"];
console.log([...array1, ...array2]);


// concating / merging multiple objects | (Spread method)
let object1 = {
    name: "John",
    age: 30,
};

let object2 = {
    address: "Kathmandu",
    college: "NITK",
};

// console.log({ ...object1, ...object2 });
let object3 = { ...object1, ...object2 };

// console.log(object1.name);
// console.log(object1.age);

// let { name, age, address, college }


// push
let pushExample = ['apple', 'mango', 'orange'];
pushExample.push('banana');
console.log("🚀 ~ file: array_method.js ~ line 40 ~ pushExample", pushExample);

// pop
let popExample = ['apple', 'mango', 'orange'];
popExample.pop();
console.log("🚀 ~ file: array_method.js ~ line 45 ~ popExample", popExample);

// shift
let shiftExample = ['apple', 'mango', 'orange', 'banana'];
shiftExample.shift();
// console.log(shiftExample);
console.log("🚀 ~ file: array_method.js ~ line 50 ~ shiftExample", shiftExample);


// unshift
let unshiftExample = ['apple', 'mango', 'orange', 'banana'];
shiftExample.unshift("avocado");
// console.log(unshiftExample);
console.log("🚀 ~ file: array_method.js ~ line 57 ~ unshiftExample", unshiftExample);


// splice
let spliceExample = ['apple', 'mango', 'orange'];
spliceExample.splice(1, 0, 'avocado', 'pears');
// console.log("spliceExample:", spliceExample);
console.log("🚀 ~ file: array_method.js ~ line 64 ~ spliceExample", spliceExample);


// slice
let sliceExample = ['apple', 'mango', 'orange', 'banana'];
let newSliceArray = sliceExample.slice(1, 3);
// console.log("slice Example:", newSliceArray);
console.log("🚀 ~ file: array_method.js ~ line 71 ~ SliceExample", newSliceArray);


// delete
let deleteExample = ['apple', 'mango', 'orange', 'banana'];
delete deleteExample[0];
console.log("🚀 ~ file: array_method.js ~ line 78 ~ deleteExample", deleteExample);


/*========================== forEach Loop Example ==============================*/

const loopFunction = (value, index) => {
    console.log("Key: ", index);
    console.log("value: ", value);
}

// sliceExample.forEach(loopFunction);

// sliceExample.forEach((value, index) => {
//     console.log("Key: ", index);
//     console.log("value: ", value);
// })

/*=====================================================*/

// Map example

// let fruits = ['apple', 'banana', 'mango', 'avocado']

let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.map((value, index) => {
    return value * 2;
});

console.log("🚀 ~file: array_method.js ~line 101 ~numbers", numbers);
console.log("🚀 ~file: array_method.js ~line 103 ~numbers", newNumbers);


// filter example
let agesArray = [15, 20, 30];

let aboveTwenty = agesArray.filter((age) => {
    return age > 20;
});

console.log("🚀 ~ file: array_method.js ~ line 113 ~ agesArray", agesArray);
console.log("🚀 ~ file: array_method.js ~ line 116 ~ aboveTwenty ~ aboveTwenty",
    aboveTwenty);

let person = {
    name: "john",
    age: 30,
    address: "kathmandu",
}

delete person.address;
console.log("🚀 ~ file: array_method.js ~ line 129 ~ person", person);


// iterators
let countryArray = ["Nepal", "India", "china", "Japan"];

for (let country of countryArray) {
    console.log("file: array_method.js ~ line 136 ~ country", country);
}

let objectExample = {
    name: "John",
    age: 30,
    address: "kathmandu",
}

for (let obj in objectExample) {
    console.log("🚀 ~ file: array_method.js ~ line 146 ~ obj", objectExample[obj]);
}

// console.log(object.keys(objectExample));
// console.log(object.values(objectExample));
