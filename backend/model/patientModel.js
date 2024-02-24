import mongoose from "mongoose";
// define admin schema

const patientSchema = mongoose.Schema([
  {
    userType: { type: String, default: "patient" },
    username: String,
    password: String,
    mobile: Number,
    DOB: String,
    medicalRecords: [],
  },
]);

export const Patient = mongoose.model("Patient", patientSchema);
