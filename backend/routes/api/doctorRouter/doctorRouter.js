import express from "express";
import {
  getDoctor,
  register,
  login,
} from "../../../controller/doctorController.js";
const router = express.Router();
router.get("/", getDoctor);
router.post("/register", register);
router.post("/login", login);
export default router;
