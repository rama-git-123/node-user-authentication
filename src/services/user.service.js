const User = require("../models/user.model");

// Create
const createUser = async (data) => {
    return await User.create(data);
};

// Get All
const getUsers = async () => {
    return await User.find();
};

// Get One
const getUserById = async (id) => {
    return await User.findById(id);
};

// Update
const updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, {
        new: true
    });
};

// Delete
const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};