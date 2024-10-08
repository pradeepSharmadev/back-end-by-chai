import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    doctorName: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
      default: 0,
    },
    address: {
      type: String,
      required: true,
    },
    workingAtHospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
