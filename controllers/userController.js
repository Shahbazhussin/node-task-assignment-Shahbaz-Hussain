const userModel = require('../models/userModel');

function createUser(req, res) {
    const { name, email } = req.body;
    const user = userModel.addUser(name, email);
    res.status(201).json(user);
}

function getAllUsers(req, res) {
    res.json(userModel.getUsers());
}

function getUser(req, res) {
    const user = userModel.getUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

function updateUser(req, res) {
    const { name, email } = req.body;
    const user = userModel.updateUser(req.params.id, name, email);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

function deleteUser(req, res) {
    userModel.deleteUser(req.params.id);
    res.status(204).end();
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
};
