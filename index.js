
// Join two strings and get its length
let firstLetter = "Hello";
let secondLetter = "world";
let thirdLetter = firstLetter + secondLetter;
// console.log(firstLetter + secondLetter);
// console.log("Length of third letter is: ", thirdLetter.length);

// slice start index, end index
let example = "I am from Kathmandu";
// console.log(example.slice(-9, example.length));

// replace word to string
let firstWord = "Hello";
let lastWord = "World";
let replaceWord = "IIMS";
let concatWord = firstWord.concat(lastWord);
// console.log(concatWord.replace("World", replaceWord));

// change to lower case
let example2 = "HELLO WORLD";
// console.log("to lower case:", example2.toLowerCase());

// change to upper case
let example3 = "hello world";
// console.log("to upper case:", example3.toUpperCase());

// trim a string and get length
let example4 = "   Hello World   ";
// console.log("Length of example4:", example4.length);
example4 = example4.trim();
// console.log("Trimmed value:", example4);
// console.log("Trimmed value:", example4.length);

// change to String
let example5 = 12345;
// console.log("First: ", typeof example5);
example5 = example5.toString();
// console.log("Last: ", typeof example5);

// get substr
let str = "I am from Kathmandu";
let result = str.substr(0, 10);
// console.log(result);

// slice start index, end index
let ex = "I am from Kathmandu";
// console.log(ex.slice(0, 10));

// get index of
let checkIndexOf = "Hello World!";
// console.log(checkIndexOf.indexOf("World"));

// includes
let checkIncludes = "Hello World!";
// console.log("check if checkIncludes include World:", checkIncludes.includes("World"));
// console.log("check if checkIncludes include iims:", checkIncludes.includes("iims"));

// check char at
let checkCharAt = "I am from Kathmandu";
// console.log(checkCharAt.length);
// console.log("checkCharAt:", checkCharAt.charAt(2));

// replaceAll --works from node version 16--
let newWord = "hello world world";
// console.log(newWord.replaceAll("world", "iims"));

// pad a string example
let padStartExample = "Hello";
console.log(padStartExample.padStart(12, "IIMS"));
console.log(padStartExample.padStart(9, "IIMS"));


let padEndExample = "Hello";
console.log(padStartExample.padEnd(9, "IIMS"));
