import { Admin } from "../model/adminModel.js";

export const home = (req, res) => {
  res.send("hiio");
  return;
};

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
