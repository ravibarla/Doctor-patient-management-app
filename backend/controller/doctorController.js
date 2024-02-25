import { Doctor } from "../model/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Patient } from "../model/patientModel.js";
export const register = (req, res) => {
  const { username, password, mobile, dob, patients, type } = req.body;
  const newDoctor = new Doctor({
    type,
    username,
    password,
    mobile,
    dob,
    patients,
  });
  newDoctor.save().then(() => console.log("Doctor is registered succeffully"));
  return res.status(200).send(" registeration of Doctor succesfully");
};

export const getDoctor = (req, res) => {
  Doctor.find({}).then((user) => res.send(user));
};

//import secret key
dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const login = async (req, res) => {
  const user = await Doctor.find({ username: req.body.username });

  if (user.length < 1 || !bcrypt.compare(req.body.password, user[0].password)) {
    return res.status(401).json({ error: "Invalid Credentials" });
  }
  const token = jwt.sign(
    {
      id: user[0]._id,
      username: user[0].username,
      mobile: user[0].mobile,
      userType: user[0].userType,
    },
    JWT_SECRET_KEY,
    {
      expiresIn: "2h",
      algorithm: "HS256",
    }
  );
  return res.status(200).json({ token });
};

export const getPatientRecord = async (req, res) => {
  const { mobile, username } = req.params;
  const patient = await Patient.find({ mobile, username });
  const patientId = patient[0]._id;
  if (patient) return res.status(200).json(patient);
  return res.status(401).json({ message: "no patient found" });
};

export const updateMedicalRecord = async (req, res) => {
  //get doctors details
  const { username, mobile } = req.user;

  const { patientId, diagnosis, department, advice, medicines } = req.body;
  const doctor = {
    name: username,
    mobile,
  };
  const newMedicalRecord = {
    department,
    diagnosis,
    advice,
    medicines,
    doctor,
  };
  const currentpatient = await Patient.findById(patientId);

  Patient.findOneAndUpdate(
    { _id: patientId },
    { $push: { medicalRecords: newMedicalRecord } },
    { new: true, upsert: true }
  )
    .then((updatedUser) =>
      res
        .status(200)
        .send({ message: "successfully updated", body: updatedUser })
    )
    .catch((err) => res.status(400).json("some error"));
};
