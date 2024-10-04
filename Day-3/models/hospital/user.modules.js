import mongoose from "mongoose";

const userSchema = new mongoose.Schema({}, { timeseries: true });

export const User = mongoose.model("User", userSchema);
