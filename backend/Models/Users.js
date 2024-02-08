import mongoose from "mongoose";
import bcrypt from "bcrypt";

const users = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Your email address is required"],
            unique: true,
        },
        username: {
            type: String,
            required: [true, "Username is required!"]
        },
        password: {
            type: String,
            required: [true, "Password is required!"]
        },
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

users.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

export const User = mongoose.model('users', users);