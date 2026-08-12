const userService = require("../services/user.service");

// Create User
exports.createUser = async (req, res) => {

    try {

        const user = await userService.createUser(req.body);

        res.status(201).json(user);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Get All Users
exports.getUsers = async (req, res) => {

    try {

        const users = await userService.getUsers();

        res.json(users);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Get Single User
exports.getUser = async (req, res) => {

    try {

        const user = await userService.getUserById(req.params.id);

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.json(user);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Update User
exports.updateUser = async (req, res) => {

    try {

        const user = await userService.updateUser(
            req.params.id,
            req.body
        );

        res.json(user);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Delete User
exports.deleteUser = async (req, res) => {

    try {

        await userService.deleteUser(req.params.id);

        res.json({
            message: "User deleted"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};