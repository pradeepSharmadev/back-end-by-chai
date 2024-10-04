import mongoose from "mongoose";
import { type } from "os";

// const userSchema = new mongoose.Schema(
//     {
//         userName:String,
//         email:String,
//         password:String
//     },
//     {timestamps:true}  // timestanps give two fields createdAt and updatedAt
// )

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema);