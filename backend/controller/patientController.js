import { Patient } from "../model/patientModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
export const register = (req, res) => {
  const { username, password, mobile, dob, medicalRecords } = req.body;
  const newPatient = new Patient({
    username,
    password,
    mobile,
    dob,
    medicalRecords,
  });
  newPatient
    .save()
    .then(() => console.log("Patient is registered succeffully"));
  return res.status(200).send(" registeration of Patient succesfully");
};

export const getPatient = async (req, res) => {
  Patient.find({}).then((user) => res.send(user));
};

//import secret key
dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const login = async (req, res) => {
  const user = await Patient.find({ username: req.body.username });

  if (user.length < 1 || !bcrypt.compare(req.body.password, user[0].password)) {
    return res.status(401).json({ error: "Invalid Credentials" });
  }
  const token = jwt.sign(
    { id: user[0]._id, username: user[0].username },
    JWT_SECRET_KEY,
    {
      expiresIn: "2h",
      algorithm: "HS256",
    }
  );
  return res.status(200).json({ token });
};
