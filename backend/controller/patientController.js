import { Patient } from "../model/patientModel.js";
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
