import mongoose from "mongoose";

const group_members = mongoose.Schema(
    {
        group_id: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        user_id: {
            type: mongoose.Types.ObjectId,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const GroupMember = mongoose.model('group_members', group_members);