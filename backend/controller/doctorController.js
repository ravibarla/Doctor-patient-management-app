import { Doctor } from "../model/doctorModel.js";
export const register = (req, res) => {
  const { username, password, mobile, dob,patients } = req.body;
  const newDoctor = new Doctor({
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
