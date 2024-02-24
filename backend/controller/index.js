import { Admin } from "../model/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const home = (req, res) => {
  res.send("hiio");
  return;
};
// console.log(JWT_SECRET_KEY)

export const register = (req, res) => {
  const { username, password, mobile, dob } = req.body;
  const newAdmin = new Admin({
    username,
    password,
    mobile,
    dob,
  });
  newAdmin.save().then(() => console.log("admin is registered succeffully"));
  return res.status(200).send(" registeration of Admin succesfully");
};

export const getAdmin = async (req, res) => {
  await Admin.find({}).then((user) => res.send(user));
};


//import secret key
dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const login = async (req, res) => {
  const user = await Admin.find({ username: req.body.username });

  if (user.length<1 || ! bcrypt.compare(req.body.password, user[0].password)) {
    return res.status(401).json({ error: "Invalid Credentials" });
  }
  const token = jwt.sign({ username: user.username }, JWT_SECRET_KEY, {
    expiresIn: "2h",
    algorithm: 'HS256'
  });
  return res.status(200).json({ token });
};
