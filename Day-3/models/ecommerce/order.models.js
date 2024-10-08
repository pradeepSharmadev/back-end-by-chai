import mongoose from "mongoose";

//mini Schema 

const orderItemsSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true,
    },
    quantity : {
        type : Number,
        required : true,
    }
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    orderDate: {
      type: Date,
      required: true,
    },
    orderItems: {
        //Method1
        type : [orderItemsSchema],
        //Method3
        // type : [
        //     {
        //         productId:{
        //             type : String,
        //             required:true,
        //         },
        //         quantity : {
        //             type : Number,
        //             required : true,
        //         }
        //     }
        // ]

        //Method2
    //   type: [mongoose.Schema.Types.ObjectId],
    //   ref: "Product",
    //   required: true,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "delivered"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "card"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
    paymentId: {
      type: String,
    },
    address : {
        type : String,
        required : true,
    },
    },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
