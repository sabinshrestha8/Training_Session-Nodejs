// If-elseif
const age = 25;
if (age <= 20) {
    console.log("You are in teen age");
} else if (age > 20 && age <= 29) {
    console.log("You are in your twenty's");
} else {
    console.log("you are old");
}


// Switch Case
let day = "thursday";

switch (day) {
    case "sunday":
        console.log('Today is sunday');
        break;
    case "monday":
        console.log('Today is monday');
        break;
    case "tuesday":
        console.log('Today is tuesday');
        break;
    case "wednesday":
        console.log('Today is wednesday');
        break;
    default:
        console.log('Today is Holiday');
        break;
}


// While Loop
let counter = 0;
while (counter <= 10) {
    console.log("🚀 ~ file: conditional.js ~ line 28 ~ counter", counter);
    counter++;
}


// Do While Loop
do {
    let text = "";
    text += "The number is " + counter;
    console.log("🚀 ~ file: conditional.js ~ line 28 ~ text", text);
    counter++;
} while (counter < 10);


// For Loop with break and continue
for (let i = 10; 1 >= 1; i--) {
    if (i === 6) {
        break;
    }
    if (i === 9) {
        continue;
    }
    console.log("Value of i is: ", i);
}