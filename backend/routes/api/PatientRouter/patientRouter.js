import express from "express";
import {
  getPatient,
  register,
  login,
} from "../../../controller/patientController.js";

import authorization from "../../../controller/authorizationController.js";
const router = express.Router();
router.get("/", authorization, getPatient);
router.post("/register", register);
router.post("/login", login);
export default router;
