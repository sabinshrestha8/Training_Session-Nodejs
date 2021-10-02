const request = require("request");

// Promise Method chaining
const getApiOne = () => {
    return new Promise((resolve, reject) => {
        request("https://reqres.in/api/users", (error, response, body) => {
            if (!error) {
                // console.log(body);
                resolve(body);
            }
            reject(error);
        });
    });
};

const getApiTwo = (body) => {
    return new Promise((resolve, reject) => {
        if (!body) {
            reject("no body found");
        }
        const bodyObj = JSON.parse(body);
        // console.log(body.data);
        resolve(bodyObj.data)
    });
};

getApiOne()
    .then((result) => {
        return getApiTwo(result);
    })
    .then((data) => {
        // console.log(data);
        data.forEach(userData => {
            console.log(userData);
        });
    })
    .catch((err) => {
        console.log("Error:", err);
    })



// // Promise.all example
// const promiseOne = () => {
//     return new Promise((resolve, reject) => {
//         request("https://reqres.in/api/users", (error, response, body) => {
//             if (error) {
//                 reject(error);
//             }
//             resolve({
//                 "version": "v1",
//                 "data": body,
//             });
//         })
//     });
// };

// const promiseTwo = () => {
//     return new Promise((resolve, reject) => {
//         request("https://reqres.in/api/users", (error, response, body) => {
//             if (error) {
//                 reject(error);
//             }
//             resolve({
//                 "version": "v2",
//                 "data": body,
//             });
//         })
//     });
// };

// Promise.all([promiseOne(), promiseTwo()])
//     .then((result) => {
//         console.log("Promise all Result:", result);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     });



// // Promise.race example
// const dataOne = () => {
//     return new Promise((resolve, reject) => {
//         request("https://reqres.in/api/users", (error, response, body) => {
//             if (error) {
//                 reject(error);
//             }
//             resolve({
//                 "version": "v1",
//                 "data": body,
//             });
//         })
//     });
// };

// const dataTwo = () => {
//     return new Promise((resolve, reject) => {
//         request("https://reqres.in/api/users", (error, response, body) => {
//             if (error) {
//                 reject(error);
//             }
//             resolve({
//                 "version": "v2",
//                 "data": body,
//             });
//         })
//     });
// };

// Promise.race([dataOne(), dataTwo()])
//     .then((result) => {
//         console.log("Promise Race Result:", result);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     });