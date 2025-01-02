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