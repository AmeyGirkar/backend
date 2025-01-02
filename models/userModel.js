import mongoose from "mongoose";

const MERNUser  = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    city:{
        type: String,
        required: true,
    }
})

export default mongoose.model('users_in_collection', MERNUser);