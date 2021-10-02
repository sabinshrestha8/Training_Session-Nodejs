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
        // console.log(result);
        resolve(result);
    });
};


const updateName = (user, name) => {
    // console.log("Before change:", user);
    return new Promise((resolve, reject) => {
        if (!user) {
            reject("User cannot be empty");
        }
        user.name = name;
        resolve(user);
    });
};


getUserById(3)
    .then((result) => {
        console.log("original user value:", result);
        return updateName(result, "Hari")
    })
    .then((result) => {
        console.log("new updated result:", result);
    })
    .catch((err) => {
        console.log("Error:", err);
    });