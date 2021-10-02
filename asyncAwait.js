// const users = [{
//     id: 1,
//     name: "John",
// },
// {
//     id: 2,
//     name: "sara",
// }]

// const getUserById = async (id) => {
//     // const newUserArray = users.filter((user, index) => {
//     //     return user.id === id;
//     // });
//     // console.log(newUserArray);

//     // let foundUser = null;
//     // for(const user of users) {
//     //     console.log(user)
//     //     if(user.id === id) {
//     //         foundUser = user;
//     //     }
//     // }

//     // const updateName = (id, name) => {
//     //     const user = getUserById(id);
//     //     console.log("before change: ", user);

//     //     if (user) {
//     //         user.name = name;
//     //         console.log("after change: ", user);
//     //     }
//     // }

// }

// // console.log(() => {
// //     return "Hello world";
// // })();


// (() => {
//     const user = getUserById(1);
// })();




/*================================================*/

// const getRequestBody = () => {
//     return new Promise((resolve, reject) => {
//         request
//     })
// }

// (async() => {
//     const result = await getRequestBody();
//     console.log(result);
// })();



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
    // // find user by filter method
    // const newUserArray = users.filter((user, index) => {
    //     // console.log(user);
    //     return user.id === id;
    // });

    // console.log(newUserArray);

    // // find user by for of loop
    // let foundUser = null;
    //     for (const user of users) {
    //         // console.log(user);
    //         if (user.id === id) {
    //             foundUser = user;
    //         }
    //     }
    //     console.log(foundUser);

    // find user by find method
    const result = users.find((user, index) => {
        return user.id === id;
    });
    // console.log(result);
    return result;
};


const updateName = (id, name) => {
    const user = getUserById(id);
    console.log("Before change:", user);
    if (user) {
        user.name = name;
        console.log("After change:", user);
    }
};

updateName(1, 'Ram');
// getUserById(7);