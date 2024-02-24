import express from "express";
import {
  getDoctor,
  register,
  login,
  getPatientRecord,
  updateMedicalRecord
} from "../../../controller/doctorController.js";

import authorization, {
  doctorAuthorization,
} from "../../../controller/authorizationController.js";
const router = express.Router();
router.get("/", authorization, getDoctor);
router.post("/register", register);
router.post("/login", login);
router.get(
  "/patientRecord/:mobile/:username",
  doctorAuthorization,
  getPatientRecord
);
router.post("/patient/updateMedicalRecord", updateMedicalRecord);
export default router;
