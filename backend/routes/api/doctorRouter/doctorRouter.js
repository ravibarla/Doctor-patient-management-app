import express from "express";
import {
  getDoctor,
  register,
  login,
  getPatientRecord,
  updateMedicalRecord,
  removePatientRecord,
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
router.post(
  "/patient/updateMedicalRecord",
  doctorAuthorization,
  updateMedicalRecord
);
router.delete(
  "/patient/removeMedicalReport",
  doctorAuthorization,
  removePatientRecord
);
export default router;
