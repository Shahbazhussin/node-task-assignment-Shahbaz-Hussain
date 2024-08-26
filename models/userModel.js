let users = [];
let userId = 1;

class User {
    constructor(name, email) {
        this.id = userId++;
        this.name = name;
        this.email = email;
    }
}

function addUser(name, email) {
    const user = new User(name, email);
    users.push(user);
    return user;
}

function getUsers() {
    return users;
}

function getUserById(id) {
    return users.find(user => user.id === parseInt(id));
}

function updateUser(id, name, email) {
    const user = getUserById(id);
    if (user) {
        user.name = name;
        user.email = email;
        return user;
    }
    return null;
}

function deleteUser(id) {
    users = users.filter(user => user.id !== parseInt(id));
}

module.exports = {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
