//const { Signup } = require("../Controllers/AuthController");
import {Signup, Login} from "../Controllers/AuthController.js"
//import router = require("express").Router();
import express from "express";
import { userVerification } from "../MIddlewares/AuthMiddleware.js";

const router = express.Router();

router.post("/", userVerification);

router.post("/signup", Signup);

router.post("/login", Login);

export default router;