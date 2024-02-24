import express from "express";
import { getAdmin, home, register, login } from "../../controller/index.js";
import doctorRouter from "./doctorRouter/doctorRouter.js";
import patientRouter from "./PatientRouter/patientRouter.js";

const router = express.Router();
router.use("/doctor", doctorRouter);
router.use("/patient", patientRouter);
router.post("/register", register);
router.get("/get", getAdmin);
router.post("/login", login);
export default router;
