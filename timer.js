// setTimeOut

const printHelloWorld = () => {
    console.log("Hello World, this is example of setTimeout");
};

let counter = 0;
const printHelloWorldInterval = () => {
    counter++;
    console.log("counter: ", counter);
    // console.log("Hello World, this is example of setTimeout");
};

// setTimeout(printHelloWorld, 5000);
// setInterval(printHelloWorldInterval, 5000);