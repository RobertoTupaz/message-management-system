import mongoose from "mongoose";

const answers = mongoose.Schema(
    {
        question_id: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        answer: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
);

export const Answer = mongoose.model('answers', answers);