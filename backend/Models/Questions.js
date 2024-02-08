import mongoose from "mongoose";

const questions = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        group_id: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Question = mongoose.model('questions', questions);