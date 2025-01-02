import MERNUser from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await MERNUser.find();
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
export const getUserById = async (req, res) => {
    try {
        const user = await MERNUser.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
export const createUser = async (req, res) => {
    const user =new MERNUser(req.body);
    try {
         const insertuser  = await user.save();
        res.status(201).json(insertuser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
export const updateUser = async (req, res) => {
    try {
            const updatedUser  = await MERNUser.updateOne({_id:req.params.id},{$set:req.body},{})
        res.status(201).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
export const deleteUser = async (req, res) => {
    try {
            const deleteuser  = await MERNUser.deleteOne({_id:req.params.id});
        res.status(201).json(deleteuser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }