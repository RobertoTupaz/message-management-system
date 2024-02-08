import mongoose from "mongoose";

const group = mongoose.Schema(
    {
        group_name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Group = mongoose.model('group', group);