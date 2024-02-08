import mongoose from "mongoose";

const group_category = mongoose.Schema(
    {
        group_id: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        category_name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const GroupCategory = mongoose.model('group_category', group_category);