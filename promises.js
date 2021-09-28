// // const getHelloWorldPromise = () => {
// //     return new Promise((resolve, reject) => {
// //         resolve("Hello World");
// //         reject("There was some error!");
// //     });
// // };

// // // console.log(getHelloWorldPromise());
// // (getHelloWorldPromise()).then((result) => {
// //     console.log("success: ", result);
// // })
// //     .catch((error) => {
// //         console.log("Error: ", error);
// //     });


// const getHelloWorldPromise = (throwError) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!throwError) {
//                 resolve("Hello World");
//             } else {
//                 reject("Error");
//             }
//         }, 1000);
//         reject("There was some error!");
//     });
//     // return Promise.resolve(["direct", "resolve"])
//     // return Promise.reject(["This function failed"])
// };

// getHelloWorldPromise(true)
//     .then((helloworld) => {
//         console.log("success: ", helloworld);
//         return true;
//     })
//     .then((result) => {
//         console.log("Next Promise: ", result);
//     })
//     .catch((error) => {
//         console.log("Error: ", error);
//     })
//     .finally(() => {
//         console.log("This request is completed");
//     })

// /*===================== Example Promise ======================*/

// // const getUserList = () => {
// //     return new Promise((resolve, reject) => {
// //         // reject("There was some error fetching students data");
// //         setTimeout(() => {
// //             resolve([
// //                 "Sabin",
// //                 "Aayush"
// //             ]);
// //         }, 5000);
// //     });
// // };

// // (getUserList()).then((students) => {
// //     console.log("success: ", students);
// // })
// //     .catch((error) => console.log(error)) // single line catch callback
// //     .finally(() => {
// //         console.log("Request completed");
// //     });

// /*===================== End Example Promise ======================*/


/*================== Promise some example Practice ==================*/

// Promise example 1
const getHelloWorldPromise = () => {
    return new Promise((resolve, reject) => {
        resolve("Hello World");
        // resolve(true);
        reject("There was some error!");
    });

    // return Promise.resolve(["direct", "resolve"]);
    // return Promise.reject("This function failed");
};

// console.log(getHelloWorldPromise());
getHelloWorldPromise()
    .then((result) => {
        console.log("Success:", result);
        return "Hello IIMS";
    })
    .then((result) => {
        console.log("Next Promise:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Request Completed");
    });


// Promise Example 2 
const getUserList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve([
            //     "Ram",
            //     "Shyam"
            // ]);
            reject("There was some error fetching students data")
        }, 5000);
    });
};

getUserList()
    .then((students) => {
        console.log("Success:", students);
    })
    .catch((err) => {
        console.log("Error:", err);
    })
    .finally(() => {
        console.log("Request Completed");  //Argument is always empty in finally method
    });