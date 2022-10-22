import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String
    },

    address: [
        {
            detail: {
                type: String,
            },
            for: {
                type: String
            }
        },
    ],

    phoneNumber: [
        {
            type: Number,
        }
    ]
},

    {
        timestamps: true
    });


export const UserModel = mongoose.model("user",UserSchema);