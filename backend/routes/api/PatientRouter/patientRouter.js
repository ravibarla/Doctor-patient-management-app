import express from "express";
import {
  getPatient,
  register,
  login,
} from "../../../controller/patientController.js";
const router = express.Router();
router.get("/", getPatient);
router.post("/register", register);
router.post("/login", login);
export default router;
