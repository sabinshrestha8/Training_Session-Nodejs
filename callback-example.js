const makeStringUpperCase = (string) => {
    return string.toUpperCase();
};

const makeStringLowerCase = (string) => {
    return string.toLowerCase();
};

// console.log(makeStringLowerCase('HELLO')); //'Hello'

const padString = (string) => {
    return string.padStart(20, "0");
}

const passUserInput = (input, callback) => {
    input = "Hello " + input;
    return callback(input);
}

console.log(passUserInput("IIMs", makeStringLowerCase));
console.log(passUserInput("iims", makeStringUpperCase));
console.log(passUserInput("iims", padString));



/*====================== Callback Example =======================*/
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const callbackExample = (a, b, mathCallback) => {
    console.log(mathCallback(a, b));
}

// callbackExample(2, 2, add);
// callbackExample(2, 2, multiply);
// callbackExample(2, 2, subtract);

/*====================================================================*/





