import express from "express";
import {
  getDoctor,
  register,
  login,
} from "../../../controller/doctorController.js";

import authorization from "../../../controller/authorizationController.js";
const router = express.Router();
router.get("/", authorization, getDoctor);
router.post("/register", register);
router.post("/login", login);
export default router;
