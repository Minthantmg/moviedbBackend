const User = require('../models/user')

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('+password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const login = async (req, res) => {
    try {
        console.log(req.body);

        const user = await User.findOne({ email: req.body.email });

        // if (!user) {
        //     return res.status(404).json({ message: "User not found" });
        // }

        res.status(200).json(user);
        console.log("User found:", user);
    } catch (error) {
        console.error("Error occurred during login:", error);
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createUser,
    getAllUsers,
    login
};

