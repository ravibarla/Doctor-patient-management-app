import express from "express";
import {
  getAdmin,
  home,
  register,
  login,
  removeAllDoctor,
  removeAllPatient,
} from "../../controller/index.js";
import doctorRouter from "./doctorRouter/doctorRouter.js";
import patientRouter from "./PatientRouter/patientRouter.js";
import authorization, {
  adminAuthorization,
} from "../../controller/authorizationController.js";
import {
  getDoctors,
  getPatients,
  removeDoctor,
  removePatient,
} from "../../controller/index.js";
const router = express.Router();
router.use("/doctor", doctorRouter);
router.use("/patient", patientRouter);
router.post("/register", register);
router.get("/get", authorization, getAdmin);
router.get("/getDoctors", authorization, getDoctors);
router.get("/getPatients", authorization, getPatients);
router.delete(
  "/removeDoctor/:id",
  authorization,
  adminAuthorization,
  removeDoctor
);
router.delete(
  "/removePatient/:id",
  authorization,
  adminAuthorization,
  removePatient
);
router.delete("/removeAllDoctor", removeAllDoctor);
router.delete("/removeAllPatient", removeAllPatient);
router.post("/login", login);
export default router;
