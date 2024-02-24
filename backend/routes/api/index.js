import express from "express";
import { getAdmin, home, register } from "../../controller/index.js";
import doctorRouter from "../api/doctorRouter/doctorRouter.js";
import patientRouter from "../api/PatientRouter/patientRouter.js";
const router = express.Router();
router.use("/doctor", doctorRouter);
router.use("/patient", patientRouter);
router.post("/register", register);
router.get("/", getAdmin);

export default router;
