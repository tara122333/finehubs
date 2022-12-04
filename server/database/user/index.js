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
                type: String,
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


UserSchema.statics.findByMobileAndEmail = async({email,phoneNumber}) =>{
    const findEmail = await UserModel.findOne({email});
    const findPhone = await UserModel.findOne({phoneNumber});
    if(findEmail || findPhone){
        throw new Error("User already Exist!!!!!");
    }
    return false;
}

UserSchema.statics.findByEmailAndPassword = async({email,password}) => {
    const findEmail = await UserModel.findOne({email});
    if(!findEmail) throw new Error("user not found"); 
    
    const isMatch = await UserModel.findOne(password,findEmail.password);
    if(!isMatch) throw new Error("password not matches");
    
    return findEmail;
}

export const UserModel = mongoose.model("user",UserSchema);