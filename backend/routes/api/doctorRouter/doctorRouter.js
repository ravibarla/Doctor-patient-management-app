import express from "express";
import { getDoctor, register } from "../../../controller/doctorController.js";
const router = express.Router();
router.get("/", getDoctor);
router.post("/register", register);
export default router;
