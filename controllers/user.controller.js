const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });
        await newUser.save();
        res.status(201).send({ message: "User created successfully" });
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
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).select('+password');

        if (user) {
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (isPasswordMatch) {
                res.send({
                    message: "Authentication Successful",
                    statusCode: 200,
                    data: user,
                });
            } else {
                res.status(401).send({ message: "Authentication Failed" });
            }
        } else {
            res.status(401).send({ message: "Authentication Failed" });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
};

const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUserById = async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user){
            return res.status(404).json({ message: "User not found" });
        }

        await user.deleteOne()
        res.status(200).json({
            message: "Deleted Successful",
            statusCode: 200,
            data: user,
        });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUserById = async (req,res) =>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id);
        if (!user){
            return res.status(404).json({ message: "User not found" });
        }
        await user.save();
        res.send({
            message: "Updated Successful",
            statusCode: 200,
            data: user,
        });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    login,
    getUserById,
    deleteUserById,
    updateUserById
};

