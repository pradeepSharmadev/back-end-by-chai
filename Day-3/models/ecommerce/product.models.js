import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description:{
        type : String,
        required : true,
    },
    price :{
        type : Number,
        required : true,
    },
    category :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true,
    },
    Stocks :{
        type : Number,
        required : true,
    },
    image : {
        type : String,  // its up string of image store in third party server(uri)
        required : true,
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    rating : {
        type : Number,
        default : 0
    },
},{timestamps:true})