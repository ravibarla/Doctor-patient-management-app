import mongoose from "mongoose";
// define admin schema

const adminSchema = mongoose.Schema([
  {
    username: String,
    password: String,
    mobile: Number,
    DOB: String,
    userType: { type: String, default: "admin" },
  },
]);

export const Admin = mongoose.model("Admin", adminSchema);
