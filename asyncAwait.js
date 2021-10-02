/*================ Async await ===================*/

const users = [{
    id: 1,
    name: 'John',
},
{
    id: 2,
    name: 'Sara',
},
{
    id: 3,
    name: 'Bob',
}];

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        // find user by find method
        const result = users.find((user, index) => {
            return user.id === id;
        });
        // if (!result) {
        //     reject("User cannot be empty");
        // }
        // console.log(result);
        resolve(result);
    });
};


const updateName = (user, name) => {
    // console.log("Before change:", user);
    return new Promise((resolve, reject) => {
        if (!user) {
            reject("User 2 cannot be empty");
        }
        user.name = name;
        resolve(user);
    });
};

// // Promise chaining
// getUserById(1)
//     .then((result) => {
//         console.log("original user value:", result);
//         return updateName(result, "Hari")
//     })
//     .then((result) => {
//         console.log("new updated result:", result);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     });


// // Anonymous function
// console.log((() => {
//     return "hello world";
// })());


// (() => {
//     const user = await getUserById(1);
//     console.log(user);
// })();


// using Async-Await in promise
const updateUser = async (id, name) => {
    try {
        const user = await getUserById(id);
        console.log("Before update:", user);
        const updateUser = await updateName(user, name);
        console.log("After update:", updateUser);
    } catch (error) {
        console.log("Error:", error);
    }
};

updateUser(1, "Hari");


/*=========== Promise all using async-await =============*/

const getAllPromise = async () => {
    try {
        // const user1 = await getUserById(1);
        // const user2 = await getUserById(2);
        // console.log([user1, user2]);
        const user1Promise = await getUserById(1);
        const user2Promise = await getUserById(2);
        const result = await Promise.all([user1Promise, user2Promise])
        // console.log(result);

        /*=====Destructing Assignment=====*/
        
        // const detail = {
        //     name: "hello",
        //     address: "example",
        // }

        // let {name, address} = detail;
        // console.log(name, address);

        /*================================*/

        const user1 = result[0];
        console.log("🚀 ~ file: asyncAwait.js ~ line 95 ~ obj", user1);
        const user2 = result[1];
        console.log("🚀 ~ file: asyncAwait.js ~ line 97 ~ obj", user2);

        // console.log(result[0]);
        // console.log(result[1]);

    } catch (error) {
        console.log("Error:", error);
    };
};

getAllPromise();