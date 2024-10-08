import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    diagnosedWith :{
        type:String,
        required:true,
    },
    address : {
        type:String,
        required : true,
    },
    age : {
        type:Number,
        required:true,
    },
    bloodGroup :{
        type:String,
        required:true,
    },
    gender :{
        type:String,
        enum : ["M","O","F"],
        required:true,
    },
    admittedIn :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital",
        required : true
    }
}, { timeseries: true });

export const User = mongoose.model("User", userSchema);
