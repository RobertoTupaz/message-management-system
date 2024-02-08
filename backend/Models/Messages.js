import mongoose from "mongoose";

const messages = mongoose.Schema(
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

export const Message = mongoose.model('messages', messages);