import mongoose from "mongoose";
// define admin schema

const doctorSchema = mongoose.Schema([
  {
    userType: { type:String, default: "doctor" },
    username: String,
    password: String,
    mobile: Number,
    DOB: String,
    patients: [],
  },
]);

export const Doctor = mongoose.model("Doctor", doctorSchema);
