import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";
import {
  signinValidator,
  signupValidator,
} from "../validators/auth.validators.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

router.route("/signin").post(signinValidator, validateRequest, signin);
router.route("/signup").post(signupValidator, validateRequest, signup);

export default router;
