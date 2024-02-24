import mongoose from "mongoose";

mongoose.connect(`mongodb://127.0.0.1:27017/doctor-patient-management-api`);
// mongoose.connect(`mongodb+srv://ravibarla1:5rxkaVCv0ezFeayg@cluster0.zcdgmle.mongodb.net/?retryWrites=true&w=majority`)
export const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting to mongodb"));

db.once("open", () => {
  console.log("connect to database :: mongodb");
});
