import { Admin } from "../model/adminModel.js";
import { Doctor } from "../model/doctorModel.js";
import { Patient } from "../model/patientModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const home = (req, res) => {
  res.send("hiio");
  return;
};
// console.log(JWT_SECRET_KEY)

export const register = (req, res) => {
  const { username, password, mobile, dob, type } = req.body;
  const newAdmin = new Admin({
    type,
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

  // if (user.length < 1 && !bcrypt.compare(req.body.password, user[0].password)) {
  //   return res.status(401).json({ error: "Invalid Credentials" });
  // }
  if (user.length < 1) {
    return res.status(401).json({ error: "Invalid Credentials" });
  } else {
    //if password is stored in hashed
    // if (!bcrypt.compareSync(req.body.password, user[0].password)) {
    //   return res.status(401).json({ error: "Invalid Credentials" });
    // }
    //if password is not stored in hashed
    if (req.body.password !== user[0].password) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
  }

  const token = jwt.sign(
    { id: user[0]._id, username: user[0].username, userType: user[0].userType },
    JWT_SECRET_KEY,
    {
      expiresIn: "2h",
      algorithm: "HS256",
    }
  );
  return res.status(200).json({ token });
};

export const getDoctors = async (req, res) => {
  const doctors = await Doctor.find({});
  if (doctors) {
    return res.status(200).json({ doctors });
  }
  return res.status(404).json({ message: "empty list of doctors" });
};

export const removeDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    await Doctor.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "deleted successfully" });
  } catch (err) {
    return res.status(417).json({ message: err });
  }
};
export const removeAllDoctor = async (req, res) => {
  try {
    const result = await Doctor.deleteMany({});
    return res.status(200).json({ message: "deleted successfully" });
  } catch (err) {
    return res.status(417).json({ message: "deletion failure" });
  }
};

export const getPatients = async (req, res) => {
  const patients = await Patient.find({});
  if (patients) {
    return res.status(200).json({ patients });
  }
  return res.status(404).json({ message: "empty list of patients" });
};

export const removePatient = async (req, res) => {
  const { id } = req.params;
  try {
    await Patient.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "deleted successfully" });
  } catch (err) {
    return res.status(417).json({ message: err });
  }
};

export const removeAllPatient = async (req, res) => {
  try {
    const result = await Patient.deleteMany({});
    return res.status(200).json({ message: "deleted successfully" });
  } catch (err) {
    return res.status(417).json({ message: "deletion failure" });
  }
};
