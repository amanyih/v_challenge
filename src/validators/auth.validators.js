import { body } from "express-validator";

const signupValidator = [
  body("fullName").notEmpty(),
  body("email").notEmpty().isEmail().withMessage("must provide valid email"),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("password must be at least 8 characters"),
];

const signinValidator = [
  body("email").notEmpty().isEmail().withMessage("must provide valid email"),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("password must be at least 8 characters"),
];

export { signinValidator, signupValidator };
