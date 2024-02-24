import mongoose from "mongoose";
// define admin schema

const adminSchema = mongoose.Schema([
  {
    username: String,
    password: String,
    mobile: Number,
    DOB: String,
  },
]);

export const Admin = mongoose.model("Admin", adminSchema);
