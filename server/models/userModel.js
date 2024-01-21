import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Password must be a 6 character"],
    },
    email: {
        type: String,
        required: [true, "Please enter a email"],
        unique: [true, "email already exists"],
    },
    favourite: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "stockModel"
        }
    ]

}, {
    timestamps: true,
})

const User = mongoose.model("Users", userSchema);

export default User;