import express from "express";
import { getPatient, register } from "../../../controller/patientController.js";
const router = express.Router();
router.get("/", getPatient);
router.post("/register", register);
export default router;
