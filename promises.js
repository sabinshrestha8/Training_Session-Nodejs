// /*================== Promise some example Practice ==================*/

// const { request } = require("http");

const request = require('request');

// // Promise example 1
// const getHelloWorldPromise = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Hello World");
//         // resolve(true);
//         reject("There was some error!");
//     });

//     // return Promise.resolve(["direct", "resolve"]);
//     // return Promise.reject("This function failed");
// };

// // console.log(getHelloWorldPromise());
// getHelloWorldPromise()
//     .then((result) => {
//         console.log("Success:", result);
//         return "Hello IIMS";
//     })
//     .then((result) => {
//         console.log("Next Promise:", result);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     })
//     .finally(() => {
//         console.log("Request Completed");
//     });


// // Promise Example 2 
// const getUserList = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve([
//             //     "Ram",
//             //     "Shyam"
//             // ]);
//             reject("There was some error fetching students data")
//         }, 5000);
//     });
// };

// getUserList()
//     .then((students) => {
//         console.log("Success:", students);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     })
//     .finally(() => {
//         console.log("Request Completed");  //Argument is always empty in finally method
//     });


// // Promise.all
// const promise1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 1");
//         }, 4000);
//     });
// }

// const promise2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 2");
//         }, 2000);
//     });
//     // promise1().then //1s
//     // promise2().then //2s
//     // //3s
// }

// /* Promise all */
// // Promise.all([promise2(), promise1()])
// //     .then((result) => {
// //         console.log("Promise all", result)
// //     })
// //     .catch((error) => {
// //         console.log("Error:", error);
// //     });

// // const getHelloWorld = () => "Hello World";
// // console.log(([getHelloWorld()]));


// // Promise.race
// const yahooWeatherAPI = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 kathnamdu: 20,
//             });
//             // reject("Error in yahoo api");
//         }, 1000);
//     });
// }

// const googleWeatherAPI = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 kathnamdu: 19,
//             });
//         }, 2000);
//     });
// }


// Promise.race([yahooWeatherAPI(), googleWeatherAPI()])
//     .then((result) => {
//         console.log("Weather result:", result)
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// let example = { 
//     "message": "https:\/\/images.dog.ceo\/breeds\/spaniel-sussex\/n02102480_4640.jpg", 
//     "status": "success" 
// }




// // real case scenario example of promise using [request]
// const getDogApiV1 = () => {
//     return new Promise((resolve, reject) => {
//         request("https://dog.ceo/api/breeds/image/random", (error, response, body) => {
//             if (error) {
//                 reject(error);
//             }
//             resolve(body);

//             // console.log("error:", error);
//             // // console.log("response:", response);
//             // console.log("body:", body);
//         });
//     });
// };


// getDogApiV1()
//     .then((result) => {
//         console.log("Dog api v1:", result);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });



// Race Example with using 3rd party api
const getDogApiV1 = () => {
    return new Promise((resolve, reject) => {
        request("https://dog.ceo/api/breeds/image/random", (error, response, body) => {
            if (error) {
                reject(error);
            }
            resolve({
                "version": "v1",
                "data": body,
            });
        });
    });
};

const getDogApiV2 = () => {
    return new Promise((resolve, reject) => {
        request("https://dog.ceo/api/breeds/image/random", (error, response, body) => {
            if (error) {
                reject(error);
            }
            resolve({
                "version": "v2",
                "data": body,
            });
        });
    });
};

Promise.race([getDogApiV1(), getDogApiV2()])
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
