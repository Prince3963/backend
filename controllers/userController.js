const User = require("../model/usermodel");
const bcrypt = require("bcryptjs");

const getAllUser = async (req, res) => {
    const user = await User.find();
    res.status(200).json(user);
};

const registerUser = async (req, res) => {
    const {name , email, age, password} = req.body;
    const newUser = new User({name, email, age, password});
    await newUser.save();

    res.status(200).json(newUser);
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const isEmail = await User.findOne({email});
    if(!isEmail) {
        return res.status(404).json({message : "Email not found"});
    }; 

    const validPassword = bcrypt.compare(password, isEmail.password);
    if (!validPassword) {
        return res.status(404).json({message : "Invalid password"});
    }

    res.status(200).json({
        message : "Login successful",
        isEmail: {
            id: isEmail._id,
            name : isEmail.name,
            email : isEmail.email,
            age : isEmail.age
        }
    });
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const {name, email, age} = req.body;

    const updateUser = await User.findByIdAndUpdate(
        id,
        {name, email, age},
        { new:true }
    );

    if (!updateUser) {
        res.status(404).json({message : "User not found"});
    }
    res.status(200).json(updateUser);
};

const deleteUser = async (req, res) => {
    const {id} = req.params;

    const deleteUser = await User.findByIdAndDelete(id);

    res.status(200).json(deleteUser);
};

module.exports = {getAllUser, loginUser, registerUser, updateUser, deleteUser};      